import classNames from 'classnames';
import { NextLink } from '../BaseNextLink';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className="footer-v6 v8">
            <div className="container">
                <div className="footer-content-v6">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="widget-abt wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h2>Boost your business up to high level</h2>
                                <h2>
                                    Start by
                                    <a href="#" title="">
                                        {' '}
                                        saying hi
                                    </a>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="widget-ft-services">
                                <h3>Services</h3>
                                <ul>
                                    <li>
                                        <a href="#" title="">
                                            SEO Marketing
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            SEO Services
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            Pay Per Click
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            SEO Audit
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            FB/GG Ads
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            Email Marketing
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="get-touch-txt mw-100 wow fadeInRight" data-wow-duration="1000ms" data-wow-delay="0ms">
                                <h5>contact</h5>
                                <h4>90 Fairground Rd, FL 3290, United States</h4>
                                <a href="#" title="">
                                    hello@milseo.co
                                </a>
                                <ul>
                                    <li>
                                        <a href="15_portfolio_horizontal_scroll.html" title="">
                                            Works
                                        </a>
                                    </li>
                                    <li>
                                        <a href="24_about_agency.html" title="">
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a href="blog-layout1.html" title="">
                                            News
                                        </a>
                                    </li>
                                    <li>
                                        <a href="30_contact_1.html" title="">
                                            Contact
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="mile-bottom-footer">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="btm-copy">
                                    <img src="/static/images/logo8.png" alt="" />
                                    <p>© 2020. All Rights Reserved</p>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <ul className="social-header">
                                    <li>
                                        <a href="#" title="">
                                            <i className="lni lni-twitter-original" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="lni lni-facebook-filled" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="lni lni-instagram-original" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="lni lni-pinterest" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" title="">
                                            <i className="lni lni-youtube" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
