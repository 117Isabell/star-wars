import BasePage from '../../components/common/BasePage/BasePage'
import StarshipList from '../../components/Starships/StarshipList/StarshipList'
import { fetchStarships } from '../../store/slices/starshipsSlice'

const Starships = () => (
  <BasePage
    title="Starships"
    fetchAction={fetchStarships}
    selector={(state) => state.starships}
    ListComponent={StarshipList}
    hasSorting={true}
    sortOptions={[
      { value: 'name', label: 'Name' },
      { value: 'cost_in_credits', label: 'Cost in credits' },
    ]}
  />
)

export default Starships
