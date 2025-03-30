import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import SortDropdown from '../SortDropdown/SortDropdown'
import PropTypes from 'prop-types'
import './BasePage.scss'

const BasePage = ({
  title,
  fetchAction,
  selector,
  ListComponent,
  hasSorting = false,
  sortOptions = [],
  customSortFunctions = {},
  itemsPerPage = 5,
}) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState(sortOptions[0]?.value || 'name')
  const dispatch = useDispatch()
  const { items = [], status, error } = useSelector(selector)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAction())
    }
  }, [status, dispatch, fetchAction])

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }

  const handleSortChange = (value) => {
    setSortBy(value)
    setCurrentPage(1)
  }

  const getSortedItems = () => {
    if (!items?.length) return []
    if (!hasSorting) return items

    const sortedItems = [...items]

    if (customSortFunctions[sortBy]) {
      return sortedItems.sort(customSortFunctions[sortBy])
    }

    switch (sortBy) {
      case 'name':
        return sortedItems.sort((a, b) => a.name.localeCompare(b.name))
      case 'cost_in_credits':
        return sortedItems.sort((a, b) => {
          const costA = parseInt(a.cost_in_credits) || 0
          const costB = parseInt(b.cost_in_credits) || 0
          return costB - costA
        })
      default:
        return sortedItems
    }
  }

  const sortedItems = getSortedItems()
  const totalPages = Math.ceil((sortedItems.length || 0) / itemsPerPage)

  if (status === 'loading') return <div>Loading...</div>
  if (status === 'failed') return <div>Error: {error}</div>

  return (
    <div className={title.toLowerCase()}>
      <div className={`base-page__header ${!hasSorting ? 'base-page__header--no-sort' : ''}`}>
        <h1>{title}</h1>
        {hasSorting && <SortDropdown value={sortBy} onChange={handleSortChange} options={sortOptions} />}
      </div>
      <ListComponent
        items={sortedItems}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

BasePage.propTypes = {
  title: PropTypes.string.isRequired,
  fetchAction: PropTypes.func.isRequired,
  selector: PropTypes.func.isRequired,
  ListComponent: PropTypes.elementType.isRequired,
  hasSorting: PropTypes.bool,
  sortOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ),
  customSortFunctions: PropTypes.objectOf(PropTypes.func),
  itemsPerPage: PropTypes.number,
}

export default BasePage
