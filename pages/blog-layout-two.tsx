import { useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import Carousel, { CarouselDots } from '../app/components/carousel';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { carouselsExample } from './index';
import { NextPageWithLayout } from './_app';

const BlogLayoutTwo: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);

    const { ref, inView } = useInView({
        threshold: 0
    });

    const carouselSettings = {
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...CarouselDots({
            rounded: true,
            sx: { mt: '10px', color: '#f59e31' }
        })
    };

    return (
        <>
            <HeaderV1 isText view={inView} />
            <section className="page-content">
                <div className="container v-3">
                    <div className="featured-post-sec">
                        <div className="featured-post-slider">
                            <Carousel ref={carouselRef} {...carouselSettings}>
                                {carouselsExample.map((item) => (
                                    <div key={item.id} className="featured-post">
                                        <div className="row align-items-center">
                                            <div className="col-lg-6">
                                                <div className="featured-post-text">
                                                    <span>Featured Post</span>
                                                    <h2>Brief Guide into Social Media Marketing Trends 2020</h2>
                                                    <p>
                                                        These days, the Internet permeates every single facet of our lives on a daily basis.
                                                        Indeed, there is rarely a thing that anyone.
                                                    </p>
                                                    <a href="blog-single-layout2.html" title="" className="btn-default">
                                                        Continue Reading <i className="lni lni-chevron-right" />
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="vector-img">
                                                    <img src="/static/images/vector2.png" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>
                <div ref={ref}>
                    <div className="container">
                        <div className="lt-news">
                            <div className="blog-posts-v10 row">
                                <div className="col-12">
                                    <h3 className="pg-title">Latest News</h3>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="post-v10">
                                        <div className="post-thumb">
                                            <img src="/static/images/blog-post4.jpg" alt="" className="w-100" />
                                        </div>
                                        <div className="post-info">
                                            <span className="category">discuss</span>
                                            <h2>
                                                <a href="blog-single-layout2.html" title="">
                                                    5 Things That You Need To Knows About E-Commerce
                                                </a>
                                            </h2>
                                            <span className="posted-on">
                                                May 3rd, 2020, by{' '}
                                                <a href="#" title="">
                                                    Admin
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="post-v10">
                                        <div className="post-thumb">
                                            <img src="/static/images/blog-post5.jpg" alt="" className="w-100" />
                                        </div>
                                        <div className="post-info">
                                            <span className="category">discuss</span>
                                            <h2>
                                                <a href="blog-single-layout2.html" title="">
                                                    Times &amp; The Focus - How to Control Its Smart{' '}
                                                </a>
                                            </h2>
                                            <span className="posted-on">
                                                April 24th, 2020, by{' '}
                                                <a href="#" title="">
                                                    Admin
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="post-v10">
                                        <div className="post-thumb">
                                            <img src="/static/images/blog-post6.jpg" alt="" className="w-100" />
                                        </div>
                                        <div className="post-info">
                                            <span className="category">resources</span>
                                            <h2>
                                                <a href="blog-single-layout2.html" title="">
                                                    Branding Mockup Essentials for Your Projects
                                                </a>
                                            </h2>
                                            <span className="posted-on">
                                                April 22th, 2020, by{' '}
                                                <a href="#" title="">
                                                    Admin
                                                </a>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="blog-main-content">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="blog-posts-layout2">
                                        <div className="bg-post">
                                            <div className="bg-post-thumb">
                                                <img src="/static/images/bg-post1.jpg" alt="" />
                                            </div>
                                            <div className="bg-post-info">
                                                <ul className="meta">
                                                    <li>
                                                        <a className="category" href="#" title="">
                                                            Discuss
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>by</span>{' '}
                                                        <a href="#" title="">
                                                            Admin
                                                        </a>
                                                    </li>
                                                    <li>posted 3 Hours ago</li>
                                                </ul>
                                                <h2>
                                                    <a href="blog-single-layout2.html" title="">
                                                        Proven Tricks And Tools That Save Designers’ Time
                                                    </a>
                                                </h2>
                                                <p>
                                                    Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics
                                                    supply...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-post">
                                            <div className="bg-post-thumb">
                                                <img src="/static/images/bg-post2.jpg" alt="" />
                                            </div>
                                            <div className="bg-post-info">
                                                <ul className="meta">
                                                    <li>
                                                        <a className="category" href="#" title="">
                                                            Discuss
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>by</span>{' '}
                                                        <a href="#" title="">
                                                            Admin
                                                        </a>
                                                    </li>
                                                    <li>posted 3 Hours ago</li>
                                                </ul>
                                                <h2>
                                                    <a href="blog-single-layout2.html" title="">
                                                        Proven Tricks And Tools That Save Designers’ Time
                                                    </a>
                                                </h2>
                                                <p>
                                                    Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics
                                                    supply...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-post">
                                            <div className="bg-post-thumb">
                                                <img src="/static/images/bg-post3.jpg" alt="" />
                                            </div>
                                            <div className="bg-post-info">
                                                <ul className="meta">
                                                    <li>
                                                        <a className="category" href="#" title="">
                                                            resource
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>by</span>{' '}
                                                        <a href="#" title="">
                                                            Andrew Robertson{' '}
                                                        </a>
                                                    </li>
                                                    <li>posted June 25th, 2020</li>
                                                </ul>
                                                <h2>
                                                    <a href="blog-single-layout2.html" title="">
                                                        Effective Practices on Blog Images and Visual Content
                                                    </a>
                                                </h2>
                                                <p>
                                                    Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics
                                                    supply...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-post">
                                            <div className="bg-post-thumb">
                                                <img src="/static/images/bg-post4.jpg" alt="" />
                                            </div>
                                            <div className="bg-post-info">
                                                <ul className="meta">
                                                    <li>
                                                        <a className="category" href="#" title="">
                                                            shares
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>by</span>{' '}
                                                        <a href="#" title="">
                                                            Admin
                                                        </a>
                                                    </li>
                                                    <li>posted June 21st, 2020</li>
                                                </ul>
                                                <h2>
                                                    <a href="blog-single-layout2.html" title="">
                                                        UI Inspiration: 20+ Creative Tab Bar Animations{' '}
                                                    </a>
                                                </h2>
                                                <p>
                                                    Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics
                                                    supply...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-post">
                                            <div className="bg-post-thumb">
                                                <img src="/static/images/bg-post5.jpg" alt="" />
                                            </div>
                                            <div className="bg-post-info">
                                                <ul className="meta">
                                                    <li>
                                                        <a className="category" href="#" title="">
                                                            Discuss
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>by</span>{' '}
                                                        <a href="#" title="">
                                                            Andrew Robertson
                                                        </a>
                                                    </li>
                                                    <li>posted May 16, 2020</li>
                                                </ul>
                                                <h2>
                                                    <a href="blog-single-layout2.html" title="">
                                                        Colour Tones for Rebranding &amp; Marketing 2020
                                                    </a>
                                                </h2>
                                                <p>
                                                    Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics
                                                    supply...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-post">
                                            <div className="bg-post-thumb">
                                                <img src="/static/images/bg-post6.jpg" alt="" />
                                            </div>
                                            <div className="bg-post-info">
                                                <ul className="meta">
                                                    <li>
                                                        <a className="category" href="#" title="">
                                                            shares
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>by</span>{' '}
                                                        <a href="#" title="">
                                                            Admin
                                                        </a>
                                                    </li>
                                                    <li>posted June 21st, 2020</li>
                                                </ul>
                                                <h2>
                                                    <a href="blog-single-layout2.html" title="">
                                                        How To Create Animation &amp; Make Your Illustration Perfect More
                                                    </a>
                                                </h2>
                                                <p>
                                                    Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics
                                                    supply...
                                                </p>
                                            </div>
                                        </div>
                                        <div className="bg-post">
                                            <div className="bg-post-thumb">
                                                <img src="/static/images/bg-post7.jpg" alt="" />
                                            </div>
                                            <div className="bg-post-info">
                                                <ul className="meta">
                                                    <li>
                                                        <a className="category" href="#" title="">
                                                            Discuss
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <span>by</span>{' '}
                                                        <a href="#" title="">
                                                            Admin
                                                        </a>
                                                    </li>
                                                    <li>posted May 16, 2020</li>
                                                </ul>
                                                <h2>
                                                    <a href="blog-single-layout2.html" title="">
                                                        Create A Customize Illustration In A Few Minutes With Illustrator Dobby
                                                    </a>
                                                </h2>
                                                <p>
                                                    Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics
                                                    supply...
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mile_pagination">
                                        <nav>
                                            <ul className="pagination text-left">
                                                <li className="page-item prev disabled">
                                                    <a className="page-link" href="#" tabIndex={-1}>
                                                        Prev
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        1
                                                    </a>
                                                </li>
                                                <li className="page-item active">
                                                    <a className="page-link" href="#">
                                                        2
                                                    </a>
                                                </li>
                                                <li className="page-item">
                                                    <a className="page-link" href="#">
                                                        3
                                                    </a>
                                                </li>
                                                <li className="page-item next">
                                                    <a className="page-link" href="#">
                                                        Next
                                                    </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    <div className="sidebar blog-sidebar">
                                        <div className="widget widget-search">
                                            <form>
                                                <input type="text" name="name" placeholder="Search anything..." />
                                                <button type="submit">
                                                    <i className="lni lni-search" />
                                                </button>
                                            </form>
                                        </div>
                                        <div className="widget widget-categories">
                                            <h3 className="widget-title">Categories</h3>
                                            <ul>
                                                <li>
                                                    <a href="#" title="">
                                                        All Articles
                                                    </a>
                                                    <span>96</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        Discuss
                                                    </a>
                                                    <span>96</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        Resources
                                                    </a>
                                                    <span>96</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        Community
                                                    </a>
                                                    <span>96</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        Shares
                                                    </a>
                                                    <span>96</span>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        others
                                                    </a>
                                                    <span>96</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-popular-posts">
                                            <h3 className="widget-title">Popular Posts</h3>
                                            <ul className="wd-posts">
                                                <li>
                                                    <div className="pp-post">
                                                        <h3>
                                                            <a href="blog-single-layout2.html" title="">
                                                                Brief Guide into Social Media Marketing Trends 2020
                                                            </a>
                                                        </h3>
                                                        <span>June 21st, 2020</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="pp-post">
                                                        <h3>
                                                            <a href="blog-single-layout2.html" title="">
                                                                How to Make Your Brand Great Again!
                                                            </a>
                                                        </h3>
                                                        <span>June 25th, 2020</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="pp-post">
                                                        <h3>
                                                            <a href="blog-single-layout2.html" title="">
                                                                UI Inspiration: 20+ Creative Tab Bar Animations
                                                            </a>
                                                        </h3>
                                                        <span>May 16, 2020</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-tags">
                                            <h3 className="widget-title">Popular Tags</h3>
                                            <ul className="tags-link">
                                                <li>
                                                    <a href="#" title="">
                                                        wordpress
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        theme
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        portfolio
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        color
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        inspiration
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        web
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        site
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        creativity
                                                    </a>
                                                </li>
                                                <li>
                                                    <a href="#" title="">
                                                        daily
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="widget widget-adver">
                                            <img src="/static/images/ad-img2.jpg" alt="" className="w-100" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterVariant1 />
        </>
    );
};

BlogLayoutTwo.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default BlogLayoutTwo;
