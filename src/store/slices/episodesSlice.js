import { createBaseSlice } from '../utils/createBaseSlice'

const transformEpisodes = (data) =>
  data.map((episode) => ({
    ...episode,
  }))

const slice = createBaseSlice('Episodes', {
  endpoint: 'films',
  transformData: transformEpisodes,
  hasSorting: true,
})

const {
  reducer,
  actions: { setSortBy },
  thunks: { fetchItems: fetchEpisodes },
} = slice

export { setSortBy, fetchEpisodes }
export default reducer
