import PropTypes from 'prop-types'
import Card from '../../common/card/Card'
import useImageUrl from '../../../hooks/useImageUrl'

const CharacterCard = ({ character }) => {
  const { getProcessedImageUrl } = useImageUrl()
  const infoRows = [
    { label: 'Birth', value: character.birth_year || 'Unknown' },
    { label: 'Gender', value: character.gender || 'Unknown' },
    { label: 'Height', value: character.height || 'Unknown' },
    { label: 'Mass', value: character.mass || 'Unknown' },
  ]

  return (
    <Card
      className="character-card"
      image={{
        src: getProcessedImageUrl(character.src),
        alt: character.name,
      }}
      title={character.name}
      linkTo={`/characters/${encodeURIComponent(character.name)}`}
      infoRows={infoRows}
    />
  )
}

CharacterCard.propTypes = {
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    birth_year: PropTypes.string,
    gender: PropTypes.string,
    height: PropTypes.string,
    mass: PropTypes.string,
    src: PropTypes.string,
  }).isRequired,
}

export default CharacterCard
