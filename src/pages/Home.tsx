import { ProductsItem } from '../components'
import { LatestProductsList } from '../components/ProductsList'
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
      <section className='home-trends page-bl-wr'>
        <h2 className="page-title">Crafting Trends, Inspiring Confidence</h2>
        <p className="page-desc">Explore a world of fashion at StyleLoom, where trends meet affordability.</p>
        <div className="home-trends-box d-f">
          <div className="home-trends-item">
            <div><img src="/images/trends/1.png" alt="trends1" /></div>
            <h3 className="trends-item-title">Passionate Craftsmanship</h3>
            <p className="trends-item-desc">
              Every garment at StyleLoom is crafted with passion, reflecting
              our commitment to quality and innovation.
            </p>
          </div>
          <div className="home-trends-item">
            <div><img src="/images/trends/2.png" alt="trends2" /></div>
            <h3 className="trends-item-title">Fashion Forward</h3>
            <p className="trends-item-desc">
              We're more than a brand; we're trendsetters, curating styles that empower and inspire confidence.
            </p>
          </div>
          <div className="home-trends-item">
            <div><img src="/images/trends/3.png" alt="trends3" /></div>
            <h3 className="trends-item-title">Customer-Centric Approach</h3>
            <p className="trends-item-desc">
              At StyleLoom, our customers are at the heart of everything we do. Your satisfaction is our measure of success.
            </p>
          </div>
          <div className="home-trends-item">
            <div><img src="/images/trends/4.png" alt="trends4" /></div>
            <h3 className="trends-item-title">Global Inspiration</h3>
            <p className="trends-item-desc">
              Influenced by global trends, we bring you a diverse and dynamic collection,
              embodying the spirit of fashion from around the world.
            </p>
          </div>
          <div className="home-trends-item">
            <div><img src="/images/trends/5.png" alt="trends5" /></div>
            <h3 className="trends-item-title">Empowering Your Style</h3>
            <p className="trends-item-desc">
              Beyond clothing, StyleLoom is a lifestyle. Join us on a journey of
              self-expression and empowerment through fashion.
            </p>
          </div>
          <div className="home-trends-item">
            <div><img src="/images/trends/6.png" alt="trends6" /></div>
            <h3 className="trends-item-title">Sustainable Practices</h3>
            <p className="trends-item-desc">
              StyleLoom is committed to sustainability, integrating
              eco-friendly practices into our production process.
            </p>
          </div>
        </div>
      </section>
      <section className='home-journey page-bl-wr'>
        <h2 className="page-title">Navigating the StyleLoom Fashion Journey.</h2>
        <p className="page-desc">
          At StyleLoom, we've designed a straightforward shopping experience to make fashion accessible.
        </p>
        <div className="home-journey-box d-f">
          <div className="home-journey-item">
            <div className="journey-item-num">Step 01</div>
            <h3 className="journey-item-title">Discover Trends</h3>
            <p className="journey-item-desc">
              Explore our curated collection of over 1000 styles, spanning global fashion trends.
            </p>
          </div>
          <div className="home-journey-item">
            <div className="journey-item-num">Step 02</div>
            <h3 className="journey-item-title">Effortless Navigation</h3>
            <p className="journey-item-desc">
              Intuitive filters and categories help you find the perfect pieces tailored to your style.
            </p>
          </div>
          <div className="home-journey-item">
            <div className="journey-item-num">Step 03</div>
            <h3 className="journey-item-title">Secure Checkout</h3>
            <p className="journey-item-desc">
              Multiple payment options and encrypted transactions ensure a safe and hassle-free purchase.
            </p>
          </div>
          <div className="home-journey-item">
            <div className="journey-item-num">Step 04</div>
            <h3 className="journey-item-title">Unbox Happiness</h3>
            <p className="journey-item-desc">
              Unbox a fashion-forward experience delivered right
              to your door, ready to elevate your style.
            </p>
          </div>
        </div>
      </section>
      <section className='home-latest page-bl-wr'>
        <h2 className="page-title">Elevate Your Style with Our Latest Collection</h2>
        <p className="page-desc">
          Each piece is crafted to enhance your fashion statement.
        </p>
        <div className="home-latest-tabs d-f">
          <button className='tabs-btn'>All</button>
          <button className='tabs-btn'>Mens</button>
          <button className='tabs-btn tabs-btn__active'>Womens</button>
          <button className='tabs-btn'>Kids</button>
        </div>
        <div className="home-latest-box d-f">
          {
            LatestProductsList.map((product)=> {
              return (
                <ProductsItem
                  key={product.category+product.id}
                  {...product}
                />
              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Home