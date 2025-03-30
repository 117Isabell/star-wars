import List from '../../common/List/List'
import StarshipCard from '../StarshipCard/StarshipCard'
import PropTypes from 'prop-types'

const StarshipList = ({ items, currentPage, totalPages, onPageChange }) => {
  return (
    <List
      items={items || []}
      renderItem={(starship) => <StarshipCard key={starship.id} starship={starship} />}
      showPagination={true}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  )
}

StarshipList.propTypes = {
  items: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
}

StarshipList.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  onPageChange: () => {},
}

export default StarshipList
