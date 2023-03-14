import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { MainNavigation } from '../app/components/Navigation/MainNavigation';
import { MainFooter } from '../app/components/Footer/MainFooter';
import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const MainPage: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    const { ref: countRef, inView: viewRef } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <>
            <MainNavigation view={inView} />

            <section className="main-banner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-txt text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <img src="/static/images/logo14.png" alt="Logo" />
                                <h2>Miles</h2>
                                <p>Create Portfolio HTML Template For Personal &amp; Agencies </p>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-12">
                            <div className="wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <img className="img-banner" src="/static/images/hero-main-2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div ref={ref}>


                <section className="clients-sec-v3 counter-miles">
                    <div className="container">
                        <ul className="counter-sec wow fadeInUp" id="counter" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <li>
                                <div className="count-dv flex-column align-items-baseline">
                                    <h2 ref={countRef} className="count">{viewRef ? <CountUp end={12} /> : '0'}</h2>

                                    <span className="span-count">Demos</span>
                                </div>
                            </li>
                            <li>
                                <div className="count-dv flex-column align-items-baseline">
                                    <h2 ref={countRef} className="count">{viewRef ? <CountUp end={37} /> : '0'}</h2>
                                    <span className="span-count">html files</span>
                                </div>
                            </li>
                            <li>
                                <div className="count-dv flex-column align-items-baseline">
                                    <h2 ref={countRef} className="count">{viewRef ? <CountUp end={160} /> : '0'}</h2>
                                    <span className="span-count">elements</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </section>

                <section className="examples-projects">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6 text-center">
                                <h2>
                                    13 Unique <br /> Demo Homepage
                                </h2>
                                <p className="mt-2">
                                    Gorgeus &amp; Adaptive pre-made demo templates help showcase your portfolio in the best look
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row justify-content-between flex-wrap examples-projects__block text-center">
                            <div className="col-12  col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index3.html">
                                        <img src="/static/images/freelancer.png" alt="Freelancer" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">freelancer</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12  col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index8.html">
                                        <img src="/static/images/business-agency.png" alt="Business Agency" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">agency</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index2.html">
                                        <img src="/static/images/studio.png" alt="Studio" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">studio</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index4.html">
                                        <img src="/static/images/developer.png" alt="Developer" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Developer</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index5.html">
                                        <img src="/static/images/blogger.png" alt="Blogger" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">blogger</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index7.html">
                                        <img src="/static/images/coach.png" alt="Coach" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">coach</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index6.html">
                                        <img src="/static/images/business-startup.png" alt="Business Startup" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Business Startup</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index8.html">
                                        <img src="/static/images/marketing-agency.png" alt="Marketing Agency" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Marketing Agency</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index9.html">
                                        <img src="/static/images/business-consulting.png" alt="Business Consulting" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Business Consulting</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index10.html">
                                        <img src="/static/images/creative-agency.png" alt="Creative Agency" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Creative Agency</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index11.html">
                                        <img src="/static/images/creative-agency2.png" alt="Creative Agency 2" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Creative Agency 2</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index12.html">
                                        <img src="/static/images/business-startup.png" alt="Full screen parallax 1" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Full screen parallax 1</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <div className="pb-5">
                                    <a href="index13.html">
                                        <img src="/static/images/innovation.png" alt="Full screen parallax 2" />
                                        <h4 className="text-uppercase mt-5 text-black font-xl">Full screen parallax 2</h4>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="portfolio">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6 text-center">
                                <h2>
                                    Beautiful &amp; Versatile <br /> Portfolio
                                </h2>
                                <p className="mt-2">
                                    With many layouts as carousel, masonry, parallax, you can easy to custom your portfolio items and showcase
                                    it like the way that you want
                                </p>
                            </div>
                        </div>
                        <div className="row my-5 py-5">
                            <div className="col-12 col-lg-4">
                                <div className="d-flex flex-column align-items-center">
                                    <img src="/static/images/carousel-icon.png" alt="" />
                                    <p className="text-black">Carousel</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="d-flex flex-column my-2 my-lg-0 align-items-center">
                                    <img src="/static/images/masonry.png" alt="" />
                                    <p className="text-black">Masonry</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4">
                                <div className="d-flex flex-column align-items-center">
                                    <img src="/static/images/parallax.png" alt="" />
                                    <p className="text-black">Parallax</p>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center text-center">
                            <div className="col-12 col-md-12 col-lg-12 wow fadeInUp" data-wow-duration="2000ms" data-wow-delay="0ms">
                                <img className="items" src="/static/images/items-3.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="blogging">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6 text-center">
                                <h2>Professional Blogging</h2>
                                <p className="mt-4 mb-5">
                                    Multiple way to express your through via format. Show your post in different way by using blog layout
                                </p>
                            </div>
                        </div>
                        <div className="row grid-img">
                            <div className="d-none d-xl-block col-12 col-lg-9 col-xl-9">
                                <img className="big-img" src="/static/images/blog-1.png" alt="Blog" />
                            </div>
                            <div className="col-12 col-lg-12 col-xl-3">
                                <div className="grid-col-2">
                                    <img className="mb-5" src="/static/images/blog-2.png" alt="" />
                                    <img src="/static/images/blog-3.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="pre-made">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12 col-lg-6 text-center">
                                <h2>Pre-made Pages, Layouts &amp; UI Elements</h2>
                                <p className="mt-4 mb-5">
                                    Detailed pages increase your efficiency and help you tell your story or promote your services
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid overflow-hidden px-0">
                        <div className="row grid-img justify-content-end">
                            <div className="col-7 mb-5">
                                <img className="solo-img" src="/static/images/pre-made-1.png" alt="" />
                            </div>
                        </div>
                        <div className="row justify-content-end">
                            <div className="col-7 mb-5">
                                <img className="solo-img" src="/static/images/pre-made-2.png" alt="" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 d-none d-xl-block col-xl-3 ">
                                <img className="sm-img" src="/static/images/pre-made-3.png" alt="" />
                            </div>
                            <div className="col-4 col-lg-12 text-center col-xl-4">
                                <img src="/static/images/pre-made-4.png" alt="" />
                            </div>
                            <div className="col-3 d-none d-xl-block col-xl-3">
                                <img className="md-img d-inline-block" src="/static/images/pre-made-5.png" alt="" />
                            </div>
                        </div>
                    </div>
                </section>

                <MainFooter />
            </div>

        </>
    );
};

MainPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default MainPage;
