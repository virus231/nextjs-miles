import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import Carousel, { CarouselArrowIndex } from '../app/components/carousel';
import { carouselsExample } from './index';
import { useTheme } from '@mui/material/styles';
import { useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';


const ServiceThree: NextPageWithLayout = () => {
    const theme = useTheme();
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const { ref: countRef, inView: viewRef } = useInView({
        threshold: 0,
        triggerOnce: true,
    });
    const carouselRef = useRef<Carousel | null>(null);

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

    const [currentIndex, setCurrentIndex] = useState(theme.direction === 'rtl' ? carouselsExample.length - 1 : 0);

    const handlePrev = () => {
        carouselRef.current?.slickPrev();
    };

    const handleNext = () => {
        carouselRef.current?.slickNext();
    };
    return (
        <>
            <HeaderV1 isText view={inView} />

            <section className="service-page-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="sv-title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <span>our services</span>
                                <h2>
                                    Best solutions <br /> to help your business growth better
                                </h2>
                                <p>The difference lies in quality, reputation and responsibility of creation. </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="svss-img wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <img src="/static/images/svs1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div ref={ref}></div>
            <section className="services_03_content">
                <div className="container">
                    <div  className="svs-03-styles">
                        <div className="row fzt-row">
                            <div className="col-lg-3 col-md-6 col-sm-6">
                                <div className="our-fzt">
                                    <h3>
                                        <a href="#" title="">
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
                                        <a href="#" title="">
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
                                        <a href="#" title="">
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
                                        <a href="#" title="">
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
                        <div className="services-v9">
                            <div className="title-v9 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h2>Our Services</h2>
                            </div>
                            <div className="row services_v9">
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-v9">
                                        <span className="s-icon clr-1">
                                            <i className="lni lni-graduation" />
                                        </span>
                                        <h3>
                                            <a href="#" title="">
                                                Solicitory
                                            </a>
                                        </h3>
                                        <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                        <span className="s-category">case study</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-v9">
                                        <span className="s-icon clr-2">
                                            <i className="lni lni-empty-file" />
                                        </span>
                                        <h3>
                                            <a href="#" title="">
                                                Business Planning
                                            </a>
                                        </h3>
                                        <p>Podcasting operational change management inside of workflows to establish a framework.</p>
                                        <span className="s-category">case study</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-v9">
                                        <span className="s-icon clr-3">
                                            <i className="lni lni-crown" />
                                        </span>
                                        <h3>
                                            <a href="#" title="">
                                                Strategy
                                            </a>
                                        </h3>
                                        <p>
                                            Dynamically innovate resource-leveling customer service for state of the art customer service.
                                        </p>
                                        <span className="s-category">case study</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-v9">
                                        <span className="s-icon clr-4">
                                            <i className="lni lni-users" />
                                        </span>
                                        <h3>
                                            <a href="#" title="">
                                                Human Resources
                                            </a>
                                        </h3>
                                        <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                        <span className="s-category">case study</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="service-v9">
                                        <span className="s-icon clr-5">
                                            <i className="lni lni-rocket" />
                                        </span>
                                        <h3>
                                            <a href="#" title="">
                                                Startup
                                            </a>
                                        </h3>
                                        <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                        <span className="s-category">case study</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="sv-text-v9 wow zoomIn" data-wow-duration="1000ms" data-wow-delay="0ms">
                                        <h2 className="black-clr">
                                            “Our Avantage can help you with picking out the best people for your company.”
                                        </h2>
                                        <img src="/static/images/sign2.png" alt="" />
                                        <span>Founder at Misulting</span>
                                    </div>
                                </div>
                            </div>
                            <ul
                                className="counter-sec-v6 br-top pb-0 wow fadeInUp"
                                id="counter"
                                data-wow-duration="1000ms"
                                data-wow-delay="0ms"
                            >
                                <li>
                                    <div className="counter-cont">
                                        <h2 ref={countRef} className="clr2 count">{viewRef ? <CountUp end={100} /> : '0'}</h2>
                                        <span>
                                            satisfaction <br /> clients
                                        </span>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-cont">
                                        <h2 ref={countRef} className="clr2 count">{viewRef ? <CountUp end={150} /> : '0'}</h2>
                                        <span>event &amp; oline courses</span>
                                    </div>
                                </li>
                                <li>
                                    <div className="counter-cont">
                                        <h2 ref={countRef} className="clr2 count">{viewRef ? <CountUp end={3875} /> : '0'}</h2>
                                        <span>successful students on 60 countries</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="testimonial-sec v10 svs-page">
                <div className="container">
                    <div className="d-flex align-items-stretch justify-content-between">
                        <div className="title-v10">
                            <h2>Why Clients Love Us</h2>
                        </div>
                        <div>
                            <CarouselArrowIndex
                                sx={{
                                    position: 'initial'
                                }}
                                index={currentIndex}
                                total={carouselsExample.length}
                                onNext={handleNext}
                                onPrevious={handlePrev}
                            />
                        </div>
                    </div>
                    <div className="testimonial-slider">
                        <div className="row testimo-slider">
                            <Carousel ref={carouselRef} {...carouselSettings}>
                                {carouselsExample.map((item) => (
                                    <div key={item.id} className="col-lg-6">
                                        <div className="testimonial-slide">
                                            <p>
                                                “Originally, creative and with an innate understanding of their customer’s need. The team at
                                                Miles are always a pleasure to work with. Recommended.”
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
                    <div className="price-section-v">
                        <div className="title-v10 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <h2>Start With An Affordable </h2>
                        </div>
                        <div className="row prices-v10">
                            <div className="col-lg-4 col-md-6">
                                <div className="price-v10">
                                    <img src="/static/images/p-icon1.png" alt="" />
                                    <h4>Basic</h4>
                                    <span>Start for everyone</span>
                                    <h2>
                                        <sup>$</sup> 9.99 <span>/ month</span>
                                    </h2>
                                    <ul>
                                        <li>500 request</li>
                                        <li>unlimited projects</li>
                                    </ul>
                                    <a href="#" title="" className="btn-default-v10 v2">
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="price-v10">
                                    <div className="recommended">
                                        <span className="recommended">recommended</span>
                                    </div>
                                    <img src="/static/images/p-icon2.png" alt="" />
                                    <h4>premium</h4>
                                    <span>Start for team</span>
                                    <h2>
                                        <sup>$</sup> 29.99 <span>/ month</span>
                                    </h2>
                                    <ul>
                                        <li>2000 request</li>
                                        <li>unlimited projects</li>
                                        <li>free trial pro functions</li>
                                    </ul>
                                    <a href="#" title="" className="btn-default-v10 v2">
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="price-v10">
                                    <img src="/static/images/p-icon3.png" alt="" />
                                    <h4>ultimate</h4>
                                    <span>Start for enterprise</span>
                                    <h2>
                                        <sup>$</sup> 69.99 <span>/ month</span>
                                    </h2>
                                    <ul>
                                        <li>5000 request</li>
                                        <li>unlimited projects</li>
                                        <li>unlimited pro functions</li>
                                    </ul>
                                    <a href="#" title="" className="btn-default-v10 v2">
                                        Get Started Now
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center pl-btm">
                            <p>
                                You have a large team?{' '}
                                <a href="#" title="">
                                    Contact us
                                </a>{' '}
                                for information about more enterprise options
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <FooterVariant1 />
        </>
    );
};

ServiceThree.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Service Three">{page}</Layout>;
};

export default ServiceThree;
