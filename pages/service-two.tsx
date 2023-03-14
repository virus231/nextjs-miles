import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { Testi } from '../app/components/Testi';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useInView } from 'react-intersection-observer';

const ServiceTwo = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const { ref: countRef, inView: viewRef } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    
    return (
        <>
            <HeaderV1 isText view={inView} />

            <section className="vls-sections service-v2">
                <div className="container">
                    <div className="sv-title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span>our services</span>
                        <h2>
                            We create progress by design <br /> development craft digital experiences.
                        </h2>
                        <p className="mw-100">The difference lies in quality, reputation and responsibility of creation. </p>
                    </div>
                </div>
                <div className="mile-vl-sec wow slideInLeft" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <div className="container">
                        <div className="mile-vl-sec-details">
                            <div className="mile-vl-dt">
                                <span className="vl-icon clr1">
                                    <i className="lni lni-crown" />
                                </span>
                                <h3>Branding</h3>
                                <p>I build and activate brands throung cultural insigh &amp;, strategic vision.</p>
                                <a href="#" title="">
                                    See Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mile-vl-sec wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <div className="container">
                        <div className="mile-vl-sec-details v2">
                            <div className="mile-vl-dt">
                                <span className="vl-icon clr2">
                                    <i className="lni lni-mobile" />
                                </span>
                                <h3>Interaction</h3>
                                <p>Optimized UI/UX for digital products,help business grow more</p>
                                <a href="#" title="">
                                    See Projects
                                </a>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="mile-vl-sec wow slideInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <div className="container">
                        <div className="mile-vl-sec-details v3">
                            <div className="mile-vl-dt">
                                <span className="vl-icon clr3">
                                    <i className="lni lni-anchor" />
                                </span>
                                <h3>Illustration</h3>
                                <p>Decribe things abstract become visible with a look impressive</p>
                                <a href="#" title="">
                                    See Projects
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div ref={ref}></div>
            <section className="clients-sec-v3 pb-0">
                <div className="container">
                    <div className="section-title-v3 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <h2>Big Clients</h2>
                        <span>Work with many big brands, brings for me great experience.</span>
                    </div>
                    <div className="client-works">
                        <div className="col-m-2">
                            <div className="cl-imag">
                                <img src="/static/images/cl1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-m-2">
                            <div className="cl-imag">
                                <img src="/static/images/cl2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-m-2">
                            <div className="cl-imag">
                                <img src="/static/images/cl3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-m-2">
                            <div className="cl-imag">
                                <img src="/static/images/cl4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-m-2">
                            <div className="cl-imag">
                                <img src="/static/images/cl5.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <ul className="counter-sec border-bottom wow fadeInUp" id="counter" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <li>
                            <div className="count-dv">
                                <h2 ref={countRef} className="count">{viewRef ? <CountUp end={10} /> : '0'}</h2>
                                <span>Years Experience</span>
                            </div>
                        </li>
                        <li>
                            <div className="count-dv">
                                <h2 ref={countRef} className="count">{viewRef ? <CountUp end={102} /> : '0'}</h2>
                                <span>Satisfaction Clients</span>
                            </div>
                        </li>
                        <li>
                            <div className="count-dv">
                                <h2 ref={countRef} className="count">{viewRef ? <CountUp end={285} /> : '0'}</h2>
                                <span>
                                    Projects Completed On <br /> 34 Countries
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="testi-v3-sec v2-page">
                <div className="container">
                    <Testi />
                </div>
            </section>
            <section className="contact-sec sv-page">
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
                                    <button type="submit" className="btn-default">
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

ServiceTwo.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default ServiceTwo;
