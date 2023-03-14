import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import Carousel, { CarouselArrows } from '../app/components/carousel';
import { carouselsExample } from './index';
import { useRef, useState } from 'react';
import { Burger } from '../app/components/Navigation/Burger';
import { RightMenu } from '../app/components/RightMenu';
import { NextLink } from '../app/components/BaseNextLink';

const PortfolioSingleLayoutTwo: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const carouselSettings = {
        slidesToShow: 1,
        dots: false,
        arrows: false,
        centerMode: false
    };

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };

    return (
        <>
            <header className="pb vv2">
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <NextLink href="/" title="">
                                <img src="/static/images/logo2.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="mile-right ms-auto">
                            <Burger isText white className="black-on-mobile" setOpen={() => setOpen(!open)} />

                            <a href="#" title="" className="btn-default white no-bg">
                                Let’s talk
                                <i className="lni lni-comments" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />
            

            <section className="pf-single-layout-2">
                <div className="container-fluid p-0">
                    <div className="pft-slider">
                        <CarouselArrows
                            textLeftArrow="Previous"
                            textRightArrow="Next"
                            leftButtonProps={{
                                sx: {
                                    fontSize: '14px',
                                    color: '#000',
                                    fontWeight: '700',
                                    textTransform: 'uppercase',
                                    backgroundColor: '#fff',
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
                                    backgroundColor: '#fff',
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
                            <Carousel ref={carouselRef} {...carouselSettings}>
                                {carouselsExample.map((item) => (
                                    <div key={item.id} className="pft-slide">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="pft-details">
                                                    <div className="pft-txt">
                                                        <h2>Bamboo Soap</h2>
                                                        <p>A dynamic co-working space attracting entrepreneurs, tinkerers, and creatives</p>
                                                        <div className="pft-task">
                                                            <h3>task</h3>
                                                            <p>
                                                                Rebuild a unified visual system for the advertising agency, made of steel
                                                                which can change the world in a while.
                                                            </p>
                                                        </div>
                                                        <ul className="pp-list">
                                                            <li>
                                                                <h3>client</h3>
                                                                <span>P&amp;G Singapore Ltd</span>
                                                            </li>
                                                            <li>
                                                                <h3>category</h3>
                                                                <span>Branding, Motion</span>
                                                            </li>
                                                            <li>
                                                                <h3>site</h3>
                                                                <span>www.bamboosoap.com</span>
                                                            </li>
                                                        </ul>
                                                        <ul className="scl-links">
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
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="pft-img">
                                                    <img src="/static/images/pft3.jpg" alt="" className="w-100" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </CarouselArrows>
                    </div>
                </div>
            </section>
            <section className="contact-sec pf-single">
                <div className="container">
                    <div className="sec-title v2 text-center">
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
        </>
    );
};

PortfolioSingleLayoutTwo.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Single Layout Two">{page}</Layout>;
};

export default PortfolioSingleLayoutTwo;
