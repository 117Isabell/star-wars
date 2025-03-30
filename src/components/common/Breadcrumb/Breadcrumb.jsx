import { Link } from 'react-router-dom'
import './Breadcrumb.scss'
import PropTypes from 'prop-types'

const Breadcrumb = ({ items }) => {
  return (
    <div className="breadcrumb">
      {items.map((item, index) => (
        <span key={item.label}>
          {index > 0 && <span className="separator">/</span>}
          {item.path ? <Link to={item.path}>{item.label}</Link> : <span className="current">{item.label}</span>}
        </span>
      ))}
    </div>
  )
}

Breadcrumb.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
}

export default Breadcrumb
