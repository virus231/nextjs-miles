import { navigationItems } from '../../config/menu-config';
import { NextLink } from '../BaseNextLink';
import styles from './Navigation.module.scss';
import classNames from 'classnames';

export const Links = () => {
    return (
        <>
            {navigationItems.map((item) => (
                <li key={item.name}>
                    <a className="black-clr">{item.name}</a>
                    <ul className="hover-menu">
                        {item.children.map((child) => (
                            <li key={child.name}>
                                <NextLink href={child.href}>{child.name}</NextLink>
                            </li>
                        ))}
                    </ul>
                </li>
            ))}
            {/* <li>
                <a className="black-clr">Elements</a>
                <ul
                    className="hover-menu"
                    style={{
                        width: '300px'
                    }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <li>
                                    <NextLink href="counter.html">Counter</NextLink>
                                </li>
                                <li>
                                    <NextLink href="blockquote.html">Blockquote</NextLink>
                                </li>
                                <li>
                                    <NextLink href="partners.html">Partners</NextLink>
                                </li>
                                <li>
                                    <NextLink href="pricing.html">Pricing</NextLink>
                                </li>
                                <li>
                                    <NextLink href="newsletter.html">Newsletter</NextLink>
                                </li>
                                <li>
                                    <NextLink href="contact.html">Contact</NextLink>
                                </li>
                                <li>
                                    <NextLink href="team.html">Team</NextLink>
                                </li>
                                <li>
                                    <NextLink href="awards.html">Awards</NextLink>
                                </li>
                                <li>
                                    <NextLink href="features.html">Features</NextLink>
                                </li>
                                <li>
                                    <NextLink href="events.html">Events</NextLink>
                                </li>
                            </div>
                            <div className="col-6">
                                <li>
                                    <NextLink href="blog.html">Blog</NextLink>
                                </li>
                                <li>
                                    <NextLink href="footer.html">Footer</NextLink>
                                </li>
                                <li>
                                    <NextLink href="portfolio.html">Portfolio</NextLink>
                                </li>
                                <li>
                                    <NextLink href="testimonials.html">Testimonials</NextLink>
                                </li>
                                <li>
                                    <NextLink href="header.html">Header</NextLink>
                                </li>
                                <li>
                                    <NextLink href="slider.html">Slider</NextLink>
                                </li>
                                <li>
                                    <NextLink href="hero.html">Hero</NextLink>
                                </li>
                                <li>
                                    <NextLink href="about-us.html">About Us</NextLink>
                                </li>
                                <li>
                                    <NextLink href="services.html">Services</NextLink>
                                </li>
                            </div>
                        </div>
                    </div>
                </ul>
            </li> */}
        </>
    );
};
