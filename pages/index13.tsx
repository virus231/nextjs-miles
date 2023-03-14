import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { RightMenu } from '../app/components/RightMenu';
import { Burger } from '../app/components/Navigation/Burger';
import { useRef, useState } from 'react';
import Carousel, { CarouselArrows, CarouselDots } from '../app/components/carousel';
import { carouselsExample } from './index';
import ReactPageScroller from 'react-page-scroller';
import { NextLink } from '../app/components/BaseNextLink';


const labels = [
    {
        id: 0,
        label: 'about',
    },
    {
        id: 1,
        label: 'services',
    },
    {
        id: 2,
        label: 'why choose us',
    },
    {
        id: 3,
        label: 'cases',
    },
    {
        id: 4,
        label: 'clients',
    },
    {
        id: 5,
        label: 'contact',
    },
]

const HomePage13: NextPageWithLayout = () => {
    const [currentPage, setCurrentPage] = useState<number | null>(null);

    const [open, setOpen] = useState<boolean>(false);
    const carouselRef = useRef<Carousel | null>(null);

    const carouselSettings = {
        slidesToShow: 1,
        dots: true,
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

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    const carouselSettings2 = {
        slidesToShow: 2,
        dots: false,
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

    const handlePageChange = (value: number | null) => {
        setCurrentPage(value);
    };

    return (
        <>
            <header className="header-v12 v13 pb active">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <NextLink href="/" title="" className="light-logo">
                                <img src="/static/images/logo13.png" alt="" />
                            </NextLink>
                            <NextLink href="/" title="" className="dark-logo">
                                <img src="/static/images/logo14.png" alt="" />
                            </NextLink>
                        </div>
                        <Burger isText white={currentPage !== 0 ? false : true} setOpen={() => setOpen(!open)} />
                    </div>
                </div>
            </header>
            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <div className="list-menu active">
                <ul id="menuMain">
                    {labels.map(label => {
                        const active = label.id == currentPage;
                        return (
                            active ? (
                                <li data-menuanchor={`${label.label}`}
                                    className={active ? 'active' : ''}>
                                    <a style={{
                                        color: currentPage !== 0 ? '#000' : ''
                                    }} href={`#${label.label}`} title="">
                                        {label.label}
                                    </a>
                                </li>
                            ) : null
                        );
                    }

                    )}
                </ul>
            </div>

            <div id="pagepiling" className="dots-hidden">
                <ReactPageScroller
                    animationTimer={700}
                    renderAllPagesOnFirstRender
                    pageOnChange={handlePageChange}
                    customPageNumber={currentPage ?? 0}
                >
                    <div className="section pp-scrollable" id="about">
                        <div className="slide-container">
                            <h2 className="slide-number">1</h2>
                            <div className="fixed-bg bg-3" />
                            <div className="container" style={{
                                zIndex: 2
                            }}>
                                <div className="business-txt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                    <h2>Digital innovation companay that creates progress</h2>
                                    <p>Like any great agency, we are only as good as the result we deliver of our recent work </p>
                                    <a href="#" title="" className="btn-default v13">
                                        Get Started
                                    </a>
                                    <a href="https://www.youtube.com/watch?v=vw6QmjPpdy4" title="" className="view-btn html5lightbox">
                                        <span className="pl-btn">
                                            <i className="lni lni-play" />
                                        </span>
                                        <span className="vt">view our story</span>
                                    </a>
                                </div>
                                <ul className="bd-list wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="300ms">
                                    <li>
                                        <h3>branding identity</h3>
                                    </li>
                                    <li>
                                        <h3>UI/UX Interaction</h3>
                                    </li>
                                    <li>
                                        <h3>3d illustration &amp; animation</h3>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="section pp-scrollable" id="services">
                        <div className="slide-container">
                            <h2 className="slide-number">2</h2>
                            <div className="fixed-bg bg-gray" />
                            <div className="about-v4-sec v11 gray-bg">
                                <div className="container">
                                    <div className="about-v4-content">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="abt-list">
                                                    <div className="abt-content">
                                                        <h3>
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                Branding
                                                            </a>
                                                        </h3>
                                                        <p>Create digital products with unique ideas</p>
                                                        <a href="#" title="">
                                                            20 Projects
                                                        </a>
                                                        <span className="iconn">
                                                            <i className="lni lni-crown" />
                                                        </span>
                                                    </div>
                                                    <div className="abt-content">
                                                        <h3>
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                UI/UX Interaction
                                                            </a>
                                                        </h3>
                                                        <p>I develop front-end with coding super smooth</p>
                                                        <a href="#" title="">
                                                            165 Projects
                                                        </a>
                                                        <span className="iconn">
                                                            <i className="lni lni-layout" />
                                                        </span>
                                                    </div>
                                                    <div className="abt-content">
                                                        <h3>
                                                            <a href="17_portfolio_single_layout_1.html" title="">
                                                                Motion
                                                            </a>
                                                        </h3>
                                                        <p>Create digital products with unique ideas</p>
                                                        <a href="#" title="">
                                                            20 Projects
                                                        </a>
                                                        <span className="iconn">
                                                            <i className="lni lni-video" />
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="abt-col-text">
                                                    <h2>Smart solutions for your business</h2>
                                                    <h3>We know that good design mean that good business.</h3>
                                                    <p>
                                                        We help our client suceed by creating identities, digital experiences, and
                                                        printmaterials that communicate clearly, achieve marketing goals &amp; look fantastic
                                                        Lorem uispum dolor sit amert tunoer poea opefse ceefo goipully. Communicate clearly,
                                                        achieve marketing goals &amp; look fantastic Lorem uispum dolor sit amert tunoer poea
                                                        opefse ceefo goipully.
                                                    </p>
                                                    <a href="#" title="" className="btn-default v13">
                                                        Learn More
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section pp-scrollable" id="why-choose-us">
                        <div className="slide-container">
                            <h2 className="slide-number">3</h2>
                            <div className="fixed-bg bg-white" />
                            <div className="grow-business-v8">
                                <div className="container">
                                    <div className="grw-content-v8 m-0">
                                        <div className="row align-items-center">
                                            <div className="col-lg-5">
                                                <div className="gr-text">
                                                    <h2>Top reason for why choose miles</h2>
                                                    <div className="why-txt-v9">
                                                        <ul>
                                                            <li>
                                                                <div className="us-svs">
                                                                    <span className="svs-icon">
                                                                        <i className="lni lni-money-protection" />
                                                                    </span>
                                                                    <div className="svs-info">
                                                                        <h3>Affordable Price</h3>
                                                                        <p>
                                                                            Nanotechnology immersion along the information highway will close
                                                                            the loop on focusing solely
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
                                                                            Nanotechnology immersion along the information highway will close
                                                                            the loop on focusing solely
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
                                                                            Nanotechnology immersion along the information highway will close
                                                                            the loop on focusing solely
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-7">
                                                <div className="gw-img">
                                                    <img src="/static/images/gw-img3.png" alt="" />
                                                    <div className="gw-text">
                                                        <h1>25</h1>
                                                        <h2>
                                                            years <br /> of <br />
                                                            experience
                                                        </h2>
                                                        <h3>The Leading In Digital Marketing Industrial</h3>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section pp-scrollable" id="cases">
                        <div className="slide-container">
                            <h2 className="slide-number">4</h2>
                            <div className="fixed-bg bg-gray" />
                            <div className="task-section">
                                <div className="container">
                                    <div className="task-slider">
                                        <Carousel ref={carouselRef} {...carouselSettings}>
                                            {carouselsExample.map((item) => (
                                                <div key={item.id} className="task-slide">
                                                    <div className="row align-items-center">
                                                        <div className="col-lg-6">
                                                            <div className="tsk-text">
                                                                <h2>Taskly Dashboard Redesign</h2>
                                                                <span>Interaction</span>
                                                                <p>
                                                                    Lewis nestled right into our wheelhouse. A dynamic co-working space
                                                                    attracting entrepreneurs, tinkerers, and creatives in the tech hub of Ann
                                                                    Arbor, Michigan, they wanted a lifestyle brand—a complete ecosystem of brand
                                                                    visuals and assets.
                                                                </p>
                                                                <a
                                                                    href="17_portfolio_single_layout_1.html"
                                                                    title=""
                                                                    className="btn-default v13"
                                                                >
                                                                    View Project
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="tsk-img">
                                                                <img src="/static/images/tsk-img1.jpg" alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section pp-scrollable" id="clients">
                        <div className="slide-container">
                            <h2 className="slide-number">5</h2>
                            <div className="fixed-bg bg-white" />
                            <div className="testimonial-sec v10">
                                <div className="container">
                                    <div className="title-v10">
                                        <h2>See why clients love us</h2>
                                    </div>
                                    <div className="testimonial-slider">
                                        <div className="row testimo-slider">
                                            <CarouselArrows
                                                icon="teenyicons:right-small-outline"
                                                onNext={handleNext}
                                                topSpace={50}
                                                onPrevious={handlePrev}
                                                sx={{
                                                    zIndex: 9,
                                                    color: '#ccc'
                                                }}
                                            >
                                                <Carousel ref={carouselRef} {...carouselSettings2}>
                                                    {carouselsExample.map((item) => (
                                                        <div key={item.id} className="col-lg-6">
                                                            <div className="testimonial-slide">
                                                                <p>
                                                                    “Originally, creative and with an innate understanding of their customer’s
                                                                    need. The team at Miles are always a pleasure to work with. Recommended.”
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
                                    <div className="partners-section v10">
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
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="section pp-scrollable" id="contact">
                        <div className="slide-container">
                            <h2 className="slide-number">6</h2>
                            <div className="fixed-bg bg-gray" />
                            <div className="contact-pp-content">
                                <div className="container">
                                    <div className="pp-map">
                                        <iframe id="gmap_canvas" src="https://maps.google.com/maps?q=&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                                    </div>
                                    <div className="pp-text">
                                        <h2>Contact us for any further question</h2>
                                        <div className="row">
                                            <div className="col-lg-4 col-md-6">
                                                <div className="pp-col">
                                                    <div className="pp-head">
                                                        <h3>Contact Directly</h3>
                                                        <span>
                                                            <i className="lni lni-envelope" />
                                                        </span>
                                                    </div>
                                                    <div className="pp-content">
                                                        <span>
                                                            <a href="mailto:example@example.com" title="">
                                                                contact@milesstudio.com
                                                            </a>
                                                        </span>
                                                        <span>(+056) 83-458-868</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="pp-col">
                                                    <div className="pp-head">
                                                        <h3>our office</h3>
                                                        <span>
                                                            <i className="lni lni-map-marker" />
                                                        </span>
                                                    </div>
                                                    <div className="pp-content">
                                                        <span>962 Fifth Avenue Str, 3rd-Floor Trump Building, NY 10006, USA</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-6">
                                                <div className="pp-col">
                                                    <div className="pp-head">
                                                        <h3>work with us</h3>
                                                        <span>
                                                            <i className="lni lni-briefcase" />
                                                        </span>
                                                    </div>
                                                    <div className="pp-content">
                                                        <span>Send your CV/Resumer or Linkedin to: carrer@milesstuio.com</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </ReactPageScroller>

            </div>

            <ul className="social-vertical active v2">
                <li>
                    <a href="#" title="">
                        <i style={{
                            color: currentPage !== 0 ? 'black' : 'white'
                        }} className="fab fa-twitter" />
                    </a>
                </li>
                <li>
                    <a href="#" title="">
                        <i style={{
                            color: currentPage !== 0 ? 'black' : 'white'
                        }} className="fab fa-behance" />
                    </a>
                </li>
                <li>
                    <a href="#" title="">
                        <i style={{
                            color: currentPage !== 0 ? 'black' : 'white'
                        }} className="fab fa-instagram" />
                    </a>
                </li>
            </ul>
        </>
    );
};

HomePage13.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home Portfolio 2">{page}</Layout>;
};

export default HomePage13;
