import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import Carousel, { CarouselArrows } from '../app/components/carousel';
import { useRef, useState } from 'react';
import { carouselsExample } from '.';
import { RightMenu } from '../app/components/RightMenu';
import { NextLink } from '../app/components/BaseNextLink';
import { Burger } from '../app/components/Navigation/Burger';
import { useInView } from 'react-intersection-observer';
import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';


const HomePage8: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);
    const [open, setOpen] = useState<boolean>(false);
    const { ref, inView } = useInView({
        threshold: 0,
    });

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

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };


    return (
        <>
            <header className={`pb ${inView ? 'sticky animated slide' : ''}`}>
                <div className="container-fluid">
                    <div className="header-content v1 d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <NextLink href="/" title="">
                                <img src="/static/images/logo_1.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="mile-right ms-auto">
                            <Burger isText setOpen={() => setOpen(!open)} />

                            <a href="#" title="" className="btn-default no-bg">
                                Let’s talk
                                <i className="lni lni-comments" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />


            <div className="promo promo-primary-container">
                <Controller
                    globalSceneOptions={{
                        triggerHook: '0',
                    }}
                >
                    <Scene
                        duration="48%"
                        triggerElement=".promo-primary-container"
                        triggerHook={0}
                    >
                        <Tween
                            to={{
                                backgroundPosition: '620px 0',
                                ease: 'easeNone',
                                left: '-68%'
                            }}
                        >
                            <div className="section-bg promo-primary-bg">
                                <div className="inside" />
                            </div>
                        </Tween>
                    </Scene>

                    <Scene
                        duration="50%"
                        triggerElement=".step-position"
                    >
                        <div className="step-position" />
                    </Scene>

                    <Tween
                        from={{
                            position: 'absolute',
                            ease: 'easeNone',
                            top: '5%'
                        }}
                        to={{
                            ease: 'easeNone',
                            position: 'relative',
                        }}
                    >
                        <div className="promo-primary">
                            <div className="container">
                                <Scene
                                    duration="50%"
                                    triggerElement=".promo-primary-container"
                                    triggerHook={0}
                                    offset={100}
                                >
                                    <Tween
                                        to={{
                                            ease: 'easeNone',
                                            left: '0%'
                                        }}
                                    >
                                        <div className="promo-primary-content">
                                            <span>miles studio</span>
                                            <h2>Boost your business up to high level</h2>
                                            <p>Like any great agency, we are only as good as the result we deliver of our recent work 😎</p>
                                            <a href="#" className="btn-default">
                                                Get Started
                                            </a>
                                        </div>
                                    </Tween>
                                </Scene>
                            </div>
                            <Scene
                                duration="50%"
                                triggerElement=".promo-primary-container"
                                triggerHook={0}
                            >
                                <Tween
                                    to={{
                                        ease: 'easeNone',
                                        left: '75%'
                                    }}
                                >
                                    <div className="square" />
                                </Tween>
                            </Scene>
                        </div>
                    </Tween>
                    
                </Controller>

            </div>
            <div ref={ref}>
                <section className="banner-sec" style={{ display: 'none' }}>
                    <div className="section-bg promo-primary-bg">
                        <div className="inside" />
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-6">
                                <div className="banner-text wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <span>miles studio</span>
                                    <h2>Boost your business up to high level</h2>
                                    <p>Like any great agency, we are only as good as the result we deliver of our recent work</p>
                                    <a href="#" title="" className="btn-default">
                                        Get Started
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners-section">
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
                <section className="services-home">
                    <div className="vector-bg" />
                    <div className="container">
                        <div className="services-content">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="service-text">
                                        <span>services</span>
                                        <h2>Trusted solutions for business</h2>
                                        <h3>We know that good design mean that good business.</h3>
                                        <p>
                                            We help our client suceed by creating identities, digital experiences, and printmaterials that
                                            communicate clearly, achieve marketing goals &amp; look fantastic
                                        </p>
                                        <a href="#" title="" className="btn-default no-bg">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="services-card-list">
                                        <div className="service-card clr1 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                            <div className="service-icon">
                                                <img src="/static/images/icon1.png" alt="" />
                                            </div>
                                            <div className="service-info">
                                                <h3>Branding</h3>
                                                <p>We build and activate brands throung cultural insigh &amp;, strategic vision.</p>
                                            </div>
                                        </div>
                                        <div className="service-card clr2 wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
                                            <div className="service-icon">
                                                <img src="/static/images/icon2.png" alt="" />
                                            </div>
                                            <div className="service-info">
                                                <h3>Interaction</h3>
                                                <p>We build and activate brands throung cultural insigh &amp;, strategic vision.</p>
                                            </div>
                                        </div>
                                        <div className="service-card clr3 wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="500ms">
                                            <div className="service-icon">
                                                <img src="/static/images/icon3.png" alt="" />
                                            </div>
                                            <div className="service-info">
                                                <h3>Motion</h3>
                                                <p>We build and activate brands throung cultural insigh &amp;, strategic vision.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="projects-sec">
                    <div className="container">
                        <div className="projects-sec-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="mile-projects v1">
                                        <div className="mile-project">
                                            <div className="project-thumb" style={{ backgroundColor: '#78901b' }}>
                                                <img src="/static/images/pic21.png" alt="" className="w-100" />
                                            </div>
                                            <div className="project-info">
                                                <span>Branding</span>
                                                <h2>
                                                    <a href="17_portfolio_single_layout_1.html" title="">
                                                        Ls. Boxes Package
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="mile-project">
                                            <div className="project-thumb" style={{ backgroundColor: '#5169fb' }}>
                                                <img src="/static/images/pic22.png" alt="" className="w-100" />
                                            </div>
                                            <div className="project-info">
                                                <span>Interaction - Motion</span>
                                                <h2>
                                                    <a href="17_portfolio_single_layout_1.html" title="">
                                                        Lewis Creative Agency
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="mile-projects v2">
                                        <div className="section-title wow fadeInUp" data-wow-duration="1000ms">
                                            <span>featured projects</span>
                                            <h2>Bigger, Bolder &amp; Better</h2>
                                        </div>
                                        <div className="mile-project">
                                            <div className="project-thumb" style={{ backgroundColor: '#f1445a' }}>
                                                <img src="/static/images/pic23.png" alt="" className="w-100" />
                                            </div>
                                            <div className="project-info">
                                                <span>Interaction - Motion</span>
                                                <h2>
                                                    <a href="17_portfolio_single_layout_1.html" title="">
                                                        Bynazo Finance Manage App
                                                    </a>
                                                </h2>
                                            </div>
                                        </div>
                                        <a href="15_portfolio_horizontal_scroll.html" title="" className="btn-default no-bg">
                                            See More Projects <i className="lni lni-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial-sec">
                    <div className="container">
                        <div className="d-flex align-items-stretch justify-content-between">
                            <div className="section-title">
                                <span>people love miles</span>
                                <h2>Trusted by +9K clients</h2>
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
                                    onNext={handleNext}
                                    onPrevious={handlePrev}
                                />
                            </div>
                        </div>
                        <div className="testimonial-slider dots-hide">
                            <div className="row testimo-slider">
                                <Carousel ref={carouselRef} {...carouselSettings}>
                                    {carouselsExample.map((item) => (
                                        <div key={item.id} className="col-12 col-lg-6">
                                            <div className="testimonial-slide">
                                                <p>
                                                    “Originally, creative and with an innate understanding of their customer’s need. The team at Miles
                                                    are always a pleasure to work with. Recommended.”
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
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-sec">
                    <div className="container">
                        <div className="team-sec-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="team-thumb wow zoomIn" data-wow-duration="1000ms">
                                        <img src="/static/images/img4.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="team-info">
                                        <div className="section-title">
                                            <span>our team</span>
                                            <h2>Creative and Funny</h2>
                                        </div>
                                        <p>
                                            Meet our talented team of creatives, fun-lovers, and magic makers. Shall seas yielding a he, moveth
                                            said gathering under all cattle were years fruit whose isn’t.{' '}
                                        </p>
                                        <a href="32_team.html" title="" className="btn-default no-bg">
                                            Meet Our Team
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="featured-post-sec">
                    <div className="container">
                        <div className="featured-post">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="featured-post-text">
                                        <span>Featured Post</span>
                                        <h2>Brief Guide into Social Media Marketing Trends 2020</h2>
                                        <p>
                                            These days, the Internet permeates every single facet of our lives on a daily basis. Indeed, there
                                            is rarely a thing that anyone.
                                        </p>
                                        <a href="blog-single-layout1.html" title="" className="btn-default">
                                            Continue Reading <i className="lni lni-chevron-right" />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="vector-img">
                                        <img src="/static/images/vector2.png" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <div className="mile-thumb">
                                        <img src="/static/images/post1.jpg" alt="" />
                                    </div>
                                    <div className="mile-info">
                                        <span>3 Hours ago</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                Proven Tricks And Tools That Save Designers’ Time
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                                <div className="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="200ms">
                                    <div className="mile-thumb">
                                        <img src="/static/images/post2.jpg" alt="" />
                                    </div>
                                    <div className="mile-info">
                                        <span>March 20, 2020</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                Effective Practices on Blog Images &amp; Visual Content
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="400ms">
                                    <div className="mile-thumb">
                                        <img src="/static/images/post3.jpg" alt="" />
                                    </div>
                                    <div className="mile-info">
                                        <span>March 16, 2020</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                How to Make Your Brand Great Again!
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                                <div className="mile-post wow fadeIn" data-wow-duration="1000ms" data-wow-delay="600ms">
                                    <div className="mile-thumb">
                                        <img src="/static/images/post4.jpg" alt="" />
                                    </div>
                                    <div className="mile-info">
                                        <span>April 3, 2020</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                UI Inspiration: 20+ Creative Tab Bar Animations
                                            </a>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-sec">
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
                <FooterVariant1 />
            </div>

        </>
    );
};

HomePage8.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Marketing Agency">{page}</Layout>;
};

export default HomePage8;
