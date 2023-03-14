import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { HeaderV2 } from '../app/components/Navigation/HeaderV2';
import { carouselsExample } from './index';
import Carousel, { CarouselArrows, CarouselDots } from '../app/components/carousel';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const AboutBusiness: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true
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

    return (
        <>
            <HeaderV2 white view={inView} />

            <section className="business-banner">
                <div className="container">
                    <div className="business-txt text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span>miles agency</span>
                        <h2>
                            We highly focus on <span>creative and innovative</span> solutions
                        </h2>
                        <p>Like any great agency, we are only as good as the result we deliver of our recent work </p>
                        <a href="#" title="" className="btn-default">
                            Learn more
                        </a>
                        <a href="https://www.youtube.com/watch?v=vw6QmjPpdy4" title="" className="view-btn yellow html5lightbox">
                            <span className="pl-btn">
                                <i className="lni lni-play" />
                            </span>
                            <span title="" className="vt">
                                view our story
                            </span>
                        </a>
                    </div>
                </div>
            </section>

            <section ref={ref} className="about-v9-content v2">
                <div className="container-fluid">
                    <div className="about-v9-row">
                        <div className="ban-img-v9">
                            <img src="/static/images/ban-img6.png" alt="" />
                        </div>
                        <div className="about-v9-txt wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>about us</span>
                            <h2>
                                <span>Optimized</span> For Your Business Better
                            </h2>
                            <p>
                                We help our client suceed by creating identities, digital experiences, and printmaterials that communicate
                                clearly, achieve marketing goals &amp; look fantastic Lorem uispum dolor sit amert tunoer poea opefse ceefo
                                goipully. Communicate clearly, achieve marketing goals &amp; look fantastic Lorem uispum dolor sit amert
                                tunoer poea opefse ceefo goipully.
                            </p>
                            <div className="wd-inz">
                                <span className="cinon">
                                    <i className="lni lni-phone" />
                                </span>
                                <div className="wl-info">
                                    <span>hotline 24/7</span>
                                    <h3>+65 - 3002 56 56 376</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="services-v9 v2">
                <div className="container">
                    <div className="title-v9 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span className="gray-color">what we can help</span>
                        <h2 className="black-clr">
                            <span className="clr-yeloow">Delivering End-to-End</span> Company Solutions Online
                        </h2>
                    </div>
                    <div className="row services_v9">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
                                <span className="s-icon clr-yeloow">
                                    <i className="lni lni-graduation" />
                                </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Solicitory
                                    </a>
                                </h3>
                                <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
                                <span className="s-icon clr-yeloow">
                                    <i className="lni lni-empty-file" />
                                </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Business Planning
                                    </a>
                                </h3>
                                <p>Podcasting operational change management inside of workflows to establish a framework.</p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
                                <span className="s-icon clr-yeloow">
                                    <i className="lni lni-crown" />
                                </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Strategy
                                    </a>
                                </h3>
                                <p>Dynamically innovate resource-leveling customer service for state of the art customer service.</p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
                                <span className="s-icon clr-yeloow">
                                    <i className="lni lni-users" />
                                </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Human Resources
                                    </a>
                                </h3>
                                <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="service-v9">
                                <span className="s-icon clr-yeloow">
                                    <i className="lni lni-rocket" />
                                </span>
                                <h3>
                                    <a href="service-one.tsx" title="">
                                        Startup
                                    </a>
                                </h3>
                                <p>Nanotechnology immersion along the information highway will close the loop on focusing solely</p>
                                <span className="s-category">case study</span>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="sv-text-v9">
                                <h2 className="black-clr">
                                    “Our Avantage can help you with picking out the best people for your company.”
                                </h2>
                                <img src="/static/images/sign2.png" alt="" />
                                <span>Founder at Misulting</span>
                            </div>
                        </div>
                    </div>
                    <ul className="counter-sec-v6 br-top pb-0 wow fadeInUp" id="counter" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <li>
                            <div className="counter-cont">
                                <h2 ref={countRef} className="count">
                                    {viewRef ? <CountUp end={100} /> : '0'}
                                </h2>
                                <span>
                                    satisfaction <br /> clients
                                </span>
                            </div>
                        </li>
                        <li>
                            <div className="counter-cont">
                                <h2 ref={countRef} className="count">
                                    {viewRef ? <CountUp end={158} /> : '0'}
                                </h2>
                                <span>event &amp; oline courses</span>
                            </div>
                        </li>
                        <li>
                            <div className="counter-cont">
                                <h2 ref={countRef} className="count">
                                    {viewRef ? <CountUp end={3875} /> : '0'}
                                </h2>
                                <span>successful students on 60 countries</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="why-us-v9 v2">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="why-txt-v9 v2">
                                <div className="title-v9">
                                    <span className="gray-color">why choose us</span>
                                    <h2 className="black-clr">
                                        <span className="clr-yeloow d-block">Different Value</span> Created Us
                                    </h2>
                                </div>
                                <ul>
                                    <li>
                                        <div className="us-svs">
                                            <span className="svs-icon">
                                                <i className="lni lni-money-protection clr-yeloow" />
                                            </span>
                                            <div className="svs-info">
                                                <h3 className="black-clr">Affordable Price</h3>
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
                                                <i className="lni lni-crown clr-yeloow" />
                                            </span>
                                            <div className="svs-info">
                                                <h3 className="black-clr">Top-notch Experts Consulting</h3>
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
                                                <i className="lni lni-comments-reply clr-yeloow" />
                                            </span>
                                            <div className="svs-info">
                                                <h3 className="black-clr">Dedicated Support 24/7</h3>
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
                            <div className="wy-img v2 wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <img src="/static/images/ban-img7.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="partners-v8-sec v2">
                <div className="container">
                    <div className="title-v9 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span className="gray-color">Our Partners</span>
                        <h2 className="black-clr">
                            <span className="clr-yeloow">Your Succesful,</span> Our Reputation
                        </h2>
                    </div>
                    <div className="pt-logos-v8 row">
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po2.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po3.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po4.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po5.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po6.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po7.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po8.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po9.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po10.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po11.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po12.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po13.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po14.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="pt-logo-v8">
                                <img src="/static/images/po15.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bz-certificate">
                <div className="container">
                    <div className="title-v9 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span className="gray-color">awards winning </span>
                        <h2 className="black-clr">
                            <span className="clr-yeloow">Rewards</span> For Our Effortless
                        </h2>
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

                    <div className="testimonial-sec v10 pb-0">
                        <div className="title-v9 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span className="gray-color">Testimonials </span>
                            <h2 className="black-clr">
                                <span className="clr-yeloow">The Trusted</span> From Clients For Miles
                            </h2>
                        </div>
                        <div className="testimonial-slider style2">
                            <div className="row testimo-slider">
                                <CarouselArrows
                                    icon="teenyicons:right-small-outline"
                                    onNext={handleNext}
                                    topSpace={75}
                                    onPrevious={handlePrev}
                                    sx={{
                                        zIndex: 9,
                                        color: '#ccc'
                                    }}
                                    leftButtonProps={{
                                        sx: {
                                            width: '3.5rem',
                                            height: '3.5rem',
                                            borderRadius: '10px',
                                            '&:hover': {
                                                svg: {
                                                    color: 'none'
                                                },
                                                borderRadius: '10px',
                                                backgroundColor: 'none'
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
                                                    color: 'none'
                                                },
                                                borderRadius: '10px',
                                                backgroundColor: 'none'
                                            }
                                        }
                                    }}
                                >
                                    <Carousel ref={carouselRef} {...carouselSettings}>
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
                                {/*          <div className="col-lg-6">*/}
                                {/*              <div className="testimonial-slide">*/}
                                {/*                  <p>*/}
                                {/*                      “I don’t know what else to say, this is something that you*/}
                                {/*                      haven’t seen before. Unique design, lightweight, and*/}
                                {/*                      outstanding support.”*/}
                                {/*                  </p>*/}
                                {/*                  <div className="thmb-row">*/}
                                {/*                      <div className="thmb-img">*/}
                                {/*                          <img src="/static/images/thumb2.png" alt="" />*/}
                                {/*                      </div>*/}
                                {/*                      <div className="thmb-info">*/}
                                {/*                          <h3>Jeans Grey</h3>*/}
                                {/*                          <span>*/}
                                {/*  CEO of <em>BraveBred</em>*/}
                                {/*</span>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*          </div>*/}
                                {/*          <div className="col-lg-6">*/}
                                {/*              <div className="testimonial-slide">*/}
                                {/*                  <p>*/}
                                {/*                      “Originally, creative and with an innate understanding of*/}
                                {/*                      their customer’s need. The team at Miles are always a*/}
                                {/*                      pleasure to work with. Recommended.”*/}
                                {/*                  </p>*/}
                                {/*                  <div className="thmb-row">*/}
                                {/*                      <div className="thmb-img">*/}
                                {/*                          <img src="/static/images/thumb1.png" alt="" />*/}
                                {/*                      </div>*/}
                                {/*                      <div className="thmb-info">*/}
                                {/*                          <h3>Bobby Hanesto</h3>*/}
                                {/*                          <span>*/}
                                {/*  Director of <em>Inivisionapp</em>*/}
                                {/*</span>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*          </div>*/}
                                {/*          <div className="col-lg-6">*/}
                                {/*              <div className="testimonial-slide">*/}
                                {/*                  <p>*/}
                                {/*                      “I don’t know what else to say, this is something that you*/}
                                {/*                      haven’t seen before. Unique design, lightweight, and*/}
                                {/*                      outstanding support.”*/}
                                {/*                  </p>*/}
                                {/*                  <div className="thmb-row">*/}
                                {/*                      <div className="thmb-img">*/}
                                {/*                          <img src="/static/images/thumb2.png" alt="" />*/}
                                {/*                      </div>*/}
                                {/*                      <div className="thmb-info">*/}
                                {/*                          <h3>Jeans Grey</h3>*/}
                                {/*                          <span>*/}
                                {/*  CEO of <em>BraveBred</em>*/}
                                {/*</span>*/}
                                {/*                      </div>*/}
                                {/*                  </div>*/}
                                {/*              </div>*/}
                                {/*          </div>*/}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterVariant1 />
        </>
    );
};

AboutBusiness.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="About Business">{page}</Layout>;
};

export default AboutBusiness;
