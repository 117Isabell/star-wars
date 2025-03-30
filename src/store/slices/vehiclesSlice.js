import { createBaseSlice } from '../utils/createBaseSlice'

const transformVehicles = (data) =>
  data.map((vehicle) => ({
    ...vehicle,
    src: vehicle.image,
  }))

const slice = createBaseSlice('Vehicles', {
  endpoint: 'vehicles',
  transformData: transformVehicles,
  hasSorting: true,
  initialState: {
    sortBy: 'name',
  },
})

const {
  reducer,
  actions: { setSortBy },
  thunks: { fetchItems: fetchVehicles },
} = slice

export { fetchVehicles, setSortBy }
export default reducer
