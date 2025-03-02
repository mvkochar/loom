import { Faq, Features, Testimonial, Wardrobe } from '../components'
import './css/ProductsOpen.css'

const ProductsOpen = () => {

    return (
        <>
            <main className='open-main page-bl-wr'>
                <div className="open-main-info d-f jc-sb align-center">
                    <div>
                        <h1 className="page-title">Elegant Evening Gown</h1>
                        <div className="open-main-details d-f align-center">
                            <p className="page-desc">Fitted bodice, flowing skirt</p>
                            <div className="open-main-stock">In stock</div>
                        </div>
                    </div>
                    <div className="open-main-actions d-f">
                        <button className='btn-clear d-b'><img src="/images/card-btn.png" alt="card-btn" /></button>
                        <a href="" className="open-main-shop">Shop Now</a>
                    </div>
                </div>
                <div className="open-main-pictures d-f">
                    <div className="pictures-huge">
                        <img src="/images/product-main.png" alt="product-main" width={988} />
                    </div>
                    <div className="pictures-little d-f">
                        <div><img src="/images/product-min1.png" alt="product-min1" /></div>
                        <div><img src="/images/product-min2.png" alt="product-min2" /></div>
                    </div>
                </div>
                <div className="open-main-about d-f">
                    <div>
                        <h2 className="about-title">Materials, Care and origin</h2>
                        <div className="about-bl">
                            <h3 className="about-bl-title">Join Life</h3>
                            <p className="about-bl-desc">
                                Tracing its roots back to ancient Greek draped garments,
                                has evolved through centuries, often crafted from luxurious
                                fabrics like silks, satins, and velvets.
                            </p>
                        </div>
                        <div className="about-bl">
                            <h3 className="about-bl-title">Materials</h3>
                            <p className="about-bl-desc">
                                Flowing from Grecian folds to glittering silks, the evening gown
                                has graced centuries in luxury.
                            </p>
                            <div style={{ marginTop: "50px" }}>
                                <img src="/images/product-material.png" alt="product-material" />
                            </div>
                        </div>
                        <div className="about-bl"></div>
                    </div>
                    <div>
                        <h2 className="about-title">Features</h2>
                        <ul className="about-bl-list">
                            <li>Distressed detailing for a rugged look</li>
                            <li>Button-up front closure with engraved metal buttons</li>
                            <li>Two chest pockets with buttoned flaps</li>
                            <li>Two side pockets for added functionality</li>
                            <li>Adjustable buttoned cuffs for a personalized fit</li>
                            <li>Back waist tabs for customizable styling</li>
                        </ul>
                        <div className="about-bl">
                            <h3 className="about-bl-title">Price</h3>
                            <div
                                className="d-f jc-sb align-center"
                                style={{ marginTop: "20px" }}
                            >
                                <div className="about-bl-price">$89.99 <span>(MRP incl. of all taxes)</span></div>
                                <button className='btn-clear d-b'><img src="/images/card-btn.png" alt="card-btn" /></button>
                            </div>
                        </div>
                        <div className="about-bl">
                            <h3 className="about-bl-title">Available Sizes</h3>
                            <div className="sizes d-f">
                                <div className="sizes-item">S</div>
                                <div className="sizes-item">M</div>
                                <div className="sizes-item">L</div>
                                <div className="sizes-item">XL</div>
                            </div>
                        </div>
                        <div className="about-bl">
                            <h3 className="about-bl-title">Ratings & Review</h3>
                        </div>
                        <div className="about-bl d-f" style={{ gap: "50px" }}>
                            <div>
                                <div className="rating-value">4.8</div>
                                <div className="rating-box d-f">
                                    {
                                        [1, 2, 3, 4, 5].map(() => {
                                            return (
                                                <div>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M8.27466 1.9429C9.04735 0.62493 10.9527 0.624932 11.7253 1.9429L13.4512 4.88664C13.7332 5.36761 14.2031 5.70904 14.7477 5.8286L18.0807 6.5603C19.5729 6.8879 20.1617 8.69996 19.147 9.8421L16.8806 12.3931C16.5103 12.8099 16.3308 13.3624 16.3854 13.9173L16.7195 17.3132C16.869 18.8337 15.3276 19.9536 13.9278 19.3415L10.8013 17.9744C10.2904 17.751 9.70956 17.751 9.19873 17.9744L6.0722 19.3415C4.6724 19.9536 3.13097 18.8336 3.28054 17.3132L3.61459 13.9173C3.66917 13.3624 3.48967 12.8099 3.11938 12.3931L0.853022 9.8421C-0.161664 8.69996 0.427111 6.8879 1.91935 6.5603L5.25233 5.8286C5.79689 5.70904 6.26683 5.36761 6.54881 4.88664L8.27466 1.9429Z" fill="#FFCE22" />
                                                    </svg>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="rating-count">49 Ratings</div>
                            </div>
                            <div style={{ marginTop: "-20px" }}><img src="/images/ratings.png" alt="ratings" /></div>
                        </div>
                    </div>
                </div>
            </main>
            <Testimonial />
            <Faq />
            <Wardrobe />
            <Features />
        </>
    )
}

export default ProductsOpen