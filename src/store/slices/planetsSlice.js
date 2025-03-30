import { createBaseSlice } from '../utils/createBaseSlice'

const transformPlanets = (data) =>
  data.map((planet) => ({
    ...planet,
  }))

const slice = createBaseSlice('Planets', {
  endpoint: 'planets',
  transformData: transformPlanets,
  hasSorting: false,
})

const {
  reducer,
  thunks: { fetchItems: fetchPlanets },
} = slice

export { fetchPlanets }
export default reducer
