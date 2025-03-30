import BaseDetailPage from '../../components/common/BaseDetailPage/BaseDetailPage'
import { fetchSpecies } from '../../store/slices/speciesSlice'

const getInfoItems = (speciesItem) => [
  { label: 'Classification', value: speciesItem.classification || 'Unknown' },
  { label: 'Designation', value: speciesItem.designation || 'Unknown' },
  { label: 'Average Height', value: speciesItem.average_height || 'Unknown' },
  { label: 'Skin Colors', value: speciesItem.skin_colors || 'Unknown' },
  { label: 'Hair Colors', value: speciesItem.hair_colors || 'Unknown' },
  { label: 'Eye Colors', value: speciesItem.eye_colors || 'Unknown' },
  { label: 'Average Lifespan', value: speciesItem.average_lifespan || 'Unknown' },
  { label: 'Language', value: speciesItem.language || 'Unknown' },
  { label: 'Homeworld', value: speciesItem.homeworld || [], section: 'homeworld' },
  { label: 'People', value: speciesItem.people || [], section: 'people' },
  { label: 'Films', value: speciesItem.films || [], section: 'films' },
]

const SpeciesDetailPage = () => (
  <BaseDetailPage
    fetchAction={fetchSpecies}
    selector={(state) => state.species}
    getInfoItems={getInfoItems}
    resourceName="Species"
    idField="name"
  />
)

export default SpeciesDetailPage
