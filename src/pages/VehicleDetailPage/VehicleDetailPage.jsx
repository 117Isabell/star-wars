import BaseDetailPage from '../../components/common/BaseDetailPage/BaseDetailPage'
import { fetchVehicles } from '../../store/slices/vehiclesSlice'

const getInfoItems = (vehicle) => [
  { label: 'Model', value: vehicle.model || 'Unknown' },
  { label: 'Manufacturer', value: vehicle.manufacturer || 'Unknown' },
  { label: 'Cost in credits', value: vehicle.cost_in_credits || 'Unknown' },
  { label: 'Length', value: Array.isArray(vehicle.cost_in_credits) ? vehicle.cost_in_credits.join(', ') : 'Unknown' },
  { label: 'Max atm. speed', value: vehicle.max_atmosphere_speed || 'Unknown' },
  { label: 'Crew', value: vehicle.crew || 'Unknown' },
  { label: 'Passengers', value: vehicle.passengers || 'Unknown' },
  { label: 'Cargo capacity', value: vehicle.cargo_capacity || 'Unknown' },
  { label: 'Consumables', value: vehicle.consumables || 'Unknown' },
  { label: 'Vehicle class', value: vehicle.vehicle_class || 'Unknown' },
  { label: 'Pilots', value: vehicle.pilots || [], section: 'pilots' },
]

const VehicleDetailPage = () => (
  <BaseDetailPage
    fetchAction={fetchVehicles}
    selector={(state) => state.vehicles}
    getInfoItems={getInfoItems}
    resourceName="Vehicles"
    idField="vehicle_name"
    getImage={(vehicle) => ({
      src: vehicle.image,
      alt: vehicle.vehicle_name,
    })}
    formatTitle={(vehicle) => vehicle.vehicle_name}
  />
)

export default VehicleDetailPage
