import navStyle from './navbar.module.css'
import logo from '../../assets/logo.webp'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/appContext'

const Navbar = () => {
  const {myCourseBtn,setMyCourseBtn} = useContext(AppContext)
  const navigate = useNavigate()

  const handleMyCourseBtn = () =>{
    setMyCourseBtn(true)
    navigate('/my-courses')
  }
  
  const handleAllCourseBtn = () =>{
    setMyCourseBtn(false)
    navigate('/all-courses')
  }

  return (
    <>
      <header className={navStyle['nav-header']}>
        <nav className={navStyle['navbar']}>
          <img src={logo} alt="logo" title='global-ai-hub' className={navStyle["logo"]} />
        </nav>
      </header>
      <div className={navStyle['tab-container']}>
        <div className={navStyle['nav-tabs']}>
          <button 
          className={myCourseBtn ? [navStyle['tab-btn'], navStyle.active].join(' ') : navStyle['tab-btn']}
          onClick={handleMyCourseBtn}
          >
            My Courses
          </button>
          <button 
          className={!myCourseBtn ? [navStyle['tab-btn'], navStyle.active].join(' ') : navStyle['tab-btn']} 
          onClick={handleAllCourseBtn}
          >
            All Courses
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar