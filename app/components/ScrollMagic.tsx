import { useEffect, useState } from 'react';
import { Controller, Scene } from 'react-scrollmagic';
import ScrollMagic from 'scrollmagic';
import { Tween, Timeline } from 'react-gsap';
import { RightMenu } from './RightMenu';
import { Burger } from './Navigation/Burger';
import { NextLink } from './BaseNextLink';

const controller = new ScrollMagic.Controller();

export default function Scroll() {
    const [open, setOpen] = useState<boolean>(false);


    // useEffect(() => {

    //     new ScrollMagic.Scene({
    //         triggerElement: '.promo-studio-container',
    //         triggerHook: 0,
    //         duration: '80%',
    //     })
    //         .setTween('.promo-studio-bg', { scale: 1.8, ease: Linear.easeNone })
    //         // .addIndicators()
    //         .addTo(controller);

    //     new ScrollMagic.Scene({
    //         triggerElement: '.promo-studio-container',
    //         triggerHook: 0,
    //         duration: '80%',
    //     })
    //         .setTween('.promo-studio-man', {
    //             scale: 1.8,
    //             left: '-28%',
    //             top: '-23%',
    //             ease: Linear.easeNone,
    //         })
    //         // .addIndicators()
    //         .addTo(controller);

    //     new ScrollMagic.Scene({
    //         triggerElement: '.promo-studio-container',
    //         triggerHook: 0,
    //         duration: '80%',
    //     })
    //         .setTween('.promo-studio-content', { top: '-60%', ease: Linear.easeNone })
    //         // .addIndicators()
    //         .addTo(controller);

    //     new ScrollMagic.Scene({
    //         triggerElement: '.step-animate-nav',
    //         triggerHook: 0,
    //         duration: '15%',
    //     })
    //         .setTween('.nav-header-addition-container', {
    //             opacity: 0,
    //             ease: Linear.easeNone,
    //         })
    //         // .addIndicators()
    //         .addTo(controller);

    //     new ScrollMagic.Scene({
    //         triggerElement: '.step-animate-nav-hidden',
    //         triggerHook: 0,
    //         duration: '15%',
    //     })
    //         .setTween('.nav-header-addition-container', {
    //             visibility: 'hidden',
    //             ease: Linear.easeNone,
    //         })
    //         // .addIndicators()
    //         .addTo(controller);

    //     new ScrollMagic.Scene({
    //         triggerElement: '.step-animate-opacity',
    //         triggerHook: 0,
    //         duration: '30%',
    //     })
    //         .setTween('.promo-studio', { opacity: 0, ease: Linear.easeNone })
    //         // .addIndicators()
    //         .addTo(controller);

    //     new ScrollMagic.Scene({
    //         triggerElement: '.step-visibility',
    //         triggerHook: 0,
    //         duration: '10%',
    //     })
    //         .setTween('.promo-studio, .nav-header-addition-container', {
    //             visibility: 'hidden',
    //             ease: Linear.easeNone,
    //         })
    //         // .addIndicators()
    //         .addTo(controller);

    //     new ScrollMagic.Scene({
    //         triggerElement: '.step-about-animate',
    //         triggerHook: 0,
    //         duration: '1%',
    //     })
    //         .setTween('.about-animate', { top: 0, opacity: 1, ease: Linear.easeNone })
    //         // .addIndicators()
    //         .addTo(controller);
    // }, []);


    return (
        <>
            <header className="v2">
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

            <Controller>
                <div>
                    <Scene
                        triggerHook="onLeave"
                        duration={1000}
                        pin
                    >
                        {(progress: any) => (
                            <Timeline progress={progress} paused>
                                <div className="step-animate-nav"></div>
                                <div className="step-animate-nav-hidden"></div>
                                <div className="step-animate-opacity"></div>
                                <Tween
                                    from={{ opacity: 1 }}
                                    to={{ opacity: 0}}
                                    duration={30}
                                >
                                    <div className="promo-studio">
                                        <Tween
                                            to={{ scale: '1.8' }}
                                            ease="easeNone"
                                        >
                                            <div className="promo-studio-bg"></div>
                                        </Tween>
                                        <Tween
                                            ease="easeNone"
                                            duration={5}
                                            from={{ top: '0%', left: '0%', }}
                                            to={{ top: '-23%', left: '-28%', scale: '1.8' }}
                                        >
                                            <div className="promo-studio-man"></div>
                                        </Tween>
                                        <div className="promo-studio-content">
                                            <div className="vertical-text-left">Crafting Digital <span className="text-muted vertical-text-block">Studio</span></div>
                                            <div className="container">
                                                <div className="row wow fadeInUp">
                                                    <div className="col-lg-6 col-md-6">
                                                        <h1 className="title-studio">Say Hi!!<br /> from miles studio</h1>
                                                    </div>
                                                    <div className="col-lg-2 dis-none"></div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <Tween
                                                            duration={5}
                                                            to={{ y: '-150%' }}
                                                        >
                                                            <div className="banner-text wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="300ms">
                                                                <h3>An innovative & technology partner of trend setting business.</h3>
                                                                <p>Create value and optimize the influence power of each product, we construct a creative thinking, a rational processes and meaningful experiences for every brands.</p>
                                                                <a href="#" title="">get started</a>
                                                            </div>
                                                        </Tween>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </Tween>

                            </Timeline>

                        )}
                    </Scene>
                </div>
            </Controller>
            <div className="section" style={{
                height: '70vh',
                background: 'linear-gradient(160deg, #f47c66 0%,#e51906 100%)'
            }} />
            <section
                className="main-banner-style2"
                style={{
                    display: 'none'
                }}
            >
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
                                <p>
                                    Create value and optimize the influence power of each product, we construct a creative thinking, a
                                    rational processes and meaningful experiences for every brands.
                                </p>
                                <a href="#" title="">
                                    get started
                                </a>
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
        </>

    );
}