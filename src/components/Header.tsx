import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'

const Header = () => {
    const navigate=useNavigate()
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" className='logo' />
                <div className="btn-group">
                    <button onClick={()=> navigate('/')}>My Courses</button>
                    <button onClick={()=> navigate('/all-courses')}>All Courses</button>
                </div>
            </nav>
        </header>
    )
}

export default Header