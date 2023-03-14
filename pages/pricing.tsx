import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import Carousel, { CarouselArrows, CarouselDots } from '../app/components/carousel';
import { useRef } from 'react';
import { carouselsExample } from '.';
import { useInView } from 'react-intersection-observer';


const Pricing: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
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
            <HeaderV1 view={inView} />

            <section className="pricing-v10 clr-default">
                <div className="container">
                    <div className="title-v10 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span className="gray-color">Plan &amp; pricing</span>
                        <h2>Start With An Affordable </h2>
                    </div>
                    <ul className="tab-btns">
                        <li data-tab="monthly" className="tab-btn active-btn">
                            Billed monthly{' '}
                        </li>
                        <li data-tab="annually" className="tab-btn">
                            Billed annually
                        </li>
                    </ul>
                    <div className="tb-content">
                        <div className="tab-data active" id="monthly">
                            <div  className="row prices-v10">
                                <div className="col-lg-4 col-md-6">
                                    <div className="price-v10">
                                        <img src="/static/images/p-icon1.png" alt="" />
                                        <h4>Basic</h4>
                                        <span>Start for everyone</span>
                                        <h2 ref={ref}>
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
                        </div>
                        <div className="tab-data" id="annually">
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
            </section>
            <section className="testimonial-sec v10 clr-default">
                <div className="container">
                    <div className="title-v10 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span className="gray-color">testimonials</span>
                        <h2>Why Clients Love Us</h2>
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
            </section>
            <FooterVariant1 />
        </>
    );
};

Pricing.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Pricing">{page}</Layout>;
};

export default Pricing;
