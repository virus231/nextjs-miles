import { useInView } from 'react-intersection-observer';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { Layout } from '../app/components/Layout';
import { HeaderV2 } from '../app/components/Navigation/HeaderV2';

const AboutMe = () => {
    const { ref, inView } = useInView({
        threshold: 0
    });

    return (
        <>
            <HeaderV2 logo2 view={inView} />
            <section className="about_me_sec">
                <div className="container">
                    <div className="about_me_content">
                        <div className="about_txt wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <span>
                                interaction &amp; visual <br /> product.
                            </span>
                            <h2>Hello! I’m Milles Raymond. Interactive Designer</h2>
                            <p>
                                I’m Miles Raymond, a freelance Interaction &amp; Visual Product Designer based in Toronto, Canada. “Design
                                is thinking made visual”.
                            </p>
                            <a href="#about-section" title="" className="arrow-down">
                                <svg id="more-arrows">
                                    <polygon className="arrow-top" points="37.6,27.9 1.8,1.3 3.3,0 37.6,25.3 71.9,0 73.7,1.3 " />
                                    <polygon className="arrow-middle" points="37.6,45.8 0.8,18.7 4.4,16.4 37.6,41.2 71.2,16.4 74.5,18.7 " />
                                </svg>
                            </a>
                        </div>
                        <div className="about_img wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <img src="/static/images/about_img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>
            <div ref={ref}>
                <section className="about_v1_sec" id="about-section">
                    <div className="container">
                        <div className="about_v1_content">
                            <p>
                                <span>Miles Raymond</span> is a designer from Toronto, Canada. <br />
                                He works in his little studio-home for galleries around the world. His work has been featured in the most
                                important galleries in the five continents. Also, Miles is one of the most recognizable painters in our
                                time.
                            </p>
                            <h4>Doing great since 2011 from Canada</h4>
                        </div>
                        <div className="resume_details">
                            <div className="resume_mile row">
                                <div className="col-lg-5">
                                    <h3 className="rs-heading">service</h3>
                                </div>
                                <div className="col-lg-7">
                                    <div className="rs_info">
                                        <p>
                                            It's time to bring it all together. Nothing is more rewarding for me than making great work for
                                            clients with meaningful missions.
                                        </p>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <ul className="lniks">
                                                    <li>Logo Design</li>
                                                    <li>Brand Guide</li>
                                                    <li>Package Design</li>
                                                    <li>Poster design</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="lniks">
                                                    <li>Flayer design</li>
                                                    <li>Advertising</li>
                                                    <li>Web design</li>
                                                    <li>web advertising</li>
                                                </ul>
                                            </div>
                                            <div className="col-md-4">
                                                <ul className="lniks">
                                                    <li>Icon design</li>
                                                    <li>Illustration</li>
                                                    <li>Photography</li>
                                                    <li>Seo</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume_mile row">
                                <div className="col-lg-5">
                                    <h3 className="rs-heading">edu &amp; career</h3>
                                </div>
                                <div className="col-lg-7">
                                    <div className="rs_info">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="edu-exp border-top">
                                                    <h3>Education</h3>
                                                    <ul>
                                                        <li>
                                                            <div className="edu-knw">
                                                                <h3>Graduated with Graphic Design at California of Art university, USA</h3>
                                                                <span>2007-2010</span>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="edu-knw">
                                                                <h3>Bachelor of Multi-Meida University in UK</h3>
                                                                <span>2011-2014</span>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="exp-div border-top">
                                                    <h3>Experience</h3>
                                                    <ul>
                                                        <li>
                                                            <h4>Art Director</h4>
                                                            <span>
                                                                <b className="red">Invision Inc</b>, 2018-Current
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4>Senior Visual Product</h4>
                                                            <span>
                                                                <b className="black">Apple</b>, 2016-2017
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4>Leader UI/UX Product Designer</h4>
                                                            <span>
                                                                <b className="green">Spotiy</b>, 2015-2016
                                                            </span>
                                                        </li>
                                                        <li>
                                                            <h4>Intership Graphic Designer</h4>
                                                            <span>
                                                                <b className="fb">Facebook</b>, 2012-2015
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="resume_mile row">
                                <div className="col-lg-5">
                                    <h3 className="rs-heading">my pride</h3>
                                </div>
                                <div className="col-lg-7">
                                    <div className="awrds-info">
                                        <p>
                                            It's always good to receive positive and constructive feedback for your work - from clients and
                                            moreover, from designers!
                                        </p>
                                        <ul>
                                            <li>
                                                <span className="year">2019</span>
                                                <img src="/static/images/awd4.png" alt="" />
                                                <h3>Featured Portfolio Websites</h3>
                                            </li>
                                            <li>
                                                <span className="year">2018</span>
                                                <img src="/static/images/awd5.png" alt="" />
                                                <h3>Top 10 Design</h3>
                                            </li>
                                            <li>
                                                <span className="year">2017</span>
                                                <img src="/static/images/awd6.png" alt="" />
                                                <h3>Website Inspiration</h3>
                                            </li>
                                            <li>
                                                <span className="year">2017</span>
                                                <img src="/static/images/awd7.png" alt="" />
                                                <h3>Creative Things</h3>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="testi_about_v1">
                    <div className="container">
                        <div className="testi-v-sec">
                            <div className="row">
                                <div className="col-lg-3">
                                    <div className="tv-col">
                                        <div className="tv-col-thumb">
                                            <img src="/static/images/rv1.png" alt="" />
                                        </div>
                                        <div className="tv-col-info">
                                            <h3>Enesto Valverde</h3>
                                            <span>
                                                Director of <i>byzano.co</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="testi-content">
                                        <p>
                                            “Originally, creative &amp; with an innate understand of their customer’s need. Miles Raymond
                                            are always a pleasure to work !”
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lets-sec">
                            <div className="lets-content text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h2>
                                    Let’s make something amazing together{' '}
                                    <strong>
                                        Start by{' '}
                                        <a href="contact.tsx" title="">
                                            saying hi
                                        </a>
                                    </strong>
                                </h2>
                            </div>
                        </div>
                    </div>
                </section>
                <FooterVariant1 />
            </div>
        </>
    );
};

AboutMe.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default AboutMe;
