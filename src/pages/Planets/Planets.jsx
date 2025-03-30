import BasePage from '../../components/common/BasePage/BasePage'
import PlanetsList from '../../components/Planets/PlanetsList/PlanetsList'
import { fetchPlanets } from '../../store/slices/planetsSlice'

const Planets = () => (
  <BasePage
    title="Planets"
    fetchAction={fetchPlanets}
    selector={(state) => state.planets}
    ListComponent={PlanetsList}
    itemsPerPage={5}
  />
)

export default Planets
