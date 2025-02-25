import './css/Home.css'

const Home = () => {
  return (
    <>
      <main className='home-main page-bl-wr'>
        <div style={{ paddingBottom: "20px" }}>
          <div><img src="/images/home-main.png" alt="home-main" /></div>
          <div className="home-main-action d-f jc-sb align-center">
            <div className="action-name">Shop Now</div>
            <a href="" className="-d-b">
              <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 3.75L20 3.75C20.1989 3.75 20.3897 3.82902 20.5303 3.96967C20.671 4.11032 20.75 4.30109 20.75 4.5V15.75C20.75 16.1642 20.4142 16.5 20 16.5C19.5858 16.5 19.25 16.1642 19.25 15.75V6.31066L5.53033 20.0303C5.23744 20.3232 4.76256 20.3232 4.46967 20.0303C4.17678 19.7374 4.17678 19.2626 4.46967 18.9697L18.1893 5.25L8.75 5.25C8.33579 5.25 8 4.91421 8 4.5C8 4.08579 8.33579 3.75 8.75 3.75Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
        <div className="home-main-box d-f">
          <div>
            <div className="home-main-tabs d-f">
              <button className='tabs-btn tabs-btn__active'>All</button>
              <button className='tabs-btn'>Mens</button>
              <button className='tabs-btn'>Womens</button>
              <button className='tabs-btn'>Kids</button>
            </div>
            <h1 className="page-title">Elevate Your Style with <br /> StyleLoom</h1>
            <p className="page-desc">
              Explore a world of fashion at StyleLoom, where trends meet affordability. 
              Immerse yourself in the latest styles and seize exclusive promotions.
            </p>
          </div>
          <div className='home-main-stats d-f '>
             <div className="stats-bl">
                <dl>
                   <dt>1,500 +</dt>
                   <dd>Fashion Products</dd>
                </dl>
             </div>
             <div className="stats-bl">
                <dl>
                   <dt>50 +</dt>
                   <dd>New arrivals every month.</dd>
                </dl>
             </div>
             <div className="stats-bl">
                <dl>
                   <dt>30 %</dt>
                   <dd>Off on select items.</dd>
                </dl>
             </div>
             <div className="stats-bl">
                <dl>
                   <dt>95 %</dt>
                   <dd>Customer Satisfaction Rate.</dd>
                </dl>
             </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home