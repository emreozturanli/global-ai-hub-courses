import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.webp'

const Header = () => {
    const [active,setActive] = useState(true)
    const navigate=useNavigate()
    
    return (
        <header>
            <nav>
                <img src={logo} alt="logo" className='logo' />
                <div className="btn-group">
                    <button 
                    className={active ? 'active' : ''}
                    onClick={()=>{navigate('/'); setActive(true)}}

                    >
                        My Courses</button>
                    <button 
                    className={!active ? 'active' : ''}
                    onClick={()=> {navigate('/all-courses'); setActive(false)}}
                    >
                        All Courses</button>
                </div>
            </nav>
        </header>
    )
}

export default Header