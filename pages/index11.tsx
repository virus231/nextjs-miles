import { Layout } from '../app/components/Layout';
import { BlogPosts } from '../app/components/BlogPosts';
import { useRef, useState } from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Carousel, { CarouselArrows, CarouselDots } from '../app/components/carousel';
import { carouselsExample } from './index';
import { useInView } from 'react-intersection-observer';
import { NextLink } from '../app/components/BaseNextLink';
import { Burger } from '../app/components/Navigation/Burger';
import { RightMenu } from '../app/components/RightMenu';

const HomePage11 = () => {
    const [open, setOpen] = useState<boolean>(false);

    const { ref, inView } = useInView({
        threshold: 0,
    });
    const { ref: countRef, inView: viewRef } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const carouselRef = useRef<Carousel | null>(null);
    const carouselRef2 = useRef<Carousel | null>(null);

    const carouselSettings = {
        slidesToShow: 2,
        dots: true,
        infinite: true,
        arrows: false,
        centerMode: false,
        ...CarouselDots({
            rounded: true,
            sx: { mt: '10px' }
        }),
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
        slidesToShow: 4,
        dots: false,
        arrows: false,
        centerMode: false,
        infinite: true,
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

    const carouselSettings3 = {
        slidesToShow: 2,
        dots: false,
        arrows: false,
        centerMode: false,
        infinite: true,
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

    const handlePrev2 = () => {
        carouselRef2.current?.slickPrev();
    };

    const handleNext2 = () => {
        carouselRef2.current?.slickNext();
    };

    return (
        <>
            <header className={`header-v6 v11 pb ${inView ? 'sticky animated slideInDown' : ''}`}>
                <div className="container">
                    <div className="header-content-v6">
                        <div className="logo">
                            <NextLink href="/" title="">
                                <img src="/static/images/miles-agency-white.png" alt="" />
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
                        <a href="#" title="" className="hd-btn">
                            Let’s chat! <i className="lni lni-comments-reply" />
                        </a>
                        <Burger white className="desktop-hide mobile-show" setOpen={() => setOpen(!open)} />
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <section className="main-banner-v11">
                <div className="container">
                    <div className="content-v11 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span>miles agency</span>
                        <h2>
                            We build <br /> brands that lead &amp; inspire
                        </h2>
                        <p>Like any great agency, we are only as good as the result we deliver of our recent work</p>
                        <a href="#" title="" className="btn-default v11">
                            Learn More
                        </a>
                        <a href="https://www.youtube.com/watch?v=vw6QmjPpdy4" title="" className="view-btn html5lightbox">
                            <span className="pl-btn">
                                <i className="lni lni-play" />
                            </span>
                            <span className="vt">view our story</span>
                        </a>
                    </div>
                </div>
            </section>

            <div ref={ref}>
                <section className="partners-section v11 gray-bg">
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
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt6.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt7.png" alt="" />
                                </a>
                            </div>
                            <div className="pt-logo">
                                <a href="#" title="">
                                    <img src="/static/images/pt8.png" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="about-v4-sec v11 gray-bg">
                    <div className="container">
                        <div className="about-v4-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="abt-list">
                                        <div className="abt-content">
                                            <h3>
                                                <a href="service-one.tsx" title="">
                                                    Branding
                                                </a>
                                            </h3>
                                            <p>Create digital products with unique ideas</p>
                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                20 Projects
                                            </a>
                                            <span className="iconn">
                                                <i className="lni lni-vector" />
                                            </span>
                                        </div>
                                        <div className="abt-content">
                                            <h3>
                                                <a href="service-one.tsx" title="">
                                                    UI/UX Interaction
                                                </a>
                                            </h3>
                                            <p>I develop front-end with coding super smooth</p>
                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                165 Projects
                                            </a>
                                            <span className="iconn">
                                                <i className="lni lni-code" />
                                            </span>
                                        </div>
                                        <div className="abt-content">
                                            <h3>
                                                <a href="service-one.tsx" title="">
                                                    Motion
                                                </a>
                                            </h3>
                                            <p>Create digital products with unique ideas</p>
                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                20 Projects
                                            </a>
                                            <span className="iconn">
                                                <i className="lni lni-compass" />
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="abt-col-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <span>about us</span>
                                        <h2>We brings trusted solutions your business</h2>
                                        <h3>We know that good design mean that good business.</h3>
                                        <p>
                                            We help our client suceed by creating identities, digital experiences, and printmaterials that
                                            communicate clearly, achieve marketing goals &amp; look fantastic Lorem uispum dolor sit amert
                                            tunoer poea opefse ceefo goipully. Communicate clearly, achieve marketing goals &amp; look fantastic
                                            Lorem uispum dolor sit amert tunoer poea opefse ceefo goipully.
                                        </p>
                                        <a href="about-agency.tsx" title="" className="btn-default v11">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="why-us-v8 v11">
                    <div className="container">
                        <div className="title-v8 v11 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>why choose us</span>
                            <h2>Top reasons for why choose us</h2>
                            <p>Our strategy includes consistently evolving, to ensure we’re producing exceptional SEO for business.</p>
                        </div>
                        <div className="row fzt-row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-fzt">
                                    <h3>
                                        <a href="service-one.tsx" title="">
                                            Competitor Research
                                        </a>
                                    </h3>
                                    <p>Help business with their brading identity system better</p>
                                    <span className="fzt-icon v1">
                                        <i className="lni lni-users" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-fzt">
                                    <h3>
                                        <a href="service-one.tsx" title="">
                                            Innovatives Ideas &amp; Strategy
                                        </a>
                                    </h3>
                                    <p>Reach out your clients better through website &amp; mobile app</p>
                                    <span className="fzt-icon v2">
                                        <i className="lni lni-invention" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-fzt">
                                    <h3>
                                        <a href="service-one.tsx" title="">
                                            Affordable Cost
                                        </a>
                                    </h3>
                                    <p>Building plan &amp; strategy for your business by social marketing</p>
                                    <span className="fzt-icon v3">
                                        <i className="lni lni-money-protection" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-fzt">
                                    <h3>
                                        <a href="service-one.tsx" title="">
                                            Dedicated Support &amp; 24/7
                                        </a>
                                    </h3>
                                    <p>Improve quality of product with high resolution photos</p>
                                    <span className="fzt-icon v4">
                                        <i className="lni lni-headphone" />
                                    </span>
                                </div>
                            </div>
                        </div>
                        <ul className="counter-sec-v6 wow fadeInUp" id="counter" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <li>
                                <div className="counter-cont">
                                    <h2 ref={countRef} className="clr1 count">{viewRef ? <CountUp end={820} /> : '0'}</h2>
                                    <span>
                                        satisfaction <br /> clients
                                    </span>
                                </div>
                            </li>
                            <li>
                                <div className="counter-cont">
                                    <h2 ref={countRef} className="clr1 count">{viewRef ? <CountUp end={643} /> : '0'}</h2>
                                    <span>employees on worldwide</span>
                                </div>
                            </li>
                            <li>
                                <div className="counter-cont">
                                    <h2 ref={countRef} className="clr1 count">{viewRef ? <CountUp end={1875} /> : '0'}</h2>
                                    <span>projects completed on 60 countries</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="works-v3-sec v10 v11">
                    <div className="container">
                        <div className="title-v10 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>Portfolio</span>
                            <h2>Our Latest Projects</h2>
                        </div>
                    </div>
                    <div className="work-projects">
                        <div className="container">
                            <div className="row work-slider">
                                <Carousel ref={carouselRef} {...carouselSettings}>
                                    {carouselsExample.map((item) => (
                                        <div key={item.id} className="col-lg-6">
                                            <div className="work-slide">
                                                <img src="/static/images/pict1.jpg" alt="" />
                                                <div className="wkr-txt">
                                                    <h3>
                                                        <a href="portfolio-single-layout-two.tsx" title="">
                                                            Arquito
                                                        </a>
                                                    </h3>
                                                    <span>Interaction, Illustration</span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="award-certificate-sec">
                    <div className="container">
                        <div className="title-v8 v11 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>awards</span>
                            <h2>Rewards for our efforts</h2>
                            <p>
                                It's always good to receive positive and constructive feedback for your work - from clients and moreover, from
                                designers!
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
                </section>

                <section className="team-sec-v11">
                    <div className="container">
                        <div className="title-v8 v11 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>team</span>
                            <h2>Join 4000+ talented members of Miles</h2>
                        </div>
                        <div className="row teams teams-slider">
                            <CarouselArrows
                                icon="teenyicons:right-small-outline"
                                onNext={handleNext2}
                                onPrevious={handlePrev2}
                                topSpace={50}
                                leftButtonProps={{
                                    sx: {
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        '&:hover': {
                                            svg: {
                                                color: '#fff'
                                            },
                                            backgroundColor: '#4c0ee9'
                                        }
                                    }
                                }}
                                rightButtonProps={{
                                    sx: {
                                        width: '3.5rem',
                                        height: '3.5rem',
                                        '&:hover': {
                                            svg: {
                                                color: '#fff'
                                            },
                                            backgroundColor: '#4c0ee9'
                                        }
                                    }
                                }}
                                sx={{
                                    zIndex: 9,
                                    color: '#ccc'
                                }}
                            >
                                <Carousel ref={carouselRef2} {...carouselSettings2}>
                                    {carouselsExample.map((item) => (
                                        <div key={item.id} className="col-lg-3">
                                            <div className="team-cl">
                                                <img src="/static/images/team2.jpg" alt="" />
                                                <div className="team-fig	">
                                                    <h3>
                                                        <a href="#" title="">
                                                            Ellise Rohanson
                                                        </a>
                                                    </h3>
                                                    <span>Co-Founder</span>
                                                </div>
                                                <ul className="social-ic">
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
                                                            <i className="fab fa-instagram" />
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </CarouselArrows>
                        </div>
                        <div className="full-div text-center">
                            <a href="career.tsx" title="" className="btn-default v11">
                                Become our member
                            </a>
                        </div>
                    </div>
                </section>
                <section className="blog-section-v7 v11">
                    <div className="container">
                        <BlogPosts />
                    </div>
                </section>

                <section className="testimonial-sec v10 v11">
                    <div className="container">
                        <div className="title-v8 v11 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>Testimonials </span>
                            <h2>See why clients love us</h2>
                        </div>
                        <div className="testimonial-slider style2">
                            <div className="row testimo-slider">
                                <CarouselArrows
                                    icon="teenyicons:right-small-outline"
                                    onNext={handleNext}
                                    onPrevious={handlePrev}
                                    sx={{
                                        zIndex: 9,
                                        color: '#ccc'
                                    }}
                                    topSpace={60}
                                    leftButtonProps={{
                                        sx: {
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px',
                                            '&:hover': {
                                                svg: {
                                                    color: '#fff'
                                                },
                                                borderRadius: '10px',
                                                backgroundColor: '#4c0ee9'
                                            }
                                        }
                                    }}
                                    rightButtonProps={{
                                        sx: {
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px',
                                            '&:hover': {
                                                svg: {
                                                    color: '#fff'
                                                },
                                                borderRadius: '10px',
                                                backgroundColor: '#4c0ee9'
                                            }
                                        }
                                    }}
                                >
                                    <Carousel ref={carouselRef} {...carouselSettings3}>
                                        {carouselsExample.map((item) => (
                                            <div key={item.id} className="col-lg-6">
                                                <div className="testimonial-slide">
                                                    <p>
                                                        “Originally, creative and with an innate understanding of their customer’s need. The
                                                        team at Miles are always a pleasure to work with. Recommended.”
                                                    </p>
                                                    <div className="thmb-row">
                                                        <div className="thmb-img">
                                                            <img src="/static/images/thumb1.png" alt="" />
                                                        </div>
                                                        <div className="thmb-info">
                                                            <h3>Bobby Hanesto</h3>
                                                            <span>
                                                                Director of <em>Inivisionapp</em>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Carousel>
                                </CarouselArrows>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-sec v11 pf-single">
                    <div className="container">
                        <div className="border-top-content">
                            <div className="title-v8 v11 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <span>drop a line</span>
                                <h2>Kick-start your project now with us</h2>
                            </div>
                            <form className="contact-form">
                                <div className="row">
                                    <div className="col-md-4">
                                        <div className="form-group">
                                            <input type="text" className="form--control" id="name" name="name" placeholder="" />
                                            <label htmlFor="name">
                                                Full Name <span>*</span>{' '}
                                            </label>
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
                                            <button type="submit" className="btn-default v11 no-bg">
                                                Submit Your Inquiry
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <footer className="footer-v9 v11">
                    <div className="container">
                        <div className="footer-content-v9 row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="widget widget-about">
                                    <img src="/static/images/logo_1.png" alt="" />
                                    <h3 className="widget-title">Information</h3>
                                    <ul>
                                        <li>
                                            <span className="wz-icon">
                                                <i className="lni lni-map" />
                                            </span>
                                            <p>90 Fifth Avenue, 3rd Floor New York NY 10011</p>
                                        </li>
                                        <li>
                                            <span className="wz-icon">
                                                <i className="lni lni-envelope" />
                                            </span>
                                            <p>
                                                <a href="mailto:example@example.com" title="">
                                                    hello@msulting.co.us
                                                </a>
                                            </p>
                                        </li>
                                        <li>
                                            <span className="wz-icon">
                                                <i className="lni lni-phone" />
                                            </span>
                                            <p>(+37) 96 5468 68</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="widget widget-links">
                                    <h3 className="widget-title">comany</h3>
                                    <ul className="wd-links">
                                        <li>
                                            <a href="about-agency.tsx" title="">
                                                About Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="32_team.html" title="">
                                                Team
                                            </a>
                                        </li>
                                        <li>
                                            <a href="career.tsx" title="">
                                                Careers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Investors
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-one.tsx" title="">
                                                Services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Cases
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.tsx" title="">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Offices
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 col-sm-6">
                                <div className="widget widget-links">
                                    <h3 className="widget-title">quick links</h3>
                                    <ul className="wd-links">
                                        <li>
                                            <a href="#" title="">
                                                Help Center
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                FAQs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Policy Privacy
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Term Conditions
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                Sitemap
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="widget widget-newsletter">
                                    <h3 className="widget-title">Newsletter</h3>
                                    <p>Subscribe to our newsletter and we will inform you about newset projects and promotions</p>
                                    <form className="newz-form">
                                        <span className="input input--makiko">
                                            <input
                                                className="input__field input__field--makiko"
                                                type="email"
                                                id="input-16"
                                                placeholder="Enter email address..."
                                            />
                                            <label className="input__label input__label--makiko">
                                                <button type="submit" className="input__label-content input__label-content--makiko">
                                                    <i className="lni lni-envelope" />
                                                </button>
                                            </label>
                                        </span>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="row btm-footer">
                            <div className="col-lg-4 col-md-6">
                                <ul className="social-links">
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-github" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-dribbble" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <p className="cp-txt">© 2020 Msulting. All Rights Reserved</p>
                            </div>
                            <div className="col-lg-4">
                                <div className="widget-language text-left">
                                    <ul>
                                        <li>
                                            <a href="#" title="">
                                                ENG
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                FRA
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                GER
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

HomePage11.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Creative Agency">{page}</Layout>;
};

export default HomePage11;
