import './SortDropdown.scss'
import PropTypes from 'prop-types'

const SortDropdown = ({ value, onChange, options }) => {
  const handleChange = (e) => {
    onChange(e.target.value)
  }

  return (
    <div className="sort-dropdown">
      <span className="sort-dropdown__label">Sort by:</span>
      <select value={value} onChange={handleChange} aria-label="Sort options">
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

SortDropdown.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default SortDropdown
