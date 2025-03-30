import BaseDetailPage from '../../components/common/BaseDetailPage/BaseDetailPage'
import { fetchStarships } from '../../store/slices/starshipsSlice'

const getInfoItems = (starship) => [
  { label: 'Name', value: starship.name || 'Unknown' },
  { label: 'Model', value: starship.model || 'Unknown' },
  { label: 'Manufacturer', value: starship.manufacturer || 'Unknown' },
  { label: 'Cost in credits', value: starship.cost_in_credits || 'Unknown' },
  { label: 'Length', value: starship.length || 'Unknown' },
  { label: 'Max atmosphering speed', value: starship.max_atmosphering_speed || 'Unknown' },
  { label: 'Crew', value: starship.crew || 'Unknown' },
  { label: 'Passengers', value: starship.passengers || 'Unknown' },
  { label: 'Cargo capacity', value: starship.cargo_capacity || 'Unknown' },
  { label: 'Consumables', value: starship.consumables || 'Unknown' },
  { label: 'Hyperdrive rating', value: starship.hyperdrive_rating || 'Unknown' },
  { label: 'MGLT', value: starship.MGLT || 'Unknown' },
  { label: 'Starship class', value: starship.starship_class || 'Unknown' },
  { label: 'Pilots', value: starship.pilots || [], section: 'pilots' },
  { label: 'Films', value: starship.films || [], section: 'films' },
]

const StarshipDetailPage = () => (
  <BaseDetailPage
    fetchAction={fetchStarships}
    selector={(state) => state.starships}
    getInfoItems={getInfoItems}
    resourceName="Starships"
    idField="name"
  />
)

export default StarshipDetailPage
