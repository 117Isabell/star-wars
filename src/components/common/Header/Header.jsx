import { Link, NavLink } from 'react-router-dom'
import './Header.scss'
import logo from '../../../assets/logo.png'
import episodeIcon from '../../../assets/icons/episode.svg'
import characterIcon from '../../../assets/icons/characters.svg'
import planetIcon from '../../../assets/icons/planets.svg'
import speciesIcon from '../../../assets/icons/species.svg'
import vehicleIcon from '../../../assets/icons/vehicles.svg'
import starshipIcon from '../../../assets/icons/starships.svg'

const Header = () => {
  return (
    <div className="container">
      <div className="header__content">
        <div className="header__logo">
          <Link to="/">
            <img src={logo} alt="Star Wars Site Logo" />
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="nav-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={episodeIcon} className="nav-icon" alt="" /> Episodes
              </NavLink>
            </li>
            <li>
              <NavLink to="/characters" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={characterIcon} className="nav-icon" alt="" /> Characters
              </NavLink>
            </li>
            <li>
              <NavLink to="/planets" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={planetIcon} className="nav-icon" alt="" /> Planets
              </NavLink>
            </li>
            <li>
              <NavLink to="/species" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={speciesIcon} className="nav-icon" alt="" /> Species
              </NavLink>
            </li>
            <li>
              <NavLink to="/vehicles" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={vehicleIcon} className="nav-icon" alt="" /> Vehicles
              </NavLink>
            </li>
            <li>
              <NavLink to="/starships" className={({ isActive }) => (isActive ? 'active' : '')}>
                <img src={starshipIcon} className="nav-icon" alt="" /> Starships
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
