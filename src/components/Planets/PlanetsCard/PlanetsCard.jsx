import PropTypes from 'prop-types'
import Card from '../../common/card/Card'

const PlanetsCard = ({ planet }) => {
  const infoRows = [
    { label: 'Climate', value: planet.climate || 'Unknown' },
    { label: 'Terrain', value: planet.terrain || 'Unknown' },
    { label: 'Population', value: planet.population || 'Unknown' },
  ]

  return (
    <Card
      className="planet-card"
      image={{
        src: planet.src,
        alt: planet.name,
      }}
      title={planet.name}
      linkTo={`/planets/${planet.name}`}
      infoRows={infoRows}
    />
  )
}

PlanetsCard.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    climate: PropTypes.string,
    terrain: PropTypes.string,
    population: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
}

export default PlanetsCard
