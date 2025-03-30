import PropTypes from 'prop-types'
import Pagination from '../Pagination/Pagination'
import './List.scss'

const getUniqueKey = (item) => {
  if (item.id) return `${item.id}`
  if (item.name) return `${item.name}`
  if (item.url) return item.url
  if (item.vehicle_name) return `${item.vehicle_name}`
  throw new Error('Item must have either id, name, or url as a unique identifier')
}

const List = ({ items, renderItem, showPagination, currentPage, itemsPerPage = 5, onPageChange }) => {
  const totalPages = showPagination ? Math.ceil(items.length / itemsPerPage) : 1
  const paginatedItems = showPagination
    ? items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
    : items

  return (
    <div className="list">
      <ul className="list__grid">
        {paginatedItems.map((item) => (
          <li key={getUniqueKey(item)}>{renderItem(item)}</li>
        ))}
      </ul>

      {showPagination && totalPages > 1 && (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange} />
      )}
    </div>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
  showPagination: PropTypes.bool,
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  onPageChange: PropTypes.func,
}

List.defaultProps = {
  showPagination: false,
  currentPage: 1,
  itemsPerPage: 5,
  onPageChange: () => {},
}

export default List
