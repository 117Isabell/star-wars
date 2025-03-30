import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './Card.scss'
import useImageUrl from '../../../hooks/useImageUrl'

const Card = ({ image, title, linkTo, infoRows, className, showAgeRating }) => {
  const { getProcessedImageUrl } = useImageUrl()

  return (
    <div className={`card ${className}`}>
      <div className="card__poster">
        {showAgeRating && <span className="card__age-rating">+18</span>}
        <img src={getProcessedImageUrl(image.src)} alt={image.alt} />
      </div>
      <div className="card__content">
        <Link to={linkTo} className="card__title">
          {title}
        </Link>

        <div className="card__info">
          {infoRows.map(({ label, value }) => (
            <div key={label} className="info-row">
              <span className="info-label">{label}:</span>
              <span className="info-value">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.node.isRequired,
  linkTo: PropTypes.string.isRequired,
  infoRows: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ).isRequired,
  className: PropTypes.string,
  showAgeRating: PropTypes.bool,
}

export default Card
