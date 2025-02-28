const Faq = () => {
    return (
        <section className='home-faq page-bl-wr'>
            <h2 className="page-title">Have Questions? We Have Answers.</h2>
            <p className="page-desc">
                Ease into the world of StyleLoom with clarity.
                Our FAQs cover a spectrum of topics.
            </p>
            <div className="home-faq-tabs d-f">
                <button className="tabs-btn">All</button>
                <button className="tabs-btn">Ordering</button>
                <button className="tabs-btn tabs-btn__active">Shipping</button>
                <button className="tabs-btn">Returns</button>
                <button className="tabs-btn">Support</button>
            </div>
            <div className="home-faq-box d-f">
                <div className="home-faq-item">
                    <dl>
                        <dt>How can I place an order on StyleLoom?</dt>
                        <dd>
                            Ordering is easy! Simply browse our website, add items to your cart,
                            and proceed to checkout. Follow the prompts to enter your details
                            and complete your purchase.
                        </dd>
                    </dl>
                </div>
                <div className="home-faq-item">
                    <dl>
                        <dt>Can I modify or cancel my order after placing it?</dt>
                        <dd>
                            Unfortunately, once an order is confirmed, modifications or cancellations may not be possible.
                            Please review your order carefully before completing the purchase.
                        </dd>
                    </dl>
                </div>
                <div className="home-faq-item">
                    <dl>
                        <dt>What payment methods do you accept?</dt>
                        <dd>
                            We accept a variety of payment methods, including credit/debit
                            cards, net banking, and select digital wallets. Choose the option
                            that suits you best during checkout.
                        </dd>
                    </dl>
                </div>
                <div className="home-faq-item">
                    <dl>
                        <dt>How do I initiate a return?</dt>
                        <dd>
                            Visit our Returns page and follow the provided instructions.
                            Ensure your item meets our return criteria, and our team will
                            guide you through the process.
                        </dd>
                    </dl>
                </div>
                <div className="home-faq-item">
                    <dl>
                        <dt>How can I track my order?</dt>
                        <dd>
                            Once your order is dispatched, you'll receive a tracking number via email.
                            Use this number to track your package in real-time on our website.
                        </dd>
                    </dl>
                </div>
                <div className="home-faq-item">
                    <dl>
                        <dt>Do you offer exchanges for products?</dt>
                        <dd>
                            At this time, we don't offer direct product exchanges.
                            If you'd like a different item, please initiate a return and place a new order.
                        </dd>
                    </dl>
                </div>
            </div>
        </section>
    )
}

export default Faq