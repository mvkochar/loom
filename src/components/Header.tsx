import './css/Header.css'

const Header = () => {
  return (
    <header className="header d-f jc-sb align-center">
        <nav>
            <ul className="header-nav d-f">
                <li className="header-nav-item"><a href="">Home</a></li>
                <li className="header-nav-item"><a href="">Product</a></li>
            </ul>           
        </nav>
        <div><img src="/images/logo.svg" alt="Logo" /></div>
        <div className="header-actions d-f align-center">
            <button className='header-bag'><img src="/images/bag.png" alt="bag" /></button>
            <a href="" className="header-contact">Contact</a>
        </div>
    </header>
  )
}

export default Header