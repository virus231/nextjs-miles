import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { NextLink } from '../app/components/BaseNextLink';

const ComingSoon: NextPageWithLayout = () => {
    return (
        <>
            <header className="pb">
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <NextLink href="/" title="">
                                <img src="/static/images/logo2.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="mile-right ms-auto">
                            <a href="#" title="" className="btn-default white-bg box-shadow-none">
                                Let’s talk
                                <i className="lni lni-comments" />
                            </a>
                        </div>
                    </div>
                </div>
            </header>
            <section className="coming-soon-page">
                <div className="container">
                    <div className="cm-content">
                        <h2>Coming Soon</h2>
                        <img src="/static/images/cm-img.png" alt="" />
                        <h3>New site we be launched in:</h3>
                        <div className="time-counter" id="clockdiv">
                            <ul>
                                <li>
                                    <h2 className="days">20</h2>
                                    <span>Days</span>
                                </li>
                                <li>
                                    <h2 className="hours">09</h2>
                                    <span>Hours</span>
                                </li>
                                <li>
                                    <h2 className="minutes">59</h2>
                                    <span>Minutes</span>
                                </li>
                                <li>
                                    <h2 className="seconds">47</h2>
                                    <span>Seconds</span>
                                </li>
                            </ul>
                        </div>
                        <ul className="social-links">
                            <li>
                                <a href="#" title="">
                                    <i className="fab fa-facebook-square" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="">
                                    <i className="fab fa-twitter" />
                                </a>
                            </li>
                            <li>
                                <a href="#" title="">
                                    <i className="fab fa-behance" />
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
            </section>
        </>
    );
};

ComingSoon.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Coming Soon">{page}</Layout>;
};

export default ComingSoon;
