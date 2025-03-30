import BasePage from '../../components/common/BasePage/BasePage'
import CharacterList from '../../components/characters/CharacterList/CharacterList'
import { fetchCharacters } from '../../store/slices/charactersSlice'

const Characters = () => (
  <BasePage
    title="Characters"
    fetchAction={fetchCharacters}
    selector={(state) => state.characters}
    ListComponent={CharacterList}
    itemsPerPage={5}
  />
)

export default Characters
