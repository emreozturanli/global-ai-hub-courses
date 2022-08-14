import navStyle from './navbar.module.css'
import logo from '../../assets/logo.webp'

const Navbar = () => {
  return (
    <>
      <header className={navStyle['nav-header']}>
        <nav className={navStyle['navbar']}>
          <img src={logo} alt="logo" title='global-ai-hub' className={navStyle["logo"]} />
        </nav>
      </header>
      <div className={navStyle['tab-container']}>
        <div className={navStyle['nav-tabs']}>
          <button className={[navStyle['tab-btn'], navStyle.active].join(' ')}>My Courses</button>
          <button className={navStyle['tab-btn']} >All Courses</button>
        </div>
      </div>
    </>
  )
}

export default Navbar