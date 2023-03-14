import { useEffect, useRef, useState } from 'react';
import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { BlogPosts } from '../app/components/BlogPosts';
import { NextLink } from '../app/components/BaseNextLink';
import { RightMenu } from '../app/components/RightMenu';
import { Burger } from '../app/components/Navigation/Burger';
import { carouselsExample } from './index';
import Carousel, { CarouselDots } from '../app/components/carousel';
import { useInView } from 'react-intersection-observer';

const HomePage9: NextPageWithLayout = () => {
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
        slidesToShow: 1,
        dots: true,
        arrows: false,
        centerMode: false,
        ...CarouselDots({
            rounded: true,
            sx: { mt: '10px', color: '#f59e31' }
        })
    };

    const anotherCarouselSettings = {
        ...carouselSettings,
        dots: false
    };

    return (
        <>
            <header className={`header-v8 v9 ${inView ? 'sticky animated slideInDown' : ''}`}>
                <div className="container">
                    <div className="header-content-v8">
                        <div className="logo-v8">
                            <NextLink href="/" title="">
                                <img src="/static/images/miles-consulting.png" alt="" />
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
                        <a href="#" title="" className="chat-btn">
                            Let’s chat! <i className="lni lni-comments-reply" />
                        </a>
                        <Burger setOpen={() => setOpen(!open)} />
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <section className="main-banner-v9">
                <div className="container">
                    <div className="banner-slider-v9 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <Carousel ref={carouselRef} {...carouselSettings}>
                            {carouselsExample.map((item) => (
                                <div key={item.id} className="banner-slide-v9">
                                    <span>Rewared for your trust</span>
                                    <h2>
                                        <span>Building The Right</span> Foundations
                                    </h2>
                                    <p>Like any great agency, we are only as good as the result we deliver of our recent work</p>
                                    <a href="#" title="" className="btn-default-v9">
                                        Get Started
                                    </a>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            <div ref={ref}>
                <section className="about-v9">
                    <div className="container">
                        <div className="abt-v9-cntr">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="call-us-v9">
                                        <span className="icon-v9">
                                            <i className="lni lni-phone" />
                                        </span>
                                        <h4>call us directly</h4>
                                        <h3>(+37) 96 3548 68</h3>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <ul className="cl-ordr" id="counter">
                                        <li>
                                            <h3 className="count">2560</h3>
                                            <span>Happy Clients in 25 years</span>
                                        </li>
                                        <li>
                                            <h3 className="count">42680</h3>
                                            <span>Projects completed on the worldwide</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-v9-content">
                    <div className="container-fluid">
                        <div className="about-v9-row">
                            <div className="ban-img-v9">
                                <img src="/static/images/ban-img6.png" alt="" />
                            </div>
                            <div className="about-v9-txt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <span>about us</span>
                                <h2>
                                    <span>Optimized</span> <br />
                                    For Your Business Better
                                </h2>
                                <p>
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
                                    corporate strategy foster collaborative thinking to further the overall value proposition.
                                </p>
                                <a href="about-agency.tsx" title="" className="btn-default-v9 v2">
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
                    </div>
                </section>
                <section className="services-v9">
                    <div className="container">
                        <div className="title-v9 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>what we can help</span>
                            <h2>
                                <span>Delivering End-to-End</span> Company Solutions Online
                            </h2>
                        </div>
                        <div className="row services_v9">
                            <div className="col-lg-4 col-md-6">
                                <div className="service-v9">
                                    <span className="s-icon">
                                        <i className="lni lni-crown" />
                                    </span>
                                    <h3>
                                        <a href="17_portfolio_single_layout_1.html" title="">
                                            Solicitory
                                        </a>
                                    </h3>
                                    <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                    <span className="s-category">case study</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-v9">
                                    <span className="s-icon">
                                        <i className="lni lni-crown" />
                                    </span>
                                    <h3>
                                        <a href="17_portfolio_single_layout_1.html" title="">
                                            Business Planning
                                        </a>
                                    </h3>
                                    <p>Podcasting operational change management inside of workflows to establish a framework.</p>
                                    <span className="s-category">case study</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-v9">
                                    <span className="s-icon">
                                        <i className="lni lni-crown" />
                                    </span>
                                    <h3>
                                        <a href="17_portfolio_single_layout_1.html" title="">
                                            Strategy
                                        </a>
                                    </h3>
                                    <p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                                    <span className="s-category">case study</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-v9">
                                    <span className="s-icon">
                                        <i className="lni lni-crown" />
                                    </span>
                                    <h3>
                                        <a href="17_portfolio_single_layout_1.html" title="">
                                            Human Resources
                                        </a>
                                    </h3>
                                    <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                    <span className="s-category">case study</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="service-v9">
                                    <span className="s-icon">
                                        <i className="lni lni-crown" />
                                    </span>
                                    <h3>
                                        <a href="17_portfolio_single_layout_1.html" title="">
                                            Startup
                                        </a>
                                    </h3>
                                    <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                    <span className="s-category">case study</span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="sv-text-v9">
                                    <h2>“Our Avantage can help you with picking out the best people for your company.”</h2>
                                    <img src="/static/images/sign2.png" alt="" />
                                    <span>Founder at Misulting</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="why-us-v9">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="why-txt-v9">
                                    <div className="title-v9">
                                        <span>why choose us</span>
                                        <h2>
                                            <span>Different Value</span> Created Us
                                        </h2>
                                    </div>
                                    <ul>
                                        <li>
                                            <div className="us-svs">
                                                <span className="svs-icon">
                                                    <i className="lni lni-money-protection" />
                                                </span>
                                                <div className="svs-info">
                                                    <h3>Affordable Price</h3>
                                                    <p>
                                                        Nanotechnology immersion along the information highway will close the loop on focusing
                                                        solely
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="us-svs">
                                                <span className="svs-icon">
                                                    <i className="lni lni-crown" />
                                                </span>
                                                <div className="svs-info">
                                                    <h3>Top-notch Experts Consulting</h3>
                                                    <p>
                                                        Nanotechnology immersion along the information highway will close the loop on focusing
                                                        solely
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="us-svs">
                                                <span className="svs-icon">
                                                    <i className="lni lni-comments-reply" />
                                                </span>
                                                <div className="svs-info">
                                                    <h3>Dedicated Support 24/7</h3>
                                                    <p>
                                                        Nanotechnology immersion along the information highway will close the loop on focusing
                                                        solely
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="wy-img wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <img src="/static/images/ban-img7.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testimonial-v4-sec v9">
                    <div className="container">
                        <div className="title-v9 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>Testimonials</span>
                            <h2>
                                <span>Our Reputation,</span> Our Reputation
                            </h2>
                        </div>
                        <div className="cl-slider-v4">
                            <Carousel ref={carouselRef} {...anotherCarouselSettings}>
                                {carouselsExample.map((item) => (
                                    <div key={item.id} className="cl-slide">
                                        <ul className="rating">
                                            <li>
                                                <i className="lni lni-star-filled" />
                                            </li>
                                            <li>
                                                <i className="lni lni-star-filled" />
                                            </li>
                                            <li>
                                                <i className="lni lni-star-filled" />
                                            </li>
                                            <li>
                                                <i className="lni lni-star-filled" />
                                            </li>
                                            <li>
                                                <i className="lni lni-star-filled" />
                                            </li>
                                        </ul>
                                        <span>5.0 Rating</span>
                                        <p>
                                            Daniel was a real pleasure to work with and we look forward to working with him again. He’s
                                            definitely the kind of designer you can trust with a project from start to finish
                                        </p>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                        <div className="cl-slide-thumbs">
                            <div className="cli-thumb">
                                <img src="/static/images/tol1.png" alt="" />
                                <div className="col-info">
                                    <h3>Benjamin Bryant</h3>
                                    <span>
                                        VP &amp; Co-Founder, <strong>Wiser.</strong>
                                    </span>
                                </div>
                            </div>
                            <div className="cli-thumb">
                                <img src="/static/images/tol2.png" alt="" />
                                <div className="col-info">
                                    <h3>Raaid Hossain</h3>
                                    <span>
                                        Project Management, <strong>Focuslab</strong>
                                    </span>
                                </div>
                            </div>
                            <div className="cli-thumb">
                                <img src="/static/images/tol3.png" alt="" />
                                <div className="col-info">
                                    <h3>Logan Cee</h3>
                                    <span>
                                        UI/UX Designer, <strong>LoganCee</strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-sec v9">
                    <div className="container">
                        <div className="team-sec-content">
                            <div className="row align-items-center">
                                <div className="col-lg-7">
                                    <div className="team-thumb wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <img src="/static/images/img5.png" alt="" />
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="team-info">
                                        <div className="title-v9">
                                            <span>TEam</span>
                                            <h2>
                                                <span>Meet</span> Our Experts
                                            </h2>
                                        </div>
                                        <p>
                                            Meet our talented team of creatives, fun-lovers, and magic makers. Shall seas yielding a he, moveth
                                            said gathering under all cattle were years fruit whose isn’t.
                                        </p>
                                        <a href="32_team.html" title="" className="btn-default-v9 v2">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="blog-section-v7 v9">
                    <div className="container">
                        <div className="title-v9 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>our press</span>
                            <h2>
                                <span>Latest</span> Articles
                            </h2>
                        </div>
                        <BlogPosts />
                    </div>
                </section>
                <footer className="footer-v9">
                    <div className="container">
                        <div className="footer-content-v9 row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="widget widget-about">
                                    <img src="/static/images/miles-consulting.png" alt="" />
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

HomePage9.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Business Consulting">{page}</Layout>;
};

export default HomePage9;
