import { configureStore } from '@reduxjs/toolkit'
import episodesReducer from './slices/episodesSlice'
import charactersReducer from './slices/charactersSlice'
import planetsReducer from './slices/planetsSlice'
import speciesReducer from './slices/speciesSlice'
import vehiclesReducer from './slices/vehiclesSlice'
import starshipsReducer from './slices/starshipsSlice'

const store = configureStore({
  reducer: {
    episodes: episodesReducer,
    characters: charactersReducer,
    species: speciesReducer,
    vehicles: vehiclesReducer,
    starships: starshipsReducer,
    planets: planetsReducer,
  },
})

export default store
