import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { useInView } from 'react-intersection-observer';

const ContactPage = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <>
            <HeaderV1 isText view={inView} />

            <section className="contact-v1-map">
                <div className="container-fluid">
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                        </div>
                        <div className="map-address wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <h3>
                                Brooklyn, <span>New York</span>
                            </h3>
                            <p>962 Fifth Avenue Str, 3rd Floor-Trump Building NY 10006, United State.</p>
                            <span className="mail">
                                Email:{' '}
                                <a href="mailto:example@example.com" title="">
                                    info@milesstudio.co
                                </a>
                            </span>
                            <span className="call-dir">Call directly:</span>
                            <h2 className="phone">+8(663)125-08-59</h2>
                            <div className="office-addrs">
                                <h3>Brand Offices:</h3>
                                <ul>
                                    <li>
                                        <a href="#" title="">
                                            Allentown PA
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            Allanta, GA
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            Chicago, IL
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            Dallas, TX
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            Edison, NJ
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            Houston, TX
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <a href="#" title="" className="btn-default box-shadow-none">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={ref} className="contact-sec no-bg">
                <div className="container">
                    <div className="sec-title text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <h2>Ready to get started</h2>
                        <span>Ask away! we will response within 24 hours</span>
                    </div>
                    <form className="contact-form">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form--control" id="name" name="name" placeholder="" />
                                    <label htmlFor="name">Full Name</label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form--control" id="email" name="email" placeholder="" />
                                    <label htmlFor="email">
                                        Email Address <span>*</span>
                                    </label>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <input type="text" className="form--control" id="subject" name="subject" placeholder="" />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <textarea className="form--control" id="message" defaultValue={''} />
                                    <label htmlFor="message">Your message here</label>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group text-center m-0">
                                    <button type="submit" className="btn-default no-bg">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="ft-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <p>
                                            We are a close team of creative professionals based out of Savannah, Georgia. We are passionate
                                            about partnering &amp; organizations to provide exceptional solutions.
                                        </p>
                                        <div className="ft-form">
                                            <h4>Subscribe our newsletter for news update</h4>
                                            <form>
                                                <span className="input input--makiko">
                                                    <input
                                                        className="input__field input__field--makiko"
                                                        type="email"
                                                        id="input-16"
                                                        placeholder="Enter email address..."
                                                    />
                                                    <label className="input__label input__label--makiko">
                                                        <button type="submit" className="input__label-content input__label-content--makiko">
                                                            subscribe <i className="lni lni-chevron-right" />
                                                        </button>
                                                    </label>
                                                </span>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="get-touch-txt wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <span>get in touch</span>
                                        <h3>
                                            116 Fairground Rd, FL 32904, USA{' '}
                                            <a href="#" title="">
                                                hello@miles.co
                                            </a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="about-me.tsx" title="">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="15_portfolio_horizontal_scroll.html" title="">
                                                    Works
                                                </a>
                                            </li>
                                            <li>
                                                <a href="30_contact_1.html" title="">
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a href="service-two.tsx" title="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-layout-one.tsx" title="">
                                                    News
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="cp-mile">
                                    <img src="/static/images/ft-logo.png" alt="" />
                                    <p>© 2020. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <ul className="social-links">
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-behance" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

ContactPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Contact">{page}</Layout>;
};

export default ContactPage;
