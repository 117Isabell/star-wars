import PropTypes from 'prop-types'
import Card from '../../common/card/Card'

const VehicleCard = ({ vehicle }) => {
  const infoRows = [
    { label: 'Model', value: vehicle.model || 'Unknown' },
    { label: 'Manufacturer', value: vehicle.manufacturer || 'Unknown' },
    {
      label: 'Cost in credits',
      value: Array.isArray(vehicle.cost_in_credits) ? vehicle.cost_in_credits.join(', ') : 'Unknown',
    },
  ]

  return (
    <Card
      className="vehicle-card"
      image={{
        src: vehicle.image,
        alt: vehicle.vehicle_name,
      }}
      title={vehicle.vehicle_name}
      linkTo={`/vehicles/${vehicle.vehicle_name}`}
      infoRows={infoRows}
    />
  )
}

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    vehicle_name: PropTypes.string.isRequired,
    model: PropTypes.string,
    manufacturer: PropTypes.string,
    cost_in_credits: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
}

export default VehicleCard
