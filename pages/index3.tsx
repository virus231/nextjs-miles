import { Layout } from '../app/components/Layout';
import { Testi } from '../app/components/Testi';
import { NextPageWithLayout } from './_app';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { carouselsExample } from './index';
import Carousel, { CarouselArrows } from '../app/components/carousel';
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box/Box';
import { RightMenu } from '../app/components/RightMenu';
import { Burger } from '../app/components/Navigation/Burger';
import { useInView } from 'react-intersection-observer';
import { NextLink } from '../app/components/BaseNextLink';

const HomePage3: NextPageWithLayout = () => {
    const [open, setOpen] = useState<boolean>(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const { ref: countRef, inView: viewRef } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    const carouselRef = useRef<Carousel | null>(null);

    const carouselSettings = {
        slidesToShow: 2,
        centerMode: false,
        centerPadding: '20px',
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

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <>
            <header className={`header-v3 ${inView ? 'sticky animated slideInDown' : ''}`}>
                <div className="container">
                    <div className="header-content d-flex flex-wrap">
                        <div className="logo">
                            <NextLink href="/" title="">
                                <img src="/static/images/logo_8.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="head-cat">
                            <span>
                                art direction <br />
                                design
                            </span>
                        </div>
                        <ul className="hd-links">
                            <li>Call me. (+706) 898-0751</li>
                            <li>info@crisdesign.co</li>
                        </ul>
                        <Burger setOpen={() => setOpen(!open)} />
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <section className="main-banner-v3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <div className="banner-txt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h2>Christopher Felami</h2>
                                <span>
                                    Interaction Designer and <br /> dog lover
                                </span>
                                <p>You are a freelancer and you love dogs just like me! Lets shake hands, bro</p>
                                <a href="contact.tsx" title="" className="btn-default3">
                                    let’s chat!
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="banner-img wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <img src="/static/images/banner-img3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ref}>

            <section className="vls-sections">
                <div className="mile-vl-sec wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <div className="container">
                        <div className="mile-vl-sec-details">
                            <div className="mile-vl-dt">
                                <span className="vl-icon clr1">
                                    <i className="lni lni-crown" />
                                </span>
                                <h3>
                                    <a href="service-one.tsx" title="" className="animsition-link" data-animsition-out-class="fade-out">
                                        Branding
                                    </a>
                                </h3>
                                <p>I build and activate brands throung cultural insigh &amp;, strategic vision.</p>
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    See Project
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
                                <h3>
                                    <a href="service-one.tsx" title="" className="animsition-link" data-animsition-out-class="fade-out">
                                        Motion
                                    </a>
                                </h3>
                                <p>I build and activate brands throung cultural insigh &amp;, strategic vision.</p>
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    See Project
                                </a>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
                <div className="mile-vl-sec wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                    <div className="container">
                        <div className="mile-vl-sec-details v3">
                            <div className="mile-vl-dt">
                                <span className="vl-icon clr3">
                                    <i className="lni lni-anchor" />
                                </span>
                                <h3>
                                    <a href="service-one.tsx" title="" className="animsition-link" data-animsition-out-class="fade-out">
                                        Illustration
                                    </a>
                                </h3>
                                <p>Decribe things abstract become visible with a look impressive</p>
                                <a href="17_portfolio_single_layout_1.html" title="">
                                    See Project
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

                <section className="clients-sec-v3">
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
                        <ul className="counter-sec wow fadeInUp" id="counter" data-wow-duration="1000ms" data-wow-delay="0ms">
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

                <section className="works-v3-sec pb-0">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-6">
                                <div className="section-title-v3">
                                    <h2>Works</h2>
                                    <span>Featured projects, which my best projects be choice to show</span>
                                </div>
                            </div>
                            <div className="col-6 d-flex justify-content-end">
                                <CarouselArrows
                                    sx={{
                                        color: '#ccc'
                                    }}
                                    leftButtonProps={{
                                        sx: {
                                            svg: {
                                                width: '32px',
                                                height: '32px'
                                            }
                                        }
                                    }}
                                    rightButtonProps={{
                                        sx: {
                                            svg: {
                                                width: '32px',
                                                height: '32px'
                                            }
                                        }
                                    }}
                                    hover
                                    icon="ic:round-keyboard-arrow-right"
                                    onNext={handleNext}
                                    onPrevious={handlePrev}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="work-projects">
                        <div className="container">
                            <div className="row work-slider">
                                <Box
                                    sx={{
                                        overflow: 'hidden',
                                        position: 'relative'
                                    }}
                                >
                                    <Carousel ref={carouselRef} {...carouselSettings}>
                                        {carouselsExample.map((item) => (
                                            <div key={item.id} className="col-lg-6">
                                                <div className="work-slide">
                                                    <img src="/static/images/pic2.jpg" alt="" />
                                                    <div className="wkr-txt">
                                                        <h3>
                                                            <a
                                                                href="17_portfolio_single_layout_1.html"
                                                                title=""
                                                                className="animsition-link"
                                                                data-animsition-out-class="fade-out"
                                                            >
                                                                Faye Fo
                                                            </a>
                                                        </h3>
                                                        <span>Interaction, Illustration</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </Box>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testi-v3-sec">
                    <div className="container">
                        <Testi />
                    </div>
                </section>

                <section className="work-inquiry-sec">
                    <div className="container">
                        <div className="work-inquery">
                            <div className="inqu-text">
                                <h3>Work Inquiry</h3>
                                <span>Let’s work together and i’ll help you by all my best</span>
                            </div>
                            <div className="inq-btn">
                                <a href="contact.tsx" title="" className="btn-default3">
                                    Let’s Chat!
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="stay-touch-sec">
                    <div className="container">
                        <div className="txh-text text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <h3>Stay Connected</h3>
                            <h4>San Francisco, CA</h4>
                            <h2>hello@crisdesign.co</h2>
                            <span>(+03) 456 - 8957 - 386</span>
                            <ul className="social-linkss">
                                <li>
                                    <a href="#" title="" className="dribble">
                                        <i className="lni lni-dribbble" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="behance">
                                        <i className="lni lni-behance-original" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="" className="instagram">
                                        <i className="lni lni-instagram-original" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <footer className="footer-v3">
                    <div className="container">
                        <div className="footer-content">
                            <div className="ft-logo">
                                <img src="/static/images/logo_8.png" alt="" />
                            </div>
                            <ul className="nav-btm-links">
                                <li>
                                    <a href="about-business.tsx" title="">
                                        about
                                    </a>
                                </li>
                                <li>
                                    <a href="15_portfolio_horizontal_scroll.html" title="">
                                        works
                                    </a>
                                </li>
                                <li>
                                    <a href="service-one.tsx" title="">
                                        services
                                    </a>
                                </li>
                                <li>
                                    <a href="blog-layout-one.tsx" title="">
                                        news
                                    </a>
                                </li>
                                <li>
                                    <a href="contact.tsx" title="">
                                        contact
                                    </a>
                                </li>
                            </ul>
                            <div className="cpy-text">
                                <p>© 2020 cris. all rights reserved</p>
                            </div>
                        </div>
                    </div>
                    <div className="btm-shape">
                        <img src="/static/images/shape2.jpg" alt="" />
                    </div>
                </footer>
            </div>


        </>
    );
};

HomePage3.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home Freelancer">{page}</Layout>;
};

export default HomePage3;
