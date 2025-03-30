import List from '../../common/List/List'
import VehicleCard from '../VehicleCard/VehicleCard'
import PropTypes from 'prop-types'

const VehicleList = ({ items, currentPage, totalPages, onPageChange }) => {
  return (
    <List
      items={items || []}
      renderItem={(vehicle) => <VehicleCard key={vehicle.id} vehicle={vehicle} />}
      showPagination={true}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
    />
  )
}

VehicleList.propTypes = {
  items: PropTypes.array.isRequired,
  currentPage: PropTypes.number,
  totalPages: PropTypes.number,
  onPageChange: PropTypes.func,
}

VehicleList.defaultProps = {
  currentPage: 1,
  totalPages: 1,
  onPageChange: () => {},
}

export default VehicleList
