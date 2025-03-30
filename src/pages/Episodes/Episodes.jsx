import BasePage from '../../components/common/BasePage/BasePage'
import EpisodeList from '../../components/Episodes/EpisodeList/EpisodeList'
import { fetchEpisodes } from '../../store/slices/episodesSlice'

const Episodes = () => (
  <BasePage
    title="Episodes"
    fetchAction={fetchEpisodes}
    selector={(state) => state.episodes}
    ListComponent={EpisodeList}
    hasSorting={true}
    sortOptions={[
      { value: 'releaseDate', label: 'Release Date' },
      { value: 'episodeName', label: 'Name' },
      { value: 'episodeNumber', label: 'Episode' },
    ]}
    customSortFunctions={{
      releaseDate: (a, b) => new Date(a.release_date) - new Date(b.release_date),
      episodeName: (a, b) => a.name.localeCompare(b.name),
      episodeNumber: (a, b) => a.id - b.id,
    }}
  />
)

export default Episodes
