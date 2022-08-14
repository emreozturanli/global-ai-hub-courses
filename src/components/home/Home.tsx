import homeStyle from './home.module.css'
import logo from '../../assets/logo.webp'

const Home = () => {
  return (
    <header>
      <nav>
        <img src={logo} alt="logo" title='global-ai-hub' className={homeStyle["logo"]} />
      </nav>
    </header>
  )
}

export default Home