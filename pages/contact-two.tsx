import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { useInView } from 'react-intersection-observer';


const ContactTwo: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });


    return (
        <>
            <HeaderV1 isText view={inView} />

            <section className="contact-v2-map">
                <div className="container-fluid">
                    <div className="sv-title wow fadeInUp">
                        <span>contact us</span>
                        <h2>Give us a shout, we’ll make you a believer.</h2>
                    </div>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                        </div>
                    </div>
                    <div className="container">
                        <div className="row map-oth">
                            <div className="col-md-6">
                                <div className="map-address wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
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
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="office-addrs wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
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
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section ref={ref} className="contact-sec no-bg gray-bg">
                <div className="container">
                    <div className="sec-title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
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
                                <div className="form-group text-left m-0">
                                    <button type="submit" className="btn-default no-bg">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
            <FooterVariant1 />
        </>
    );
};

ContactTwo.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Contact Two">{page}</Layout>;
};

export default ContactTwo;
