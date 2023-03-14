import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { carouselsExample } from './index';
import Carousel from '../app/components/carousel';
import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';


const PortfolioHorizontalScroll: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);

    const carouselSettings = {
        slidesToShow: 4,
        centerMode: false,
        centerPadding: '20px',
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

    return (
        <>
            <HeaderV1 isText />

            <section className="portfolio-horizontol">
                <div className="pf-hr-slider row">
                    <Carousel ref={carouselRef} {...carouselSettings}>
                        {carouselsExample.map((item) => (
                            <div key={item.id} className="col-lg-3">
                                <div className="pf-hr-slide">
                                    <div className="pfr-thumb">
                                        <img src="/static/images/ph2.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="pfr-info">
                                        <h3>
                                            <a href="portfolio-single-layout-two.tsx" title="">
                                                Lewis Agency
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Carousel>
                </div>
                <h2 className="pagee-title">ui/ux</h2>
            </section>
        </>
    );
};

PortfolioHorizontalScroll.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Horizontal Scroll">{page}</Layout>;
};

export default PortfolioHorizontalScroll;
