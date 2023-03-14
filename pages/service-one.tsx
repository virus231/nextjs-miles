import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { useInView } from 'react-intersection-observer';



const ServiceOne = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <>
            <HeaderV1 isText view={inView} />

            <section className="service_v1_page">
                <div className="container">
                    <div className="row service_v1_content">
                        <div className="col-lg-6">
                            <div className="sv-title wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <span>our services</span>
                                <h2>We create progress by design &amp; development craft digital experiences.</h2>
                                <p>The difference lies in quality, reputation and responsibility of creation. </p>
                            </div>
                            <div className="services_items">
                                <div className="service-item">
                                    <div className="service-thumb">
                                        <img src="/static/images/service1.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="service-info">
                                        <h3>Interaction</h3>
                                        <p>
                                            Reach out your clients better through website &amp; mobile app. Boots converastion rate for your
                                            business faster
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sk-col">
                                                    <h4>Skills</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Mobile App
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                UI/UX Website
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                WP Development
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                User Flow Mapping
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="sk-col pol">
                                                    <h4>Projects</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Arquito
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Lewis
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Amazon
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Flipkart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                eBay
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                iloveughly
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Spotify
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Apple
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                IBM
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-item">
                                    <div className="service-thumb">
                                        <img src="/static/images/service2.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="service-info">
                                        <h3>Marketing &amp; SEO</h3>
                                        <p>Impressive and communicate with your clients better throung animation &amp; motion video</p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sk-col">
                                                    <h4>Skills</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Copywriting
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Marketing Materials
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                SEO
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="sk-col pol">
                                                    <h4>Projects</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Coinbase
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Coinmarketcap
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Shutterstock
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="services_items style2">
                                <div className="service-item ms-auto">
                                    <div className="service-thumb">
                                        <img src="/static/images/service3.jpg" alt="" className="w-100" />
                                    </div>
                                    <div ref={ref} className="service-info">
                                        <h3>Branding</h3>
                                        <p>
                                            We build and activate brands throung cultural insigh and strategic vision to help business
                                            growth beter more and more
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sk-col">
                                                    <h4>Skills</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Brand Strategy
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Visual Identity
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Collateral
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Lettering
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="sk-col pol">
                                                    <h4>Projects</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Arquito
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Lewis
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Amazon
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Flipkart
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                eBay
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                iloveughly
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Spotify
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Apple
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                IBM
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="service-item ms-auto">
                                    <div className="service-thumb">
                                        <img src="/static/images/service4.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="service-info">
                                        <h3>Motion</h3>
                                        <p>
                                            Video &amp; Motion create the fast connect with eveyone, easy to interactive and help increase
                                            high converastion rate
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="sk-col">
                                                    <h4>Skills</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                Animation
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Photography
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Editor
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="sk-col pol">
                                                    <h4>Projects</h4>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                BBC Magazine,{' '}
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Reddot
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                500px
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="pricing-v10 service-v">
                <div className="container">
                    <div className="title-v10 text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <h2>Plan suit for everyone </h2>
                    </div>
                    <div className="row prices-v10">
                        <div className="col-lg-4 col-md-6">
                            <div className="price-v10">
                                <img src="/static/images/ion1.png" alt="" />
                                <h4>Personal</h4>
                                <h2>
                                    <sup>$</sup> 9.99 <span>/ month</span>
                                </h2>
                                <ul>
                                    <li>Custome Domains</li>
                                    <li>Sleep after 30 mins of activity</li>
                                </ul>
                                <a href="#" title="" className="btn-default-v10 v2">
                                    Get Started Now <i className="lni lni-chevron-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="price-v10">
                                <div className="recommended">
                                    <span className="recommended">popular</span>
                                </div>
                                <img src="/static/images/ion2.png" alt="" />
                                <h4>small team</h4>
                                <h2>
                                    <sup>$</sup> 29.99 <span>/ month</span>
                                </h2>
                                <ul>
                                    <li>never sleeps</li>
                                    <li>multiple workers for more powerful apps</li>
                                </ul>
                                <a href="#" title="" className="btn-default-v10 v2">
                                    Get Started Now <i className="lni lni-chevron-right" />
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="price-v10">
                                <img src="/static/images/ion3.png" alt="" />
                                <h4>enterprise</h4>
                                <h2>
                                    <sup>$</sup> 69.99 <span>/ month</span>
                                </h2>
                                <ul>
                                    <li>dedicated</li>
                                    <li>simple horizontal scalability</li>
                                </ul>
                                <a href="#" title="" className="btn-default-v10 v2">
                                    Get Started Now <i className="lni lni-chevron-right" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pl-btm">
                        <p>
                            Know more about pricing details.{' '}
                            <a href="#" title="">
                                Check it now
                            </a>{' '}
                        </p>
                    </div>
                </div>
            </section>

            <FooterVariant1 />
        </>
    );
};

ServiceOne.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Service One">{page}</Layout>;
};

export default ServiceOne;
