import PropTypes from 'prop-types'
import List from '../../common/List/List'
import SpeciesCard from '../SpeciesCard/SpeciesCard'

const SpeciesList = ({ items, currentPage, totalPages, onPageChange }) => (
  <List
    items={items}
    renderItem={(species) => <SpeciesCard species={species} />}
    showPagination={true}
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={onPageChange}
  />
)

SpeciesList.propTypes = {
  items: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default SpeciesList
