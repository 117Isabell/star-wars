import { useState } from 'react'
import PropTypes from 'prop-types'
import Breadcrumb from '../Breadcrumb/Breadcrumb'
import useImageUrl from '../../../hooks/useImageUrl'
import './Detail.scss'

const Detail = ({ image, title, breadcrumbItems, infoItems, description, loading, error }) => {
  const [expandedSections, setExpandedSections] = useState({})
  const { getProcessedImageUrl } = useImageUrl()
  const handleShowMore = (section) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const renderListItems = (items, section) => {
    if (!Array.isArray(items)) return <span className="value">{items}</span>

    return (
      <span className="value">
        {items
          .slice(0, expandedSections[section] ? undefined : 3)
          .map((item) => item.name)
          .join(', ')}
        {items.length > 3 && (
          <button className="show-more" onClick={() => handleShowMore(section)}>
            {expandedSections[section] ? 'Show Less' : 'Show More...'}
          </button>
        )}
      </span>
    )
  }

  if (loading) return <div className="loading">Loading...</div>
  if (error) return <div className="error">Error: {error}</div>

  return (
    <div className="detail">
      <div className="container">
        <Breadcrumb items={breadcrumbItems} />

        <div className="detail__content">
          <div className="detail__poster">
            <img src={getProcessedImageUrl(image.src)} alt={image.alt} />
          </div>

          <div className="detail__info">
            <h1 className="detail__title">{title}</h1>

            <div className="info-grid">
              {infoItems.map(({ label, value, section }) => (
                <div key={label} className="info-item">
                  <span className="label">{label}:</span>
                  {section ? renderListItems(value, section) : <span className="value">{value}</span>}
                </div>
              ))}
            </div>

            {description && (
              <div className="detail__description">
                <p>{description}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

Detail.propTypes = {
  image: PropTypes.shape({
    src: PropTypes.string,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  breadcrumbItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
  infoItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]).isRequired,
      section: PropTypes.string,
    })
  ).isRequired,
  description: PropTypes.string,
  loading: PropTypes.bool,
  error: PropTypes.string,
}

export default Detail
