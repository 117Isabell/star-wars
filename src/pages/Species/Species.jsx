import BasePage from '../../components/common/BasePage/BasePage'
import SpeciesList from '../../components/Species/SpeciesList/SpeciesList'
import { fetchSpecies } from '../../store/slices/speciesSlice'

const Species = () => (
  <BasePage
    title="Species"
    fetchAction={fetchSpecies}
    selector={(state) => state.species}
    ListComponent={SpeciesList}
    hasSorting={false}
    itemsPerPage={5}
  />
)

export default Species
