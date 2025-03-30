import { createBaseSlice } from '../utils/createBaseSlice'

const transformSpecies = (data) =>
  data.map((species) => ({
    ...species,
  }))

const slice = createBaseSlice('Species', {
  endpoint: 'species',
  transformData: transformSpecies,
  hasSorting: false,
})

const {
  reducer,
  thunks: { fetchItems: fetchSpecies },
} = slice

export { fetchSpecies }
export default reducer
