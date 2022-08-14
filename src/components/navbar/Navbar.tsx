import navStyle from './navbar.module.css'
import logo from '../../assets/logo.webp'

const Navbar = () => {
  return (
    <header className={navStyle['nav-header']}>
      <nav className={navStyle['navbar']}>
        <img src={logo} alt="logo" title='global-ai-hub' className={navStyle["logo"]} />
      </nav>
    </header>
  )
}

export default Navbar