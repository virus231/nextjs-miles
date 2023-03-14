import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { carouselsExample } from './index';
import Carousel, { CarouselDots } from '../app/components/carousel';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const PortfolioSingleLayoutThree: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const carouselRef = useRef<Carousel | null>(null);

    const carouselSettings = {
        slidesToShow: 3,
        dots: false,
        arrows: false,
        centerMode: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerPadding: '0' }
            }
        ]
    };

    return (
        <>
            <div className="wrapper bg-2">
                <HeaderV1 view={inView} />

                <section className="pf-single-layout3">
                    <div className="pf-head-v3">
                        <div className="container">
                            <div className="pf-head-content-v3 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h2>Fodo Rebrand</h2>
                                <ul className="prp-list">
                                    <li>
                                        <h3>client</h3>
                                        <span>Fodo Pouch Ltd</span>
                                    </li>
                                    <li>
                                        <h3>services</h3>
                                        <span>Branding, Motion</span>
                                    </li>
                                    <li>
                                        <h3>date</h3>
                                        <span>December 25th, 2020</span>
                                    </li>
                                    <li>
                                        <h3>team</h3>
                                        <span>Luka Modric - Designer</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pf-banner-v3">
                        <img src="/static/images/pf-banner2.png" alt="" />
                    </div>
                    <div className="container">
                        <div
                            className="txt-content v2 text-center border-bottom wow fadeInUp"
                            data-wow-duration="1000ms"
                            data-wow-delay="0ms"
                        >
                            <p>
                                Byzano nestled right into our wheelhouse. A dynamic co-working space attracting entrepreneurs, tinkerers,
                                and creatives in the tech hub of Ann Arbor, Michigan, they wanted a lifestyle brand—a complete ecosystem of
                                brand visuals and assets that could be worn, posted, shared.
                            </p>
                        </div>
                    </div>
                </section>
                <section ref={ref} className="chal-sec-v3">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mv-title">
                                    <span>challenge</span>
                                    <h2>Best finance app professional &amp; friendly for all people.</h2>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mv-para">
                                    <p>
                                        <strong>Miles Studio</strong> believes a team of creatives who are excited about unique ideas and
                                        help digital and fin-tech companies. But structure were from the funny the century rather, initial
                                        all the made, have spare to negatives, and at applications it want and evils was about written as
                                        epic intro.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pl-v3-slider-sec">
                        <div className="row pl-v3-slider">
                            <Carousel ref={carouselRef} {...carouselSettings}>
                                {carouselsExample.map((item) => (
                                    <div className="col-lg-4">
                                        <div className="pf-slide-v3">
                                            <img src="/static/images/pf-img1.jpg" alt="" />
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </section>
                <section className="vd-frame-sec">
                    <div className="container">
                        <div className="ms-title text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <h2>No matter how you slice it, she likes what she´s seen so far, and she’s willing to give you a chance.</h2>
                        </div>
                        <div className="yt-frame">
                            <iframe src="https://www.youtube.com/embed/DBXH9jJRaDk?autoplay=0&fs=1&iv_load_policy=3&showinfo=0&rel=0&cc_load_policy=0&start=0&end=0&origin=https://youtubeembedcode.com" />
                        </div>
                    </div>
                </section>
                <section className="post-control-sec">
                    <div className="container">
                        <h2 className="text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            Bdash UI Dashboard
                        </h2>
                        <div className="avl-btm">
                            <div className="row align-items-center">
                                <div className="col-md-6">
                                    <div className="shareon">
                                        <h3>Share:</h3>
                                        <ul>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="fab fa-google-plus-g" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="fab fa-tumblr" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="fa fa-rss" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="liked-dv">
                                        <span className="liked">
                                            <i className="lni lni-heart-filled" />
                                        </span>
                                        <span>18 Liked</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-white">
                    <div className="top-footer">
                        <div className="container">
                            <div className="footer-content">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6">
                                        <div className="ft-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                            <p>
                                                We are a close team of creative professionals based out of Savannah, Georgia. We are
                                                passionate about partnering &amp; organizations to provide exceptional solutions.
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
                                                            <button
                                                                type="submit"
                                                                className="input__label-content input__label-content--makiko"
                                                            >
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
                                                    <a href="contact.tsx" title="">
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
            </div>
        </>
    );
};

PortfolioSingleLayoutThree.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Single Layout Three">{page}</Layout>;
};

export default PortfolioSingleLayoutThree;
