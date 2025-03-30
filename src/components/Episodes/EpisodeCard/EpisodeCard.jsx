import PropTypes from 'prop-types'
import Card from '../../common/card/Card'

const EpisodeCard = ({ episode }) => {
  const infoRows = [
    { label: 'Episode', value: 'Episode I' },
    { label: 'Director', value: episode.director },
    { label: 'Producer', value: episode.producer },
    { label: 'Release date', value: episode.release_date },
  ]

  return (
    <Card
      className="episode-card"
      image={{
        src: episode.src,
        alt: episode.name,
      }}
      title={
        <>
          Star Wars:Episode I <br />- {episode.name}
        </>
      }
      linkTo={`/episodes/${episode.name}`}
      infoRows={infoRows}
      showAgeRating={true}
    />
  )
}

EpisodeCard.propTypes = {
  episode: PropTypes.shape({
    name: PropTypes.string.isRequired,
    src: PropTypes.string,
    director: PropTypes.string.isRequired,
    producer: PropTypes.string.isRequired,
    release_date: PropTypes.string.isRequired,
  }).isRequired,
}

export default EpisodeCard
