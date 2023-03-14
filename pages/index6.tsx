import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { RightMenu } from '../app/components/RightMenu';
import { Burger } from '../app/components/Navigation/Burger';
import { useRef, useState } from 'react';
import { carouselsExample } from './index';
import Carousel, { CarouselArrowIndex, CarouselArrows, CarouselDots } from '../app/components/carousel';
import { useTheme } from '@mui/material/styles';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { useInView } from 'react-intersection-observer';
import { NextLink } from '../app/components/BaseNextLink';

const HomePage6: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const { ref: countRef, inView: viewRef } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const [open, setOpen] = useState<boolean>(false);
    const theme = useTheme();
    const carouselRef = useRef<Carousel | null>(null);
    const carouselRef2 = useRef<Carousel | null>(null);

    const carouselSettings = {
        slidesToShow: 2,
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

    const carouselSettings2 = {
        dots: false,
        arrows: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: Boolean(theme.direction === 'rtl')
    };

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    const handlePrev2 = () => {
        carouselRef2.current?.slickPrev();
    };

    const handleNext2 = () => {
        carouselRef2.current?.slickNext();
    };

    return (
        <>
            <header className={`header-v6 ${inView ? 'sticky animated slideInDown' : ''}`}>
                <div className="container">
                    <div className="header-content-v6">
                        <div className="logo">
                            <NextLink href="/" title="">
                                <img src="/static/images/logo_12.png" alt="" />
                            </NextLink>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a className="active" href="#" title="">
                                        about
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="about-agency.tsx" title="">
                                                About Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-business.tsx" title="">
                                                About Business
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-me.tsx" title="">
                                                About Me
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        Portfolio
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="14_portfolio_parallax.html" title="">
                                                Portfolio Parallax
                                            </a>
                                        </li>
                                        <li>
                                            <a href="15_portfolio_horizontal_scroll.html" title="">
                                                Portfolio Horizontol
                                            </a>
                                        </li>
                                        <li>
                                            <a href="16_portfolio_masonry.html" title="">
                                                Portfolio Masonary
                                            </a>
                                        </li>
                                        <li>
                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                Portfolio Single Layout V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-single-layout-two.tsx" title="">
                                                Portfolio Single Layout V2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-single-layout-three.tsx" title="">
                                                Portfolio Single Layout V3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        News
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="blog-layout-one.tsx" title="">
                                                Blog V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-layout-two.tsx" title="">
                                                Blog V2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-single-layout1.html" title="">
                                                Blog Single V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-single-layout2.html" title="">
                                                Blog Single V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        Contact
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="contact.tsx" title="">
                                                Contact V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact-two.tsx" title="">
                                                Contact V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <a href="#" title="" className="hd-btn">
                            Let’s chat! <i className="lni lni-comments-reply" />
                        </a>
                        <Burger className='desktop-hide mobile-show' setOpen={() => setOpen(!open)} />
                    </div>
                </div>
            </header>
            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <section className="main-banner-v6">
                <div className="container">
                    <div className="main-banner-content">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="banner-v6-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <h2>
                                        Help your <br />
                                        business growth up
                                        <br /> to high level
                                    </h2>
                                    <p>Like any great agency, we are only as good as the result we deliver of our recent work</p>
                                    <ul className="btns">
                                        <li>
                                            <a href="contact.tsx" title="" className="active">
                                                get started
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-business.tsx" title="">
                                                about us
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="banner-btm-info">
                                    <p>If you are hurry, quick call for us. Our supporters alway 24/7 and will help you asap </p>
                                    <div className="btm-hd-info">
                                        <span className="bt-icon">
                                            <i className="lni lni-phone" />
                                        </span>
                                        <div className="bt-para">
                                            <span>hotline 24/7</span>
                                            <h3>+65 - 3002 56 56 376</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="ban-img wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <img src="/static/images/ban-img4.jpg" alt="" className="w-100" />
                                </div>
                                <ul className="vl-list">
                                    <li className="active">
                                        Digital <br />
                                        marketing
                                    </li>
                                    <li>
                                        User
                                        <br />
                                        interface
                                    </li>
                                    <li>
                                        Business
                                        <br />
                                        consulation
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ref}>
                <section className="partners-section v-2">
                    <div className="container">
                        <div className="pt-logos text-center d-flex flex-wrap justify-content-center align-items-center">
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt1.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt2.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt3.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt4.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt5.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="our-services-sec">
                    <div className="container">
                        <div className="d-flex align-items-stretch justify-content-between">
                            <div className="mile-title">
                                <h3>our services</h3>
                            </div>
                            <div>
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
                                    onNext={handleNext2}
                                    onPrevious={handlePrev2}
                                />
                            </div>
                        </div>

                        <div className="our-services-content">
                            <div className="row svs-slider">
                                <Carousel ref={carouselRef2} {...carouselSettings}>
                                    {carouselsExample.map((item) => (
                                        <div key={item.id} className="col-lg-5">
                                            <div className="service-card-mile">
                                                <img src="/static/images/icon1.png" alt="" />
                                                <h2>
                                                    <a href="service-one.tsx" title="">
                                                        Branding
                                                    </a>
                                                </h2>
                                                <p>We build and activate brands throung cultural insigh &amp;, strategic vision.</p>
                                                <a href="#" title="" className="cat-up">
                                                    case study
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                            <ul className="counter-sec-v6 wow fadeInUp" id="counter" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <li>
                                    <div className="counter-cont">
                                        <h2 ref={countRef} className="clr2 count">{viewRef ? <CountUp end={820} /> : '0'}</h2>
                                        <span>
                                            satisfaction <br /> clients
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-cont">
                                        <h2 ref={countRef} className="clr2 count">{viewRef ? <CountUp end={643} /> : '0'}</h2>
                                        <span>employees on worldwide</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-cont">
                                        <h2 ref={countRef} className="clr2 count">{viewRef ? <CountUp end={1875} /> : '0'}</h2>
                                        <span>projects completed on 60 countries</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="recent-works-v6-sec">
                    <div className="container">
                        <div className="rc-work-content">
                            <div className="row">
                                <div className="col-lg-7 col-md-7">
                                    <div className="mile-title">
                                        <h3>recent works</h3>
                                    </div>
                                    <div className="rc-posts">
                                        <div className="rc-work-post">
                                            <div className="rc-thumbnail">
                                                <img src="/static/images/rc1.jpg" alt="" className="w-100" />
                                            </div>
                                            <div className="rc-info">
                                                <span>Interaction, Motion</span>
                                                <h3>
                                                    <a href="17_portfolio_single_layout_1.html" title="">
                                                        Faye Fo
                                                    </a>
                                                </h3>
                                                <p>
                                                    Discover how we helped CleanCloud to increase their presence on a global market by their
                                                    scaling up its visual identity and building a flexible style guide for their future product
                                                    elaboration.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-5">
                                    <div className="rc-posts v-2">
                                        <div className="rc-work-post v-2">
                                            <div className="rc-thumbnail">
                                                <img src="/static/images/rc2.jpg" alt="" className="w-100" />
                                            </div>
                                            <div className="rc-info">
                                                <span>Branding</span>
                                                <h3>
                                                    <a href="17_portfolio_single_layout_1.html" title="">
                                                        Taskly Dashboard
                                                    </a>
                                                </h3>
                                                <p>
                                                    BibliU is a digital platform that provides university students with personalized learning
                                                    pathways
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rc-work-post v-2">
                                            <div className="rc-thumbnail">
                                                <img src="/static/images/rc3.jpg" alt="" className="w-100" />
                                            </div>
                                            <div className="rc-info">
                                                <span>Interaction, Brandingv</span>
                                                <h3>
                                                    <a href="17_portfolio_single_layout_1.html" title="">
                                                        Nike Workout
                                                    </a>
                                                </h3>
                                                <p>
                                                    Discover how we helped them scale up from <br /> local to global.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a href="15_portfolio_horizontal_scroll.html" title="" className="btn-deafult-v6">
                                more projects
                            </a>
                        </div>
                    </div>
                </section>

                <section className="about-sec-v6">
                    <div className="about-v6-content">
                        <div className="container">
                            <div className="mile-title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h3>about us</h3>
                                <p>
                                    We are surrounded by amazing cultural and physical weather climates. Our HQ is located in Odesa — a
                                    beautiful seaside resort city near the Black Sea. Anton Checkhov lived in our same neighborhood, and we are
                                    just one minute away from the opera house where Tchaikovsky conducted.
                                </p>
                            </div>
                        </div>
                        <div className="mile-large-abt">
                            <div className="row">
                                <div className="col-lg-9 col-md-8 col-sm-7">
                                    <div className="lrg-col wow slideInLeft" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <img src="/static/images/lg-img1.jpg" alt="" className="w-100" />
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-5">
                                    <div className="lrg-col wow slideInLeft" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <img src="/static/images/lg-img2.jpg" alt="" className="w-100" />
                                        <a href="https://www.youtube.com/watch?v=MsFOWoPjMFY" title="" className="play-video-btn html5lightbox">
                                            play <br />
                                            video
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="abtt-para">
                                <p>
                                    It's always good to receive positive and constructive feedback for your work - from clients and moreover,
                                    from designers!
                                </p>
                            </div>
                            <div className="certicications-sec">
                                <div className="certificate-details">
                                    <span className="date">2020</span>
                                    <div className="awd-logo">
                                        <img src="/static/images/awd1.png" alt="" />
                                    </div>
                                    <div className="awd-list">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="awd-info">
                                                    <h3>SOTY 2020</h3>
                                                    <span>Faye Fo Website Redesign</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" title="" className="web-link">
                                                    www.fayefo.co.uk
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="awd-info">
                                                    <h3>Mobile Excellence</h3>
                                                    <span>Nike Workout App</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" title="" className="web-link">
                                                    www.nike-workout.io
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="certificate-details">
                                    <span className="date">2019</span>
                                    <div className="awd-logo">
                                        <img src="/static/images/awd2.png" alt="" />
                                    </div>
                                    <div className="awd-list">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="awd-info">
                                                    <h3>Websites Of The Year 2019</h3>
                                                    <span>Focus - Financial Management System</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" title="" className="web-link">
                                                    www.focus.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="awd-info">
                                                    <h3>Websites Of The Month, August 2019 </h3>
                                                    <span>Lewis Creative Agency</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" title="" className="web-link">
                                                    www.lewisstudio.com
                                                </a>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="awd-info">
                                                    <h3>Best 20 Websites Favourite 2019 </h3>
                                                    <span>Arquito Architeture &amp; Interior Firm</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" title="" className="web-link">
                                                    www.arquito.pl
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="certificate-details">
                                    <span className="date">2018</span>
                                    <div className="awd-logo">
                                        <img src="/static/images/awd3.png" alt="" />
                                    </div>
                                    <div className="awd-list">
                                        <div className="row">
                                            <div className="col-lg-8">
                                                <div className="awd-info">
                                                    <h3>Winner Portfolio Review United States</h3>
                                                    <span>Summit Spa Brand</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <a href="#" title="" className="web-link">
                                                    www.submitspa.com.us
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="testimonial-v6-sec">
                    <div className="container">
                        <div className="mile-title">
                            <h3>TEstimonials</h3>
                        </div>
                        <div className="testi-sec-v6">
                            <div className="testi-slider-v6">
                                <Carousel ref={carouselRef} {...carouselSettings2}>
                                    {carouselsExample.map((item) => (
                                        <div key={item.id} className="testi-slide-v6">
                                            <h3>Edison Cavani</h3>
                                            <span>Product Management at Spotify</span>
                                            <p>
                                                I don’t know what else to say, this is something that you haven’t seen before. Unique design,
                                                lightweight, and outstanding support. Milbase are always a pleasure to work!”
                                            </p>
                                        </div>
                                    ))}
                                </Carousel>

                                <CarouselArrowIndex index={0} total={carouselsExample.length} onNext={handleNext} onPrevious={handlePrev} />
                            </div>
                            <ul className="slider-thumb">
                                <li>
                                    <img src="/static/images/th1.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/static/images/th2.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/static/images/th3.jpg" alt="" />
                                </li>
                                <li>
                                    <img src="/static/images/th4.jpg" alt="" />
                                </li>
                            </ul>
                        </div>
                        <div className="mile-rtz-sec">
                            <div className="row">
                                <div className="col-lg-8 mile-pst-collection p-0 mw-100">
                                    <div className="mile-post">
                                        <div className="mile-post-thumbnail">
                                            <img src="/static/images/pic13.jpg" alt="" />
                                        </div>
                                        <div className="mile-post-info">
                                            <span className="category">design</span>
                                            <span className="posted-on">July 21st, 2020</span>
                                            <h2>
                                                <a href="blog-single-layout1.html" title="">
                                                    Power of Grid System in Design
                                                </a>
                                            </h2>
                                            <a href="#" title="">
                                                <i className="lni lni-share" /> Share
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="newsletter-sc">
                                        <h3>Newsletter</h3>
                                        <p>Subscribe our newsletter to get update regularly</p>
                                        <form>
                                            <input type="email" name="email" placeholder="Email Address" />
                                            <button type="submit">
                                                <i className="lni lni-envelope" />
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer-v6">
                    <div className="container">
                        <div className="footer-content-v6">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="widget-abt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <h2>Let’s make something amazing toghtether.</h2>
                                        <h2>
                                            Start by
                                            <a href="#" title="">
                                                {' '}
                                                saying hi
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="get-touch-txt mw-100 wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <h5>contact info</h5>
                                        <h4>5th, Floor, 216 Fairground Rd, FL 3290, USA</h4>
                                        <a href="#" title="">
                                            hello@miles.co
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="15_portfolio_horizontal_scroll.html" title="">
                                                    Works
                                                </a>
                                            </li>
                                            <li>
                                                <a href="about-agency.tsx" title="">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-layout-one.tsx" title="">
                                                    News
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.tsx" title="">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="mile-bottom-footer">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="btm-copy">
                                            <img src="/static/images/logo_12.png" alt="" />
                                            <p>© 2020. All Rights Reserved</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <ul className="social-header">
                                            <li>
                                                <a href="#" title="">
                                                    <i className="lni lni-twitter-original" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="lni lni-facebook-filled" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="lni lni-instagram-original" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="lni lni-pinterest" />
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    <i className="lni lni-youtube" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>


        </>
    );
};

HomePage6.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Business Startup">{page}</Layout>;
};

export default HomePage6;
