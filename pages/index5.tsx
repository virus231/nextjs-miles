import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { useInView } from 'react-intersection-observer';
import { RightMenu } from '../app/components/RightMenu';
import { useState } from 'react';
import { Burger } from '../app/components/Navigation/Burger';
import { NextLink } from '../app/components/BaseNextLink';


const HomePage5: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
    });
    const [open, setOpen] = useState<boolean>(false);


    return (
        <>
            <header className={`header-v5 ${inView ? 'sticky animated slideInDown' : ''}`}>
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <NextLink href="/" title="">
                                <img src="/static/images/logo_2.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="cate-lg">
                            <span>travel, photography and design</span>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <a className="active" href="#" title="">
                                        about
                                    </a>
                                    <ul>
                                        <li>
                                            <a
                                                href="about-agency.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                About Agency
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="about-business.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                About Business
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="about-me.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                About Me
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        Portfolio
                                    </a>
                                    <ul>
                                        <li>
                                            <a
                                                href="14_portfolio_parallax.html"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Portfolio Parallax
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="15_portfolio_horizontal_scroll.html"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Portfolio Horizontol
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="16_portfolio_masonry.html"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Portfolio Masonary
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="17_portfolio_single_layout_1.html"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Portfolio Single Layout V1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="portfolio-single-layout-two.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Portfolio Single Layout V2
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="portfolio-single-layout-three.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Portfolio Single Layout V3
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        News
                                    </a>
                                    <ul>
                                        <li>
                                            <a
                                                href="blog-layout-one.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Blog V1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog-layout-two.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Blog V2
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog-single-layout1.html"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Blog Single V1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="blog-single-layout2.html"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Blog Single V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" title="">
                                        Contact
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="contact.tsx" className="animsition-link" data-animsition-out-class="fade-out" title="">
                                                Contact V1
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="contact-two.tsx"
                                                className="animsition-link"
                                                data-animsition-out-class="fade-out"
                                                title=""
                                            >
                                                Contact V2
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </nav>
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
                        <div className="search-hd">
                            <a href="#" title="">
                                Search <i className="lni lni-search-alt" />
                            </a>
                            <form className="search-form-field">
                                <input type="text" name="search" placeholder="Search Here..." />
                            </form>
                        </div>
                        <Burger setOpen={() => setOpen(!open)} 
                                className='desktop-hide mobile-show' 
                                />
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />

            <section className="main-banner-v5">
                <div className="container">
                    <div className="main-banner-content">
                        <div className="main-banner-txt wow fadeInLeft" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <h2>
                                I’m Justina Carmo I love <b>travel</b>, <span>photography</span> and <b>writting</b>
                            </h2>
                            <p>
                                Here is a place that i share my everything, travel, photography and designing. Read, write &amp; discuss
                                with me
                            </p>
                            <a href="#" title="">
                                <i className="lni lni-envelope" />
                                Subscribe
                            </a>
                        </div>
                        <div className="ban-img wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
                            <img src="/static/images/ban-img.png" alt="" />
                        </div>
                    </div>
                </div>
            </section>

            <div ref={ref}>
                <section className="main-content-v5">
                    <div className="container-fluid">
                        <div className="main-content-v5-sections">
                            <div className="container">
                                <div className="featured-posts-sec-v5">
                                    <h3 className="sc-title">Featured Posts</h3>
                                    <div className="featured-products-sec">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="featured-product">
                                                    <div className="featured-thumbnail">
                                                        <img src="/static/images/pic4.jpg" alt="" className="w-100" />
                                                    </div>
                                                    <div className="featured-info">
                                                        <span>travel</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Summer activities with happy feels
                                                            </a>
                                                        </h2>
                                                        <ul className="meta">
                                                            <li>
                                                                <i className="lni lni-comments" /> 25
                                                            </li>
                                                            <li>
                                                                <i className="lni lni-eye" /> 32.6K
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="featured-product">
                                                    <div className="featured-thumbnail">
                                                        <img src="/static/images/pic5.jpg" alt="" className="w-100" />
                                                    </div>
                                                    <div className="featured-info">
                                                        <span>design</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Color’s Stories
                                                            </a>
                                                        </h2>
                                                        <ul className="meta">
                                                            <li>
                                                                <i className="lni lni-comments" /> 4
                                                            </li>
                                                            <li>
                                                                <i className="lni lni-eye" /> 7.2K
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4 col-md-4 col-sm-6">
                                                <div className="featured-product">
                                                    <div className="featured-thumbnail">
                                                        <img src="/static/images/pic6.jpg" alt="" className="w-100" />
                                                    </div>
                                                    <div className="featured-info">
                                                        <span>design</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                The windows know to say beside you
                                                            </a>
                                                        </h2>
                                                        <ul className="meta">
                                                            <li>
                                                                <i className="lni lni-comments" /> 18
                                                            </li>
                                                            <li>
                                                                <i className="lni lni-eye" /> 57.4K
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mile-posts-content">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="mile-pst-collection">
                                                <div className="mile-post">
                                                    <div className="mile-post-thumbnail">
                                                        <img src="/static/images/pic7.jpg" alt="" />
                                                    </div>
                                                    <div className="mile-post-info">
                                                        <span className="category">Lifestyle</span>
                                                        <span className="posted-on">July 26th, 2020</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Experience the life of Africa’s womens
                                                            </a>
                                                        </h2>
                                                        <a href="#" title="">
                                                            <i className="lni lni-share" /> Share
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mile-post">
                                                    <div className="mile-post-thumbnail">
                                                        <img src="/static/images/pic8.jpg" alt="" />
                                                    </div>
                                                    <div className="mile-post-info">
                                                        <span className="category">design</span>
                                                        <span className="posted-on">July 21st, 2020</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Pastel colors - The trend of 2020
                                                            </a>
                                                        </h2>
                                                        <a href="#" title="">
                                                            <i className="lni lni-share" /> Share
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mile-post v2">
                                                    <img src="/static/images/pic11.jpg" alt="" className="w-100" />
                                                    <div className="mile-post-info">
                                                        <span className="category">Lifestyle</span>
                                                        <span className="posted-on">June 17th, 2020</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Boy outfit
                                                            </a>
                                                        </h2>
                                                        <a href="#" title="">
                                                            <i className="lni lni-share" /> Share
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mile-post">
                                                    <div className="mile-post-thumbnail">
                                                        <img src="/static/images/pic9.jpg" alt="" />
                                                    </div>
                                                    <div className="mile-post-info">
                                                        <span className="category">travel</span>
                                                        <span className="posted-on">May 22nd, 2020</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Great experience in Phuket, Thailand 2019
                                                            </a>
                                                        </h2>
                                                        <a href="#" title="">
                                                            <i className="lni lni-share" /> Share
                                                        </a>
                                                    </div>
                                                </div>
                                                <div className="mile-post v2">
                                                    <img src="/static/images/pic12.jpg" alt="" className="w-100" />
                                                    <div className="mile-post-info-v2">
                                                        <h2>
                                                            EBC Backpacks Simple but <strong>Powerful</strong>
                                                        </h2>
                                                        <span>
                                                            Discount <strong>30% OFF</strong>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="mile-post">
                                                    <div className="mile-post-thumbnail">
                                                        <img src="/static/images/pic10.jpg" alt="" />
                                                    </div>
                                                    <div className="mile-post-info">
                                                        <span className="category">Lifestyle, design</span>
                                                        <span className="posted-on">April 8th, 2020</span>
                                                        <h2>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Pastel colors - The trend of 2020
                                                            </a>
                                                        </h2>
                                                        <a href="#" title="">
                                                            <i className="lni lni-share" /> Share
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mile-pagination">
                                                <nav aria-label="Page navigation example">
                                                    <ul className="pagination">
                                                        <li className="page-item active">
                                                            <a className="page-link" href="#">
                                                                1
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">
                                                                2
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">
                                                                3
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">
                                                                4
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <span>...</span>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#">
                                                                35
                                                            </a>
                                                        </li>
                                                        <li className="page-item">
                                                            <a className="page-link" href="#" aria-label="Next">
                                                                <i className="lni lni-chevron-right" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                        <div className="col-lg-4">
                                            <div className="mile-sidedar">
                                                <div className="widget widget-search">
                                                    <form>
                                                        <input type="text" name="search" placeholder="Whatcha looking for?" />
                                                        <button type="submit">
                                                            <i className="lni lni-search-alt" />
                                                        </button>
                                                    </form>
                                                </div>
                                                <div className="widget widget-follow">
                                                    <h3 className="widget-title">follow me</h3>
                                                    <ul className="wd-follow">
                                                        <li>
                                                            <a href="#" title="">
                                                                <i className="lni lni-twitter-filled" />
                                                                56K
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <i className="lni lni-facebook-filled" />
                                                                26K
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <i className="lni lni-instagram-original" />
                                                                66K
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <i className="lni lni-pinterest" />
                                                                4.6K
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <i className="lni lni-youtube" />
                                                                963
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="widget widget-popular-posts">
                                                    <h3 className="widget-title">Popular posts</h3>
                                                    <ul>
                                                        <li className="wd-post">
                                                            <span>1</span>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Pastel colors - The trend of 2020
                                                            </a>
                                                        </li>
                                                        <li className="wd-post">
                                                            <span>1</span>
                                                            <a href="blog-single-layout1.html" title="">
                                                                The windows know to say beside you
                                                            </a>
                                                        </li>
                                                        <li className="wd-post">
                                                            <span>1</span>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Inspiration #4
                                                            </a>
                                                        </li>
                                                        <li className="wd-post">
                                                            <span>1</span>
                                                            <a href="blog-single-layout1.html" title="">
                                                                Summer activities with happy feel
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="widget widget-categories">
                                                    <h3 className="widget-title">categories</h3>
                                                    <ul>
                                                        <li>
                                                            <a href="#" title="">
                                                                all{' '}
                                                            </a>
                                                            <span>(98)</span>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                Travel{' '}
                                                            </a>
                                                            <span>(54)</span>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                lifestyle{' '}
                                                            </a>
                                                            <span>(9)</span>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                design{' '}
                                                            </a>
                                                            <span>(34)</span>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                other{' '}
                                                            </a>
                                                            <span>(12)</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="widget widget-instagram">
                                                    <h3 className="widget-title">Instagram</h3>
                                                    <div className="insta-head">
                                                        <img src="/static/images/insta1.png" alt="" />
                                                        <div className="insta-info">
                                                            <h3>
                                                                <a href="#" title="">
                                                                    justina.amg
                                                                </a>
                                                            </h3>
                                                            <span>@justina.amg</span>
                                                        </div>
                                                        <a href="#" title="" className="follow">
                                                            Follow
                                                        </a>
                                                    </div>
                                                    <ul className="insta-count">
                                                        <li>
                                                            <strong>256</strong> posts
                                                        </li>
                                                        <li>
                                                            <strong>4.7K</strong> followers
                                                        </li>
                                                        <li>
                                                            <strong>1.2K</strong> followings
                                                        </li>
                                                    </ul>
                                                    <ul className="inst-imgs">
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="/static/images/inst1.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="/static/images/inst2.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="/static/images/inst3.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="/static/images/inst4.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="/static/images/inst5.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a href="#" title="">
                                                                <img src="/static/images/inst6.jpg" alt="" />
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="widget widget-advertisement">
                                                    <img src="/static/images/ad-img.jpg" alt="" className="w-100" />
                                                    <div className="wid-info">
                                                        <span>
                                                            5 days <br /> 4 nights
                                                        </span>
                                                        <h2>
                                                            <a href="#" title="">
                                                                Santorini Resort
                                                            </a>
                                                        </h2>
                                                        <span className="limited-offer">
                                                            Limited offer from <small>July 7th - Jult 12</small>
                                                        </span>
                                                        <strong>
                                                            Best price: <span>$5000</span>
                                                        </strong>
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

                <footer className="footer-v5">
                    <div className="container">
                        <div className="mile-top-footer">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="widget widget-about">
                                        <h2>
                                            When I was young, I lived like an old woman, and when I've got old, I had to live like a young
                                            person
                                        </h2>
                                        <div className="wid-newslettter">
                                            <h4>Newsletter</h4>
                                            <form>
                                                <input type="text" name="email" placeholder="Enter email address..." />
                                                <button type="submit">
                                                    <i className="lni lni-envelope" /> Subscribe
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="widget widget-tags">
                                        <h3 className="widget-title">popular tags</h3>
                                        <ul>
                                            <li>
                                                <a href="#" title="">
                                                    #wordpress{' '}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    #theme
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    #psd
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    #idea
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    #inspiration{' '}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    #trending{' '}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    #lifestyle{' '}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    #design{' '}
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div className="widget widget-contact">
                                        <h3 className="widget-title">get in touch</h3>
                                        <h2>
                                            116 Fairground Rd, FL 32904, USA{' '}
                                            <a href="mailto:example@example.com" title="">
                                                hello@justina.com
                                            </a>
                                        </h2>
                                        <ul>
                                            <li>
                                                <a href="about-business.tsx" title="">
                                                    About
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    Travel
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    Lifestyle
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#" title="">
                                                    Design
                                                </a>
                                            </li>
                                            <li>
                                                <a href="contact.tsx" title="">
                                                    Contact
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mile-bottom-footer">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="btm-copy">
                                        <img src="/static/images/logo_2.png" alt="" />
                                        <p>© 2020. All Rights Reserved</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
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
                </footer>
            </div>


        </>
    );
};

HomePage5.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home Blogger">{page}</Layout>;
};

export default HomePage5;
