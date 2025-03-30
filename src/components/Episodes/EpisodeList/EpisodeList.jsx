import PropTypes from 'prop-types'
import List from '../../common/List/List'
import EpisodeCard from '../EpisodeCard/EpisodeCard'

const EpisodeList = ({ items }) => {
  return (
    <List
      items={items}
      renderItem={(episode) => <EpisodeCard key={episode.id} episode={episode} />}
      showPagination={false}
    />
  )
}

EpisodeList.propTypes = {
  items: PropTypes.array.isRequired,
}

export default EpisodeList
