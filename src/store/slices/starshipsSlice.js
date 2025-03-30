import { createBaseSlice } from '../utils/createBaseSlice'

const transformStarships = (data) =>
  data.map((starship) => ({
    ...starship,
  }))

const slice = createBaseSlice('Starships', {
  endpoint: 'starships',
  transformData: transformStarships,
  hasSorting: true,
  initialState: {
    sortBy: 'name',
  },
})

const {
  reducer,
  actions: { setSortBy },
  thunks: { fetchItems: fetchStarships },
} = slice

export { fetchStarships, setSortBy }
export default reducer
