import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { useInView } from 'react-intersection-observer';


const TeamPage = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return (
        <>
            <HeaderV1 isText view={inView} />

            <section className="team-page">
                <div className="container">
                    <div className="sv-title text-center wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                        <span>team member</span>
                        <h2>Join 4000+ talented members of Miles</h2>
                    </div>
                    <div className="row teams">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team1.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team2.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team3.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team4.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team5.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team6.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team7.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div ref={ref} className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team8.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team9.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="team-cl">
                                <img src="/static/images/team10.jpg" alt="" />
                                <div className="team-fig	">
                                    <h3>
                                        <a href="#" title="">
                                            Ellise Rohanson
                                        </a>
                                    </h3>
                                    <span>Co-Founder</span>
                                </div>
                                <ul className="social-ic">
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
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-6 full_width">
                            <div className="become-member wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <i className="lni lni-users" />
                                <h3>
                                    <a href="career.tsx" title="">
                                        Become Our Member
                                    </a>
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <FooterVariant1 />
        </>
    );
};

TeamPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Team">{page}</Layout>;
};

export default TeamPage;
