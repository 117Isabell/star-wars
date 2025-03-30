import PropTypes from 'prop-types'
import Card from '../../common/card/Card'

const SpeciesCard = ({ species }) => {
  const infoRows = [
    { label: 'Classification', value: species.classification || 'Unknown' },
    { label: 'Designation', value: species.designation || 'Unknown' },
  ]

  return (
    <Card
      className="species-card"
      image={{
        src: species.src,
        alt: species.name,
      }}
      title={species.name}
      linkTo={`/species/${species.name}`}
      infoRows={infoRows}
    />
  )
}

SpeciesCard.propTypes = {
  species: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    classification: PropTypes.string,
    designation: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
}

export default SpeciesCard
