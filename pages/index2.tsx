import { NextLink } from '../app/components/BaseNextLink';
import { Layout } from '../app/components/Layout';
import { NextPageWithLayout } from './_app';
import { useRef, useState } from 'react';
import Carousel from '../app/components/carousel';
import { carouselsExample } from '.';
import { Controller, Scene } from 'react-scrollmagic';
import { RightMenu } from '../app/components/RightMenu';
import { Burger } from '../app/components/Navigation/Burger';
import { Tween, Timeline } from 'react-gsap';
import { useInView } from 'react-intersection-observer';

const HomePage2: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const carouselRef = useRef<Carousel | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const carouselSettings = {
        slidesToShow: 1,
        centerMode: false,
        arrow: false,
        centerPadding: '20px',
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            },
            {
                breakpoint: 480,
                settings: { slidesToShow: 1, centerPadding: '0' }
            }
        ]
    };

    return (
        <>
            <header className={`v2 ${inView ? 'sticky animated slideInDown' : ''}`}>
                <div className="container-fluid">
                    <div className="header-content">
                        <div className="logo">
                            <NextLink href="/" title="logo">
                                <img src="/static/images/logo_13.png" alt="" />
                            </NextLink>
                        </div>
                        <nav>
                            <ul>
                                <li className="active">
                                    <a className="active" href="#" title="" data-text="about">
                                        about
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="about-agency.tsx" title="" data-text="About Agency">
                                                About Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-business.tsx" title="" data-text="About Business">
                                                About Business
                                            </a>
                                        </li>
                                        <li>
                                            <a href="about-me.tsx" title="" data-text="About Me">
                                                About Me
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="" data-text="Portfolio">
                                        Portfolio
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="14_portfolio_parallax.html" title="" data-text="Portfolio Parallax">
                                                Portfolio Parallax
                                            </a>
                                        </li>
                                        <li>
                                            <a href="15_portfolio_horizontal_scroll.html" title="" data-text="Portfolio Horizontol">
                                                Portfolio Horizontol
                                            </a>
                                        </li>
                                        <li>
                                            <a href="16_portfolio_masonry.html" title="" data-text="Portfolio Masonary">
                                                Portfolio Masonary
                                            </a>
                                        </li>
                                        <li>
                                            <a href="17_portfolio_single_layout_1.html" title="" data-text="Portfolio Single Layout V1">
                                                Portfolio Single Layout V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-single-layout-two.tsx" title="" data-text="Portfolio Single Layout V2">
                                                Portfolio Single Layout V2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="portfolio-single-layout-three.tsx" title="" data-text="Portfolio Single Layout V3">
                                                Portfolio Single Layout V3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="" data-text="News">
                                        News
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="blog-layout-one.tsx" title="" data-text="Blog V2">
                                                Blog V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-layout-two.tsx" title="" data-text="Blog V2">
                                                Blog V2
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-single-layout1.html" title="" data-text="Blog Single V1">
                                                Blog Single V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-single-layout2.html" title="" data-text="Blog Single V2">
                                                Blog Single V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="" data-text="Contact">
                                        Contact
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="contact.tsx" title="" data-text="Contact V1">
                                                Contact V1
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact-two.tsx" title="" data-text="Contact V2">
                                                Contact V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
                        <Burger setOpen={() => setOpen(!open)} />

                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <div className="promo promo-studio-container">
                <Controller
                    globalSceneOptions={{
                        triggerHook: '0',
                    }}
                >
                    <Scene 
                        duration="15%"
                        triggerElement=".step-animate-nav"
                        triggerHook={0}
                    >
                        <div className="step-animate-nav"></div>
                    </Scene>
                    <div className="step-animate-nav-hidden"></div>
                    <div className="step-animate-opacity"></div>

                    <div className="promo-studio">
                        <Scene
                            duration="80%"
                            triggerElement=".promo-studio-container"
                            triggerHook={0}
                        >
                            <Tween
                                to={{ scale: '1.8', opacity: '0' }}
                                ease="easeNone"
                            >
                                <div className="promo-studio-bg"></div>
                            </Tween>
                        </Scene>
                        <Scene
                            duration="80%"
                            triggerElement=".promo-studio-container"
                            triggerHook={0}
                        >
                            <Tween
                                ease="easeNone"
                                from={{ top: '0%', left: '0%', opacity: '1' }}
                                to={{ top: '-23%', left: '-28%', scale: '1.8', opacity: '0' }}
                            >
                                <div className="promo-studio-man"></div>
                            </Tween>
                        </Scene>
                        <Scene
                            duration="80%"
                            triggerElement=".promo-studio-container"
                            triggerHook={0}
                        >
                            <Tween
                                to={{ y: '-100%', ease: 'easeNone' }}
                            >
                                <div className="promo-studio-content">
                                    <div className="vertical-text-left">Crafting Digital <span className="text-muted vertical-text-block">Studio</span></div>
                                    <div className="container">
                                        <div className="row wow fadeInUp">
                                            <div className="col-lg-6 col-md-6">
                                                <h1 className="title-studio">Say Hi!!<br /> from miles studio</h1>
                                            </div>
                                            <div className="col-lg-2 dis-none"></div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="banner-text wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
                                                    <h3>An innovative & technology partner of trend setting business.</h3>
                                                    <p>Create value and optimize the influence power of each product, we construct a creative thinking, a rational processes and meaningful experiences for every brands.</p>
                                                    <a href="#" title="">get started</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Tween>
                        </Scene>

                    </div>
                </Controller>
            </div>



            <div ref={ref}>
                <section className="main-banner-style2" style={{ display: 'none' }}>
                    <div className="fixed-bg bg2"></div>
                    <div className="ban-capz">
                        <h4>Crafting Digital</h4>
                        <span> Studio</span>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-md-6">
                                <div className="banner-head wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <h2>Say Hi!! from miles studio</h2>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6">
                                <div className="banner-text wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <h3>An innovative & technology partner of trend setting business.</h3>
                                    <p>Create value and optimize the influence power of each product, we construct a creative thinking, a rational processes and meaningful experiences for every brands.</p>
                                    <a href="#" title="">get started</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-us-v2 step-visibility section-about-studio">
                    <div className="step-about-animate"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="abt-nfo d-flex flex-wrap align-items-end">
                                    <div
                                        className="abt-img mask-solid wow fadeIn"
                                        data-wow-offset="30"
                                        data-wow-duration="0.2s"
                                        data-wow-delay=".3s"
                                    >
                                        <div
                                            className="mask wow slideInLeft"
                                            data-wow-offset="30"
                                            data-wow-duration="1.2s"
                                            data-wow-delay=".3s"
                                        ></div>
                                        <img src="/static/images/abt1.jpg" alt="" className="img-fluid" />
                                    </div>
                                    <div
                                        className="abt-info mask-solid wow fadeIn"
                                        data-wow-offset="30"
                                        data-wow-duration="0.2s"
                                        data-wow-delay=".3s"
                                    >
                                        <div
                                            className="mask wow slideInLeft"
                                            data-wow-offset="30"
                                            data-wow-duration="1.2s"
                                            data-wow-delay=".3s"
                                        ></div>
                                        <h3> Jimmy Grace Desmond</h3>
                                        <span>CEO & Founder</span>
                                        <img
                                            className="wow zoomIn"
                                            data-wow-duration="1000ms"
                                            data-wow-delay="0ms"
                                            src="/static/images/sign.png"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="abot-text wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <h2>who we are?</h2>
                                    <p>
                                        Founded in 2007, Miles is specializing in providing innovative services such as website design, brand
                                        identity and marketing
                                    </p>
                                    <a href="about-agency.tsx" title="" className="link2">
                                        learn more
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="abt-v3-sec">
                    <div className="container">
                        <div className="abt-v3-content d-flex flex-wrap align-items-center">
                            <div className="abt-v-text wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h3>Caelie Kyle & Collin Kenelm</h3>
                                <span>Executive Leader</span>
                            </div>
                            <div className="abt-v-img mask-solid wow fadeIn" data-wow-offset="30" data-wow-duration="0.2s" data-wow-delay=".3s">
                                <div className="mask wow slideInLeft" data-wow-offset="30" data-wow-duration="1.2s" data-wow-delay=".3s"></div>
                                <img src="/static/images/abt2.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="what-we-do-v2">
                    <div className="container">
                        <div className="section-title-v2 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <h2>what we do?</h2>
                            <p>
                                We have experience in <span>implementing projects</span> for many large <br /> domestic and foreign
                                corporations, enterprises in many elds such as nance, banking, F&B, education, communication.
                            </p>
                        </div>
                        <div className="what-we-do-content">
                            <div className="row">
                                <div className="col-lg-4 col-md-4">
                                    <div
                                        className="wed-img mask-solid wow fadeIn"
                                        data-wow-offset="30"
                                        data-wow-duration="0.2s"
                                        data-wow-delay=".3s"
                                    >
                                        <div
                                            className="mask wow slideInLeft"
                                            data-wow-offset="30"
                                            data-wow-duration="1.2s"
                                            data-wow-delay=".3s"
                                        ></div>
                                        <img src="/static/images/abt3.png" alt="" className="img-fluid" />
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-8">
                                    <div className="mile-sz">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div
                                                    className="sz-list mask-solid wow fadeIn"
                                                    data-wow-offset="30"
                                                    data-wow-duration="0.2s"
                                                    data-wow-delay=".3s"
                                                >
                                                    <div
                                                        className="mask wow slideInLeft"
                                                        data-wow-offset="30"
                                                        data-wow-duration="1.2s"
                                                        data-wow-delay=".3s"
                                                    ></div>
                                                    <h3>Logo & Identity</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Logo Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Business Card Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Stationery Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Letterhead Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Brouchers
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div
                                                    className="sz-list mask-solid wow fadeIn"
                                                    data-wow-offset="30"
                                                    data-wow-duration="0.2s"
                                                    data-wow-delay=".3s"
                                                >
                                                    <div
                                                        className="mask wow slideInLeft"
                                                        data-wow-offset="30"
                                                        data-wow-duration="1.2s"
                                                        data-wow-delay=".3s"
                                                    ></div>
                                                    <h3>Graphic Design</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Graphic Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Infographic
                                                            </a>{' '}
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                3D Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Photoshop Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Vector Design
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div
                                                    className="sz-list mask-solid wow fadeIn"
                                                    data-wow-offset="30"
                                                    data-wow-duration="0.2s"
                                                    data-wow-delay=".3s"
                                                >
                                                    <div
                                                        className="mask wow slideInLeft"
                                                        data-wow-offset="30"
                                                        data-wow-duration="1.2s"
                                                        data-wow-delay=".3s"
                                                    ></div>
                                                    <h3>Web Design</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Logo Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Business Card Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Stationery Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Letterhead Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Brouchers
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div
                                                    className="sz-list mask-solid wow fadeIn"
                                                    data-wow-offset="30"
                                                    data-wow-duration="0.2s"
                                                    data-wow-delay=".3s"
                                                >
                                                    <div
                                                        className="mask wow slideInLeft"
                                                        data-wow-offset="30"
                                                        data-wow-duration="1.2s"
                                                        data-wow-delay=".3s"
                                                    ></div>
                                                    <h3>Print Design</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Graphic Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Infographic
                                                            </a>{' '}
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                3D Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Photoshop Design
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Vector Design
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <a href="#" title="" className="link-btn" data-text="SEE MORE SERVICES">
                                            see more services
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="latest-projects-v2">
                    <div className="container">
                        <div className="section-title-v2 wow fadeInUp">
                            <h2>Latest projects</h2>
                            <p>Discover our Design Thinking and Creative Philosophy that we would like to deliver in each of our projects.</p>
                        </div>
                        <div className="projects-slider">
                            <Carousel ref={carouselRef} {...carouselSettings}>
                                {carouselsExample.map((item) => (
                                    <div key={item.id} className="project-slide">
                                        <div className="project-thumb">
                                            <img src="/static/images/project-thumb1.jpg" alt="" />
                                            <a href="#" title="" className="pls-btn">
                                                <i className="lni lni-plus"></i>
                                            </a>
                                        </div>
                                        <div className="project-info">
                                            <span>Print Design</span>
                                            <h2>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    Fashion Design Morgen
                                                </a>{' '}
                                            </h2>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </section>
                <section className="success-stories-section">
                    <div className="container">
                        <div className="mega-title v2">
                            <h2>success stories</h2>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                    <div className="stories-sec-v2">
                        <div className="testi-sec-v2">
                            <div
                                className="mile-slider-sec mask-solid wow fadeIn"
                                data-wow-offset="30"
                                data-wow-duration="0.2s"
                                data-wow-delay=".3s"
                            >
                                <div className="mask wow slideInLeft" data-wow-offset="30" data-wow-duration="1.2s" data-wow-delay=".3s"></div>
                                <div className="testi-slider-v2">
                                    <div className="testi-slide-v2">
                                        <img src="/static/images/th1.png" alt="" />
                                        <p>
                                            "Miles Studio was the best investment I ever made. It's all good. We've used Miles Studio for the
                                            last five years. Miles Studio did exactly what you said it does."
                                        </p>
                                        <h3>Eldon G.</h3>
                                        <span>
                                            Co-Founder at{' '}
                                            <a href="#" title="">
                                                Goggle Inc.
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="vid-sec">
                            <div className="container">
                                <div className="video-sec wow zoomIn">
                                    <img src="/static/images/vid-img.jpg" alt="" />
                                    <a href="#" title="" className="play-btnn">
                                        <img src="/static/images/play-btn.png" alt="" />
                                    </a>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="partners-sec-v2">
                    <div className="container">
                        <div className="section-title-v2 w-100">
                            <h2>loved from partners</h2>
                        </div>
                        <div className="partner-row1">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <p>
                                        Over the past ten years, We've been fortunate to work with and for people from some amazing
                                        organizations. We’re also as featured top brands.
                                    </p>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div className="mile-quote wow fadeInUp">
                                        <p>“Miles brings thier infectious enthusiasm and creativity to everything they work on.”</p>
                                        <h4>
                                            — James Theo, CEO at <span>GSKM Tech.</span>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                            <ul className="pt-list">
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt1.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt2.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt3.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt4.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt5.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt6.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt7.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt8.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt9.png" alt="" />
                                    </a>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        <img src="/static/images/ptt10.png" alt="" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section className="blog-v2-section">
                    <div className="container">
                        <div className="mega-title">
                            <h2>our insights</h2>
                        </div>
                    </div>
                    <div className="custom-container">
                        <div className="blog-v2-items">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="blog-v2-item wow fadeInUp"
                                        data-wow-offset="30"
                                        data-wow-duration="1000ms"
                                        data-wow-delay=".1s"
                                    >
                                        <div className="blog-v2-thumbnail">
                                            <img src="/static/images/blog1.jpg" alt="" className="w-100" />
                                            <a href="#" title="" className="pls-btn">
                                                <i className="lni lni-plus"></i>
                                            </a>
                                        </div>
                                        <div className="blog-v2-info">
                                            <h2>
                                                <a href="blog-single-layout1.html" title="">
                                                    10 Pinterest Accounts to Follow About Design
                                                </a>
                                            </h2>
                                            <ul className="meta">
                                                <li>
                                                    <a href="#" title="" className="category">
                                                        Branding
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        January 26, 2019
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="blog-v2-item active-center wow fadeInUp"
                                        data-wow-offset="30"
                                        data-wow-duration="1000ms"
                                        data-wow-delay=".2s"
                                    >
                                        <div className="blog-v2-thumbnail">
                                            <img src="/static/images/blog2.jpg" alt="" className="w-100" />
                                            <a href="#" title="" className="pls-btn">
                                                <i className="lni lni-plus"></i>
                                            </a>
                                        </div>
                                        <div className="blog-v2-info">
                                            <h2>
                                                <a href="blog-single-layout1.html" title="">
                                                    5 Cliches About Design You Should Avoid
                                                </a>
                                            </h2>
                                            <ul className="meta">
                                                <li>
                                                    <a href="#" title="" className="category">
                                                        UX/UI Design
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        September 24, 2018
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="blog-v2-item wow fadeInUp"
                                        data-wow-offset="180"
                                        data-wow-duration="1000ms"
                                        data-wow-delay=".4s"
                                    >
                                        <div className="blog-v2-thumbnail">
                                            <img src="/static/images/blog3.jpg" alt="" className="w-100" />
                                            <a href="#" title="" className="pls-btn">
                                                <i className="lni lni-plus"></i>
                                            </a>
                                        </div>
                                        <div className="blog-v2-info">
                                            <h2>
                                                <a href="blog-single-layout1.html" title="">
                                                    10 Compelling Reasons Why You Need Design
                                                </a>
                                            </h2>
                                            <ul className="meta">
                                                <li>
                                                    <a href="#" title="" className="category">
                                                        Inspirations
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        September 22, 2018
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 text-center">
                                    <a href="blog-layout-one.tsx" title="" className="link3">
                                        see more articles
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact-v2-sec">
                    <div className="container">
                        <div
                            className="contact-v2-content text-center mask-solid wow fadeIn"
                            data-wow-offset="30"
                            data-wow-duration="0.2s"
                            data-wow-delay=".3s"
                        >
                            <div className="mask wow slideInLeft" data-wow-offset="30" data-wow-duration="1.2s" data-wow-delay=".3s"></div>
                            <h2>we always interested in hearing about projects & opportunities</h2>
                            <p>
                                Let's grab a coffee or jump on a Zoom chat. You can tell us about the problems you are trying to solve. I'd love
                                to listen and see if there's anything I can do to help.
                            </p>
                            <div className="contact-ddd">
                                <strong>(+706) 898-0751</strong>
                                <a href="mailto:example@example.com" title="">
                                    miles.studio@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="footer-v2">
                    <div className="row footer-content">
                        <div className="col-lg-6">
                            <div className="ft-widget-one">
                                <div className="ft-widget-one-content">
                                    <img src="/static/images/logo_13.png" alt="" className="ft-logo" />
                                    <div className="ft-newsletter">
                                        <span>Subscribe our newsletter for news update</span>
                                        <form>
                                            <input type="email" name="email" placeholder="Enter email address..." />
                                            <button type="submit">
                                                <i className="lni lni-plus"></i>
                                            </button>
                                        </form>
                                        <p className="copyright-text">
                                            © <strong>Miles</strong> 2020. All Rights Reserved
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="fl-widget-two">
                                <div className="fl-widget-two-content wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <span>Head Office</span>
                                    <h2>
                                        116 Fairground Rd. <br /> Melbourne, FL 32904, United States
                                    </h2>
                                    <ul className="ft-links-mile">
                                        <li>
                                            <a href="about-agency.tsx" title="">
                                                about us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="career.tsx" title="">
                                                jobs
                                            </a>
                                        </li>
                                        <li>
                                            <a href="contact.tsx" title="">
                                                contact us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="service-two.tsx" title="">
                                                services
                                            </a>
                                        </li>
                                        <li>
                                            <a href="blog-layout-one.tsx" title="">
                                                news
                                            </a>
                                        </li>
                                    </ul>
                                    <ul className="social-links v2">
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-facebook-square"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-behance"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" title="">
                                                <i className="fab fa-instagram"></i>
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

HomePage2.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home Studio">{page}</Layout>;
};

export default HomePage2;
