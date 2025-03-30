import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Detail from '../Detail/Detail'
import PropTypes from 'prop-types'

const BaseDetailPage = ({ fetchAction, selector, getInfoItems, resourceName, idField = 'id' }) => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { items, status, error } = useSelector(selector)

  const decodedId = decodeURIComponent(id)

  const item = items?.find((i) => i[idField] === decodedId)

  useEffect(() => {
    if (status === 'idle' || !items?.length) {
      dispatch(fetchAction())
    }
  }, [status, items?.length, dispatch, fetchAction])

  if (!item) return null

  const breadcrumbItems = [
    { label: 'Home', path: '/' },
    { label: resourceName, path: `/${resourceName.toLowerCase()}` },
    { label: item.name },
  ]

  return (
    <Detail
      image={{
        src: item.src,
        alt: item.name,
      }}
      title={item.name}
      breadcrumbItems={breadcrumbItems}
      infoItems={getInfoItems(item)}
      description={item.opening_crawl}
      loading={status === 'loading'}
      error={error}
    />
  )
}

BaseDetailPage.propTypes = {
  fetchAction: PropTypes.func.isRequired,
  selector: PropTypes.func.isRequired,
  getInfoItems: PropTypes.func.isRequired,
  resourceName: PropTypes.string.isRequired,
  idField: PropTypes.string,
}

export default BaseDetailPage
