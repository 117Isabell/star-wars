import Episodes from '../pages/Episodes/Episodes'
import EpisodeDetail from '../pages/EpisodeDetailPage/EpisodeDetailPage'
import Characters from '../pages/Characters/Characters'
import CharacterDetail from '../pages/CharacterDetailPage/CharacterDetailPage'
import Planets from '../pages/Planets/Planets'
import PlanetsDetailPage from '../pages/PlanetsDetailPage/PlanetsDetailPage'
import Species from '../pages/Species/Species'
import SpeciesDetailPage from '../pages/SpeciesDetailPage/SpeciesDetailPage'
import Vehicles from '../pages/Vehicles/Vehicles'
import VehicleDetailPage from '../pages/VehicleDetailPage/VehicleDetailPage'
import Starships from '../pages/Starships/Starships'
import StarshipDetailPage from '../pages/StarshipDetailPage/StarshipDetailPage'

export const routes = [
  {
    path: '/',
    element: <Episodes />,
  },
  {
    path: '/episodes',
    element: <Episodes />,
  },
  {
    path: '/episodes/:id',
    element: <EpisodeDetail />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
  {
    path: '/characters/:id',
    element: <CharacterDetail />,
  },
  {
    path: '/planets',
    element: <Planets />,
  },
  {
    path: '/planets/:id',
    element: <PlanetsDetailPage />,
  },
  {
    path: '/species',
    element: <Species />,
  },
  {
    path: '/species/:id',
    element: <SpeciesDetailPage />,
  },
  {
    path: '/vehicles',
    element: <Vehicles />,
  },
  {
    path: '/vehicles/:id',
    element: <VehicleDetailPage />,
  },
  {
    path: '/starships',
    element: <Starships />,
  },
  {
    path: '/starships/:id',
    element: <StarshipDetailPage />,
  },
]
