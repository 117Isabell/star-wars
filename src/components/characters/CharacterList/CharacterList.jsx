import PropTypes from 'prop-types'
import List from '../../common/List/List'
import CharacterCard from '../CharacterCard/CharacterCard'

const CharacterList = ({ items, currentPage, totalPages, onPageChange }) => (
  <List
    items={items}
    renderItem={(character) => <CharacterCard key={character.id} character={character} />}
    currentPage={currentPage}
    totalPages={totalPages}
    onPageChange={onPageChange}
    showPagination={true}
  />
)

CharacterList.propTypes = {
  items: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
}

CharacterList.defaultProps = {
  items: [],
}

export default CharacterList
