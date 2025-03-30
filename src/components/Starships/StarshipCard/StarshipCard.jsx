import PropTypes from 'prop-types'
import Card from '../../common/card/Card'

const StarshipCard = ({ starship }) => {
  const infoRows = [
    { label: 'Model', value: starship.model || 'Unknown' },
    { label: 'Manufacturer', value: starship.manufacturer || 'Unknown' },
    { label: 'Cost in credits', value: String(starship.cost_in_credits) || 'Unknown' },
  ]

  return (
    <Card
      className="starship-card"
      image={{
        src: starship.src,
        alt: starship.name,
      }}
      title={starship.name}
      linkTo={`/starships/${starship.name}`}
      infoRows={infoRows}
    />
  )
}

StarshipCard.propTypes = {
  starship: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    cost_in_credits: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    src: PropTypes.string,
  }).isRequired,
}

export default StarshipCard
