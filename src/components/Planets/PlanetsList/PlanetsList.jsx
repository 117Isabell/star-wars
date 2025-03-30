import PropTypes from 'prop-types'
import List from '../../common/List/List'
import PlanetCard from '../PlanetsCard/PlanetsCard'

const PlanetsList = ({ items, currentPage, totalPages, onPageChange }) => (
  <List
    items={items}
    renderItem={(planet) => <PlanetCard key={planet.id} planet={planet} />}
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={onPageChange}
    showPagination={true}
  />
)

PlanetsList.propTypes = {
  items: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

PlanetsList.defaultProps = {
  items: [],
}

export default PlanetsList
