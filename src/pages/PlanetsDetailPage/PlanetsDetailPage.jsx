import BaseDetailPage from '../../components/common/BaseDetailPage/BaseDetailPage'
import { fetchPlanets } from '../../store/slices/planetsSlice'

const getInfoItems = (planet) => [
  { label: 'Climate', value: planet.climate || 'Unknown' },
  { label: 'Terrain', value: planet.terrain || 'Unknown' },
  { label: 'Population', value: planet.population || 'Unknown' },
  { label: 'Diameter', value: planet.diameter || 'Unknown' },
  { label: 'Rotation Period', value: planet.rotation_period || 'Unknown' },
  { label: 'Orbital Period', value: planet.orbital_period || 'Unknown' },
  { label: 'Gravity', value: planet.gravity || 'Unknown' },
  { label: 'Surface Water', value: planet.surface_water || 'Unknown' },
  { label: 'Residents', value: planet.residents || [], section: 'residents' },
  { label: 'Films', value: planet.films || [], section: 'films' },
]

const PlanetsDetailPage = () => (
  <BaseDetailPage
    fetchAction={fetchPlanets}
    selector={(state) => state.planets}
    getInfoItems={getInfoItems}
    resourceName="Planets"
    idField="name"
  />
)

export default PlanetsDetailPage
