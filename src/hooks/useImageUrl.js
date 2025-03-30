import placeholder from '../assets/placeholder.svg'

const useImageUrl = () => {
  const getProcessedImageUrl = (url) => {
    if (
      !url ||
      url ===
        'https://static.wikia.nocookie.net/yildizsavaslari/images/4/48/Dagobah_ep3.jpg/revision/latest?cb=20200730160214&path-prefix=tr'
    )
      return placeholder

    if (url.includes('wikia.nocookie.net') || url.includes('revision')) {
      return url.split('/revision')[0]
    }

    return url
  }

  return { getProcessedImageUrl }
}

export default useImageUrl
