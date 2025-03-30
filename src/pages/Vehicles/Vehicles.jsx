import BasePage from '../../components/common/BasePage/BasePage'
import VehicleList from '../../components/Vehicles/VehicleList/VehicleList'
import { fetchVehicles } from '../../store/slices/vehiclesSlice'

const Vehicles = () => (
  <BasePage
    title="Vehicles"
    fetchAction={fetchVehicles}
    selector={(state) => state.vehicles}
    ListComponent={VehicleList}
    hasSorting={true}
    sortOptions={[
      { value: 'vehicle_name', label: 'Name' },
      { value: 'cost_in_credits', label: 'Cost in credits' },
    ]}
    itemsPerPage={5}
  />
)

export default Vehicles
