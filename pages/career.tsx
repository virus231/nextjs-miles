import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import dynamic from 'next/dynamic';
import fetch from 'isomorphic-unfetch';
import { useInView } from 'react-intersection-observer';


const Isotope = dynamic(
    () => import('../app/components/IsotopeLayoutCareer'),
    { ssr: false }
);

const items = [
    {
        id: 1,
        value: 'part_time'
    },
    {
        id: 2,
        value: 'full_time'
    },
    {
        id: 3,
        value: 'full_time'
    },
    {
        id: 4,
        value: 'internship'
    },
    {
        id: 5,
        value: 'full_time'
    },
    {
        id: 6,
        value: 'remote'
    },
];

const Career: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <>
            <HeaderV1 isText view={inView} />
            <section className="career-page">
                <div className="container">
                    <div className="sv-title v2 text-center">
                        <span>career</span>
                        <h2>Start your dream works with Miles</h2>
                    </div>
                    <Isotope items={items} />
                </div>
            </section>
            <footer>
                <div className="top-footer">
                    <div className="container">
                        <div className="footer-content">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="ft-text wow fadeInUp"
                                        data-wow-duration="1000ms"
                                        data-wow-delay="0ms"
                                    >
                                        <p>
                                            We are a close team of creative professionals based out of
                                            Savannah, Georgia. We are passionate about partnering &amp;
                                            organizations to provide exceptional solutions.
                                        </p>
                                        <div className="ft-form">
                                            <h4>Subscribe our newsletter for news update</h4>
                                            <form>
                                                <span className="input input--makiko">
                                                    <input
                                                        className="input__field input__field--makiko"
                                                        type="email"
                                                        id="input-16"
                                                        placeholder="Enter email address..."
                                                    />
                                                    <label className="input__label input__label--makiko">
                                                        <button
                                                            type="submit"
                                                            className="
                        input__label-content
                        input__label-content--makiko
                    "
                                                        >
                                                            subscribe <i className="lni lni-chevron-right" />
                                                        </button>
                                                    </label>
                                                </span>
                                            </form>
                                        </div>
                                        {/*ft-form end*/}
                                    </div>
                                    {/*ft-text end*/}
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <div
                                        className="get-touch-txt wow fadeInRight"
                                        data-wow-duration="1000ms"
                                        data-wow-delay="0ms"
                                    >
                                        <span>get in touch</span>
                                        <h3>
                                            116 Fairground Rd, FL 32904, USA
                                            <a href="#" title="">
                                                hello@miles.co
                                            </a>
                                        </h3>
                                        <ul>
                                            <li>
                                                <a href="26_about_me.html" title="">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="15_portfolio_horizontal_scroll.html" title="">
                                                    Works
                                                </a>
                                            </li>
                                            <li>
                                                <a href="30_contact_1.html" title="">
                                                    Contact
                                                </a>
                                            </li>
                                            <li>
                                                <a href="28_services_2.html" title="">
                                                    Services
                                                </a>
                                            </li>
                                            <li>
                                                <a href="blog-layout1.html" title="">
                                                    News
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/*get-touch-txt end*/}
                                </div>
                            </div>
                        </div>
                        {/*footer-content end*/}
                    </div>
                </div>
                {/*top-footer end*/}
                <div className="bottom-footer">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-6">
                                <div className="cp-mile">
                                    <img src="img/ft-logo.png" alt="" />
                                    <p>© 2020. All Rights Reserved</p>
                                </div>
                                {/*cp-mile end*/}
                            </div>
                            <div className="col-lg-6 col-md-6">
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
                                {/*social-links end*/}
                            </div>
                        </div>
                    </div>
                </div>
                {/*bottom-footer end*/}
            </footer>

        </>
    );
};

Career.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Career">{page}</Layout>;
};

export default Career;
