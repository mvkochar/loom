import { Faq, Features, ProductsItem, Testimonial, Wardrobe } from '../components'
import { AccessoriesList, BagsList, DressList } from '../components/ProductsList'
import './css/Products.css'

const Products = () => {
    return (
        <>
            <div className="page-bl-wr" style={{ marginTop: "100px", paddingBottom: '30px' }}>
                <main className='products-main'>
                    <h1 className="page-title">Explore the Latest Trends and Timeless <br /> Classics</h1>
                    <p className="page-desc">
                        Dive into the world of fashion excellence at StyleLoom.
                        Our curated selection brings together the latest trends
                        and timeless classics
                    </p>
                    <div className="products-main-tabs d-f">
                        <button className="tabs-btn">All</button>
                        <button className="tabs-btn">Mens</button>
                        <button className="tabs-btn tabs-btn__active">Womens</button>
                        <button className="tabs-btn">Kids</button>
                    </div>
                </main>
                <section className='products-bl'>
                    <div className="products-bl-caption d-f jc-sb align-center">
                        <h2 className="products-bl-title">Dress Collection</h2>
                        <a href='' className='d-b'><img src="/images/view.png" alt="view" /></a>
                    </div>
                    <div className="products-bl-box d-f">
                        {
                            DressList.map((product) => {
                                return (
                                    <ProductsItem
                                        key={'dress' + product.id}
                                        {...product}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
                <section className='products-bl'>
                    <div className="products-bl-caption d-f jc-sb align-center">
                        <h2 className="products-bl-title">Accessories</h2>
                        <a href='' className='d-b'><img src="/images/view.png" alt="view" /></a>
                    </div>
                    <div className="products-bl-box d-f">
                        {
                            AccessoriesList.map((product) => {
                                return (
                                    <ProductsItem
                                        key={'accessories' + product.id}
                                        {...product}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
                <section className='products-bl'>
                    <div className="products-bl-caption d-f jc-sb align-center">
                        <h2 className="products-bl-title">Bags and HandBags</h2>
                        <a href='' className='d-b'><img src="/images/view.png" alt="view" /></a>
                    </div>
                    <div className="products-bl-box d-f">
                        {
                            BagsList.map((product) => {
                                return (
                                    <ProductsItem
                                        key={'bags' + product.id}
                                        {...product}
                                    />
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            <Testimonial />
            <Faq />
            <Wardrobe />
            <Features />
        </>
    )
}

export default Products