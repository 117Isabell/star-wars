import { createBaseSlice } from '../utils/createBaseSlice'

const transformCharacters = (data) =>
  data.map((character) => ({
    ...character,
  }))

const slice = createBaseSlice('Characters', {
  endpoint: 'characters',
  transformData: transformCharacters,
  hasSorting: false,
})

const {
  reducer,
  thunks: { fetchItems: fetchCharacters },
} = slice

export { fetchCharacters }
export default reducer
