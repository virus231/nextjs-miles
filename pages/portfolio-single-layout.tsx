import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { carouselsExample } from './index';
import Carousel, { CarouselArrows, CarouselDots } from '../app/components/carousel';
import { useRef, useState } from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import { NextLink } from '../app/components/BaseNextLink';
import { RightMenu } from '../app/components/RightMenu';
import { Burger } from '../app/components/Navigation/Burger';


const tabItems = [
    {
        id: '1',
        title: 'strategy'
    },
    {
        id: '2',
        title: 'ui-ux'
    },
    {
        id: '3',
        title: 'testing'
    },
    {
        id: '4',
        title: 'showcase'
    },
];  

const PortfolioSingleLayoutOnePage: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);
    const carouselRef2 = useRef<Carousel | null>(null);
    const [key, setKey] = useState<string>('strategy');
    const [open, setOpen] = useState<boolean>(false);

    const carouselSettings = {
        slidesToShow: 4,
        dots: true,
        arrows: false,
        centerMode: false,
        ...CarouselDots({
            rounded: true,
            sx: { mt: '0px', color: '#f59e31' }
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
        slidesToShow: 1,
        dots: false,
        arrows: false,
        centerMode: false
    };


    const handlePrev = () => {
        carouselRef2.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef2.current?.slickNext();
    };

    return (
        <>
            <header className="pb">
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <NextLink href="/" title="" className="white-logo">
                                <img src="/static/images/logo.png" alt="" />
                            </NextLink>
                            <NextLink href="/" title="" className="dark-logo">
                                <img src="/static/images/logo2.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="mile-right ms-auto">
                            <Burger isText white setOpen={() => setOpen(!open)} />
                            
                            <a href="#" title="" className="btn-default white no-bg">
                                Let’s talk
                                <i className="lni lni-comments" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <div className="project-single-slider">
                <CarouselArrows
                    textLeftArrow="Previous"
                    textRightArrow="Next"
                    leftButtonProps={{
                        sx: {
                            fontSize: '14px',
                            color: '#000',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            // backgroundColor: '#fff',
                            border: '0',
                            width: 'auto',
                            height: '42px',
                            lineHeight: '42px',
                            top: '50%',
                            padding: '0 24px',
                            letterSpacing: '2 px',
                            borderRadius: '0',
                            transform: 'rotate(-90deg)',
                            '&:hover': {
                                boxShadow: 'inherit',
                                backgroundColor: '#f93',
                                color: '#fff'
                            }
                        }
                    }}
                    rightButtonProps={{
                        sx: {
                            fontSize: '14px',
                            color: '#000',
                            fontWeight: '700',
                            textTransform: 'uppercase',
                            // backgroundColor: '#fff',
                            border: '0',
                            width: 'auto',
                            height: '42px',
                            lineHeight: '42px',
                            top: '50%',
                            padding: '0 24px',
                            letterSpacing: '2 px',
                            borderRadius: '0',
                            transform: 'rotate(90deg)',
                            '&:hover': {
                                boxShadow: 'inherit',
                                backgroundColor: '#f93',
                                color: '#fff'
                            }
                        }
                    }}
                    onNext={handleNext}
                    topSpace={50}
                    onPrevious={handlePrev}
                    sx={{
                        zIndex: 9,
                        color: '#ccc'
                    }}
                >
                    <Carousel ref={carouselRef2} {...carouselSettings2}>
                        {carouselsExample.map((item) => (
                            <div key={item.id} className="project-single-slide">
                                <div className="pf-single-banner">
                                    <div className="container">
                                        <div
                                            className="pf-banner d-flex justify-content-center wow fadeInUp"
                                            data-wow-duration="1000ms"
                                            data-wow-delay="0ms"
                                        >
                                            <img src="/static/images/pf-banner.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="project-content-v1">
                                    <div className="container">
                                        <div className="row project-v1-info">
                                            <div className="col-lg-7">
                                                <div className="project-dt">
                                                    <h2>Byzano Finance Manage App</h2>
                                                    <div className="row">
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>client</h3>
                                                                <span>IBM Finance Center Global Inc.</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>team</h3>
                                                                <span>Daniel Tan - Designer</span>{' '}
                                                                <span>Naby Keita - Mobile Developer</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>services</h3>
                                                                <span>UI/UX, Branding</span>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-sm-6">
                                                            <div className="dd-tinfo">
                                                                <h3>date</h3>
                                                                <span>Feburary 25th, 2020</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-5">
                                                <div className="ppr-sldr wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                                    <p>
                                                        “Originally, creative &amp; with an innate understanding of their customer’s need.
                                                        The team at Miles are always a pleasure to work !”
                                                    </p>
                                                    <div className="pp-info">
                                                        <div className="pp-img">
                                                            <img src="/static/images/thumb1.png" alt="" />
                                                        </div>
                                                        <div className="pp-dt">
                                                            <h3>Enesto Valverde</h3>
                                                            <span>
                                                                Director of{' '}
                                                                <a href="#" title="">
                                                                    byzano.co
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            className="txt-content text-center wow fadeInUp"
                                            data-wow-duration="1000ms"
                                            data-wow-delay="0ms"
                                        >
                                            <p>
                                                Byzano nestled right into our wheelhouse. A dynamic co-working space attracting
                                                entrepreneurs, tinkerers, and creatives in the tech hub of Ann Arbor, Michigan, they wanted
                                                a lifestyle brand—a complete ecosystem of brand visuals and assets that could be worn,
                                                posted, shared.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </CarouselArrows>
            </div>

            <section className="challenge-sec">
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
                                    <strong>Miles Studio</strong> believes a team of creatives who are excited about unique ideas and help
                                    digital and fin-tech companies. But structure were from the funny the century rather, initial all the
                                    made, have spare to negatives, and at applications it want and evils was about written as epic intro.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row sl-sec">
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="zoom-img">
                                <img src="/static/images/sl-img1.jpg" alt="" className="w-100" />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-6">
                            <div className="zoom-img">
                                <img src="/static/images/sl-img2.jpg" alt="" className="w-100" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row op-row">
                        <div className="col-lg-6">
                            <div className="op-details wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <div className="mv-title">
                                    <span>our progress</span>
                                    <h2>Creating an unique visual system and strategy.</h2>
                                </div>
                                <p>
                                    We're a team of creatives who are excited about unique ideas and help digital and fin-tech companies.
                                    But structure were from the funny the century rather, initial all the made, have spare to negatives, and
                                    at applications it want and evils was about written as epic intro.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pp-tabs-sec wow zoomIn d-flex flex-column-reverse" data-wow-duration="1000ms" data-wow-delay="0ms">
                                {/* <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="strategy" role="tabpanel" aria-labelledby="strategy-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img1.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="ui-ux" role="tabpanel" aria-labelledby="ui-ux-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img2.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="testing" role="tabpanel" aria-labelledby="testing-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img3.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="showcase" role="tabpanel" aria-labelledby="showcase-tab">
                                        <div className="vl-img">
                                            <img src="/static/images/vl-img4.png" alt="" />
                                        </div>
                                    </div>
                                </div> */}
                                {/* <ul className="nav nav-tabs" id="myTab" role="tablist"> */}
                                    <Tabs  activeKey={key} onSelect={(k) => setKey(k || '')} id="myTab">
                                        {tabItems.map((item: { id: string; title: string }) => {
                                            return (
                                                <Tab as="div" key={`tab-${item.title}`} className="nav-item" eventKey={item.title} title={item.title.toUpperCase()}>
                                                    <div className="tab-content" id="myTabContent">
                                                        <div className="tab-pane fade show active" 
                                                            id={item.title.toLowerCase()} 
                                                            role="tabpanel" 
                                                            aria-labelledby={`${item.title.toLowerCase()}-tab`}>
                                                            <div className="vl-img">
                                                                <img src={`/static/images/vl-img${item.id}.png`} alt="" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Tab>
                                            );
                                        })}
                                    </Tabs>
                                    {/* <li className="nav-item">
                                        <a
                                            className="nav-link active"
                                            id="strategy-tab"
                                            data-bs-toggle="tab"
                                            href="#strategy"
                                            role="tab"
                                            aria-controls="strategy-tab"
                                            aria-selected="true"
                                        >
                                            Strategy
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="ui-ux-tab"
                                            data-bs-toggle="tab"
                                            href="#ui-ux"
                                            role="tab"
                                            aria-controls="ui-ux-tab"
                                            aria-selected="false"
                                        >
                                            UI/UX
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="testing-tab"
                                            data-bs-toggle="tab"
                                            href="#testing"
                                            role="tab"
                                            aria-controls="testing-tab"
                                            aria-selected="false"
                                        >
                                            A/B Testing
                                        </a>
                                    </li>
                                    <li className="nav-item">
                                        <a
                                            className="nav-link"
                                            id="showcase-tab"
                                            data-bs-toggle="tab"
                                            href="#showcase"
                                            role="tab"
                                            aria-controls="showcase"
                                            aria-selected="false"
                                        >
                                            Showcase
                                        </a>
                                    </li> */}
                                {/* </ul> */}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="showcase-sec">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7">
                            <div className="mv-title">
                                <span>showcase</span>
                                <h2>
                                    Best solution <br /> choiced
                                </h2>
                            </div>
                        </div>
                        <div className="col-md-5">
                            <p>
                                Throughout at pretty slid fresh decided go to gloomy excuse partiality let of the such of perhaps at road,
                                succeeded asked an embarrassed.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row showcase-slider">
                        <Carousel ref={carouselRef} {...carouselSettings}>
                            {carouselsExample.map((item) => (
                                <div key={item.id} className="col-lg-3">
                                    <div className="screen-slide">
                                        <img src="/static/images/screen1.jpg" alt="" className="w-100" />
                                    </div>
                                </div>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            <section className="avl-sec">
                <div className="container">
                    <div className="avl-content wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <img src="/static/images/avl.png" alt="" />
                        <p>
                            After launch, brand interaction across all social channels increased. The brand went from having a few hundreds
                            of thousands of followers to over a million in just a few months.
                        </p>
                        <h3>available on</h3>
                        <ul className="download-links">
                            <li>
                                <a href="#" title="">
                                    <img src="/static/images/app1.png" alt="" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="">
                                    <img src="/static/images/app2.png" alt="" />
                                </a>
                            </li>
                        </ul>
                    </div>
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

            <FooterVariant1 />
        </>
    );
};

PortfolioSingleLayoutOnePage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Single Layout">{page}</Layout>;
};

export default PortfolioSingleLayoutOnePage;
