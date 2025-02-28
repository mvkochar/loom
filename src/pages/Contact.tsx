import { Faq, Features, Testimonial, Wardrobe } from '../components'
import './css/Contact.css'

const Contact = () => {
    return (
        <>
            <main className='contact-main page-bl-wr'>
                <div className="contact-main-info">
                    <h1 className="page-title">Your Partner in Every Step of Your Fashion <br /> Journey.</h1>
                    <p className="page-desc">
                        24/7 Assistance for Seamless Shopping and Unmatched Customer Satisfaction.
                    </p>
                </div>
                <h2 className="contact-bl-title">Contact Information</h2>
                <div className="contact-main-box d-f">
                    <div className="contact-main-item">
                        <div><img src="/images/contact/1.png" alt="contact1" width={94} /></div>
                        <h3 className="item-title">Email</h3>
                        <a href="mailto:support@StyleLoom.com" className='item-link'>support@StyleLoom.com</a>
                    </div>
                    <div className="contact-main-item">
                        <div><img src="/images/contact/2.png" alt="contact2" width={94} /></div>
                        <h3 className="item-title">Phone</h3>
                        <a href="tel:+1 (555) 123-4567" className='item-link'>+1 (555) 123-4567</a>
                    </div>
                    <div className="contact-main-item">
                        <div><img src="/images/contact/3.png" alt="contact3" width={94} /></div>
                        <h3 className="item-title">Location</h3>
                        <a href=" " className='item-link'>Get Direction</a>
                    </div>
                </div>
            </main>
            <section className='contact-return page-bl-wr'>
                <div className="contact-return-info d-f jc-sb align-center">
                    <h2 className="contact-bl-title">Return Policy</h2>
                    <a href="" className="d-b"><img src="/images/return-link.png" alt="return-link" /></a>
                </div>
                <div className="contact-return-box d-f">
                    <div className="contact-return-item d-f align-center">
                        <div><img src="/images/return1.png" alt="return1" /></div>
                        <div>
                            <h3 className="return-item-title">Eligibility</h3>
                            <p className="return-item-desc">
                                Items must be unused, with tags attached,
                                and returned within 30 days of delivery.
                            </p>
                        </div>
                    </div>
                    <div className="contact-return-item d-f align-center">
                        <div><img src="/images/return2.png" alt="return2" /></div>
                        <div>
                            <h3 className="return-item-title">Process</h3>
                            <p className="return-item-desc">
                                Initiate returns through our Return Center
                                for a smooth and efficient process.
                            </p>
                        </div>
                    </div>
                    <div className="contact-return-item d-f align-center">
                        <div><img src="/images/return3.png" alt="return3" /></div>
                        <div>
                            <h3 className="return-item-title">Refund</h3>
                            <p className="return-item-desc">
                                Expect a refund to your original payment
                                method within 7-10 business days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='contact-return page-bl-wr'>
                <div className="contact-return-info d-f jc-sb align-center">
                    <h2 className="contact-bl-title">Cancellation Policy</h2>
                    <a href="" className="d-b"><img src="/images/cancellation-link.png" alt="return-link" /></a>
                </div>
                <div className="contact-return-box d-f">
                    <div className="contact-return-item d-f align-center">
                        <div><img src="/images/cancel1.png" alt="cancel1" /></div>
                        <div>
                            <h3 className="return-item-title">Cancellation Window</h3>
                            <p className="return-item-desc">
                                Orders can be canceled within 24 hours
                                of placement for a full refund.
                            </p>
                        </div>
                    </div>
                    <div className="contact-return-item d-f align-center">
                        <div><img src="/images/cancel2.png" alt="cancel2" /></div>
                        <div>
                            <h3 className="return-item-title">Cancellation Process</h3>
                            <p className="return-item-desc">
                                Visit our Order Management section
                                to cancel your order effortlessly.
                            </p>
                        </div>
                    </div>
                    <div className="contact-return-item d-f align-center">
                        <div><img src="/images/cancel3.png" alt="cancel3" /></div>
                        <div>
                            <h3 className="return-item-title">Refund Timeline</h3>
                            <p className="return-item-desc">
                                Refunds for canceled orders are 
                                processed within 5-7 business days.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial />
            <Faq />
            <Wardrobe />
            <Features />
        </>
    )
}

export default Contact