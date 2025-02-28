import { Link } from 'react-router-dom'
import './css/Header.css'

const Header = () => {
  return (
    <header className="header d-f jc-sb align-center">
        <nav>
            <ul className="header-nav d-f">
                <li className="header-nav-item"><Link to="/">Home</Link></li>
                <li className="header-nav-item"><Link to="/products">Products</Link></li>
            </ul>           
        </nav>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <div className="header-actions d-f align-center">
            <button className='header-bag'><img src="/images/bag.png" alt="bag" /></button>
            <Link to="/contact" className="header-contact">Contact</Link>
        </div>
    </header>
  )
}

export default Header