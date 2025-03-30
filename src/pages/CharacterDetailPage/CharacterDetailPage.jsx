import BaseDetailPage from '../../components/common/BaseDetailPage/BaseDetailPage'
import { fetchCharacters } from '../../store/slices/charactersSlice'
import { getArrayValue } from '../../utils/arrayHelpers'

const getInfoItems = (character) => [
  { label: 'Height', value: character.height },
  { label: 'Mass', value: character.mass },
  { label: 'Hair color', value: character.hair_color },
  { label: 'Eye color', value: character.eye_color },
  { label: 'Birth', value: character.birth_year },
  { label: 'Gender', value: character.gender },
  { label: 'Homeworld', value: character.homeworld?.[0]?.name || 'Not specified' },
  {
    label: 'Films',
    value: character.films || [],
    section: 'films',
  },
  {
    label: 'Species',
    value: getArrayValue(character.species),
  },
  {
    label: 'Vehicles',
    value: getArrayValue(character.vehicles),
    section: 'vehicles',
  },
  {
    label: 'Starships',
    value: character.starships || [],
    section: 'starships',
  },
]

const CharacterDetailPage = () => (
  <BaseDetailPage
    fetchAction={fetchCharacters}
    selector={(state) => state.characters}
    getInfoItems={getInfoItems}
    resourceName="Characters"
    idField="name"
  />
)

export default CharacterDetailPage
