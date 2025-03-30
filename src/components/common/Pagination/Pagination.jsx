import PropTypes from 'prop-types'
import './Pagination.scss'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pages = []
    const maxVisiblePages = 4

    for (let i = 1; i <= Math.min(maxVisiblePages, totalPages); i++) {
      pages.push(
        <button
          key={i}
          className={`pagination__button ${currentPage === i ? 'active' : ''}`}
          onClick={() => onPageChange(i)}
        >
          {i}
        </button>
      )
    }

    if (totalPages > maxVisiblePages) {
      pages.push(
        <span key="ellipsis" className="pagination__ellipsis">
          ...
        </span>
      )

      pages.push(
        <button
          key={totalPages}
          className={`pagination__button ${currentPage === totalPages ? 'active' : ''}`}
          onClick={() => onPageChange(totalPages)}
        >
          {totalPages}
        </button>
      )
    }

    return pages
  }

  return (
    <div className="pagination">
      {renderPageNumbers()}

      <button
        className="pagination__button pagination__button--next"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  )
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

export default Pagination
