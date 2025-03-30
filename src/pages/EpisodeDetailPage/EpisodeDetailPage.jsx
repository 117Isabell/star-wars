import BaseDetailPage from '../../components/common/BaseDetailPage/BaseDetailPage'
import { fetchEpisodes } from '../../store/slices/episodesSlice'

const getInfoItems = (episode) => [
  { label: 'Episode', value: `Episode ${episode.id}` },
  { label: 'Director', value: episode.director },
  { label: 'Producer', value: episode.producer },
  { label: 'Release date', value: episode.release_date },
  {
    label: 'Characters',
    value: episode.characters || [],
    section: 'characters',
  },
  {
    label: 'Planets',
    value: episode.planets || [],
    section: 'planets',
  },
  {
    label: 'Starships',
    value: episode.starships || [],
    section: 'starships',
  },
  {
    label: 'Vehicles',
    value: episode.vehicles || [],
    section: 'vehicles',
  },
  {
    label: 'Species',
    value: episode.species || [],
    section: 'species',
  },
  { label: 'Created', value: episode.created },
  { label: 'Edited', value: episode.edited },
]

const EpisodeDetailPage = () => (
  <BaseDetailPage
    fetchAction={fetchEpisodes}
    selector={(state) => state.episodes}
    getInfoItems={getInfoItems}
    resourceName="Episodes"
    idField="name"
    formatTitle={(episode) => `Star Wars: Episode ${episode.id} - ${episode.name}`}
    getDescription={(episode) => episode.opening_crawl}
    getImage={(episode) => ({
      src: episode.src || '/placeholder.jpg',
      alt: episode.name || 'Episode poster',
    })}
  />
)

export default EpisodeDetailPage
