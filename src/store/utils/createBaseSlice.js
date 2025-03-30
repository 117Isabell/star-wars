import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import api from '../../services/api'

export const createBaseSlice = (name, options = {}) => {
  const {
    endpoint = name.toLowerCase(),
    transformData = (data) => data,
    hasSorting = false,
    initialState: additionalState = {},
  } = options

  const fetchItems = createAsyncThunk(`${name.toLowerCase()}/fetch${name}`, async () => {
    try {
      const response = await api.get(`/${endpoint}`)
      return transformData(response.data)
    } catch (error) {
      throw new Error(error.message || `Failed to fetch ${name.toLowerCase()}`)
    }
  })

  const baseInitialState = {
    items: [],
    status: 'idle',
    error: null,
    ...(hasSorting && { sortBy: 'releaseDate' }),
    ...additionalState,
  }

  const baseReducers = {
    ...(hasSorting && {
      setSortBy: (state, action) => {
        state.sortBy = action.payload
      },
    }),
  }

  const slice = createSlice({
    name: name.toLowerCase(),
    initialState: baseInitialState,
    reducers: baseReducers,
    extraReducers: (builder) => {
      builder
        .addCase(fetchItems.pending, (state) => {
          state.status = 'loading'
          state.error = null
        })
        .addCase(fetchItems.fulfilled, (state, action) => {
          state.status = 'succeeded'
          state.items = action.payload
          state.error = null
        })
        .addCase(fetchItems.rejected, (state, action) => {
          state.status = 'failed'
          state.error = action.error.message
        })
    },
  })

  return {
    reducer: slice.reducer,
    actions: slice.actions,
    thunks: {
      fetchItems,
    },
  }
}
