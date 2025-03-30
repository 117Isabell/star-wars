export const getArrayValue = (array, defaultValue = 'Not specified') => {
  return array?.length > 0 ? array : defaultValue
}
