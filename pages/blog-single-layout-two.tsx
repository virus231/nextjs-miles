import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { carouselsExample } from './index';
import Carousel, { CarouselDots } from '../app/components/carousel';
import { useRef } from 'react';

const BlogSingleLayoutTwo: NextPageWithLayout = () => {
    const carouselRef = useRef<Carousel | null>(null);

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
            <HeaderV1 isText />

            <section className="page-content bb-0">
                <div className="single-post-meta">
                    <h2>Brief Guide into Social Media Marketing Trends 2020</h2>
                    <ul className="meta">
                        <li>
                            <a className="category" href="#" title="">
                                resource
                            </a>
                        </li>
                        <li>
                            <span>by</span>{' '}
                            <a href="#" title="">
                                Andrew Robertson
                            </a>
                        </li>
                        <li>posted June 25th, 2020</li>
                    </ul>
                </div>
                <div className="single-layout-featured">
                    <div className="container v4">
                        <div className="featured-post-sec v2">
                            <div className="featured-post-slider">
                                <Carousel ref={carouselRef} {...carouselSettings}>
                                    {carouselsExample.map((item) => (
                                        <div key={item.id} className="featured-post">
                                            <div className="vector-img">
                                                <img src="/static/images/blog-large1.jpg" alt="" />
                                            </div>
                                        </div>
                                    ))}
                                </Carousel>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="single-post-layout2">
                    <div className="container">
                        <div className="blog-ppt">
                            <div className="shared-col">
                                <h4>962</h4>
                                <span>Shared</span>
                                <ul className="social-count">
                                    <li>
                                        <a href="#" title="" className="twitter">
                                            <i className="fab fa-twitter" />
                                        </a>
                                        <span>216</span>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="facebook">
                                            <i className="fab fa-facebook-f" />
                                        </a>
                                        <span>686</span>
                                    </li>
                                    <li>
                                        <a href="#" title="" className="rss">
                                            <i className="fas fa-rss" />
                                        </a>
                                        <span>105</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="single-post-layout1">
                                <div className="blog-posts-layout2">
                                    <div className="bg-post">
                                        <div className="bg-post-info">
                                            <p>
                                                <strong>N</strong>ever ever think of giving up. Winners never quit and quitters never win.
                                                Take all negative words out of your mental dictionary and focus on the solutions with utmost
                                                conviction and patience. The battle is never lost until you’ve abandon your vision.
                                            </p>
                                            <p>
                                                utmost conviction and patience. The battle is never lost until you’ve abandon your vision.
                                                But what if you’re really exhausted physically, mentally, and most of all emotionally? Here
                                                are some sources of motivation to prompt you in reaching the peak of accomplishment.
                                            </p>
                                            <div className="row pst-large">
                                                <div className="col-12">
                                                    <img src="/static/images/post-large2.jpg" alt="" className="w-100" />
                                                    <span>Pablo Illustration via Icon8</span>
                                                </div>
                                            </div>
                                            <h3>Challenge</h3>
                                            <p>
                                                Success needs hard work. Don’t listen to these ‘get rich quick’ schemes. You need to build
                                                your character and work hard on yourself and your business to achieve greatness. Work hard
                                                and work smart. Do the right things and do them in the right way. Don’t procrastinate. Take
                                                bold actions. Work long hours and craft your legacy.
                                            </p>
                                            <h3>Methods for Everyone</h3>
                                            <p>
                                                Successful people do not see failures as failures. They see them as important learning
                                                lessons. Lessons that are capable of giving them insights to prevent such mistakes from
                                                happening again. By adopting this mindset of turning each failure into a learning lesson or
                                                opportunity, you can never fail until you yourself quit.
                                            </p>
                                            <p>
                                                You should be able to find several indispensable facts about motivation in the following
                                                paragraphs. If there’s at least one fact you didn’t know before, imagine the difference it
                                                might make. It’s so difficult to go on when everything seems to fail, isn’t it? Are there
                                                times in your life when you really want to call it “quits” because you just can’t see any
                                                good results from all the hard work you’ve done?
                                            </p>
                                            <blockquote>
                                                <p>
                                                    To make these eternity bands more specially, you can use your birthstone into the band
                                                    or your luck stone .
                                                </p>
                                                <span>
                                                    <strong>Daniel Bagneto</strong>, Invisionapp Inc
                                                </span>
                                            </blockquote>
                                            <iframe src="https://www.youtube.com/embed/tgbNymZ7vqY"></iframe>
                                            <h3>Highlight on the Worldwide</h3>
                                            <p>
                                                Just set something gratifying to indulge in after completing a certain undertaking. The best
                                                time to learn about motivation is before you’re in the thick of things. Wise readers will
                                                keep reading to earn some valuable motivation experience while it’s still free.
                                            </p>
                                            <h3>So Result</h3>
                                            <p>
                                                If you want to succeed, surround yourself with the right kind of people who will support and
                                                encourage you all the way. Be with people who have the same beliefs and aspirations as
                                                yours. Positive aura is generated by this fusion of collective energy from people of “like
                                                minds.” On the contrary, being with people who oppose your ways of thinking may trigger a
                                                negative, yet very powerful, kind of motivation.
                                            </p>
                                            <div className="row post-cont align-items-center">
                                                <div className="col-lg-6 col-md-6">
                                                    <ul className="post-tags">
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
                                                    </ul>
                                                </div>
                                                <div className="col-lg-6 col-md-6">
                                                    <div className="share-on">
                                                        <h3>Share on</h3>
                                                        <ul className="social-circle">
                                                            <li>
                                                                <a href="#" title="" className="facebook">
                                                                    <i className="fab fa-facebook-f" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="" className="twitter">
                                                                    <i className="fab fa-twitter" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="" className="google">
                                                                    <i className="fab fa-google-plus-g" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="" className="tumblr">
                                                                    <i className="fab fa-tumblr" />
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="#" title="" className="rss">
                                                                    <i className="fa fa-rss" />
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-posted-author">
                                        <div className="author-img">
                                            <img src="/static/images/author1.jpg" alt="" />
                                        </div>
                                        <div className="author-info">
                                            <h3>
                                                <a href="#" title="">
                                                    Andy Robertson
                                                </a>
                                            </h3>
                                            <span>Content Editor</span>
                                            <p>
                                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
                                                anim id est laborum sed ut perspiciatis unde.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="related-posts-ly">
                                        <h3>Related Posts</h3>
                                        <div className="blog-posts-v10 row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="post-v10">
                                                    <div className="post-thumb">
                                                        <img src="/static/images/blog-post1.jpg" alt="" className="w-100" />
                                                    </div>
                                                    <div className="post-info">
                                                        <span className="category">discuss</span>
                                                        <h2>
                                                            <a href="#" title="">
                                                                5 Things That You Need To Knows About E-Commerce
                                                            </a>
                                                        </h2>
                                                        <p>
                                                            Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot
                                                            analytics supply.
                                                        </p>
                                                        <span className="posted-on">
                                                            May 3rd, 2020, by{' '}
                                                            <a href="#" title="">
                                                                Admin
                                                            </a>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="post-v10">
                                                    <div className="post-thumb">
                                                        <img src="/static/images/blog-post2.jpg" alt="" className="w-100" />
                                                    </div>
                                                    <div className="post-info">
                                                        <span className="category">discuss</span>
                                                        <h2>
                                                            <a href="#" title="">
                                                                Times &amp; The Focus - How to Control Its Smart{' '}
                                                            </a>
                                                        </h2>
                                                        <p>
                                                            Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot
                                                            analytics supply.
                                                        </p>
                                                        <span className="posted-on">
                                                            April 24th, 2020, by{' '}
                                                            <a href="#" title="">
                                                                Admin
                                                            </a>
                                                        </span>
                                                    </div>
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
            <section className="commented-v2">
                <div className="container-fluid">
                    <div className="commented-sec">
                        <div className="container">
                            <div className="posted-comments">
                                <h3>Comments</h3>
                                <ul className="post-comments-list">
                                    <li>
                                        <div className="post-comment">
                                            <div className="comment-thumb">
                                                <img src="/static/images/cm1.jpg" alt="" />
                                            </div>
                                            <div className="comment-info">
                                                <h3>David Bowie</h3>
                                                <span>3 hours ago</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <a href="#" title="" className="reply-btn">
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                        <ul>
                                            <li>
                                                <div className="post-comment">
                                                    <div className="comment-thumb">
                                                        <img src="/static/images/cm2.jpg" alt="" />
                                                    </div>
                                                    <div className="comment-info">
                                                        <h3>Sam Susana</h3>
                                                        <span>25 minutes ago</span>
                                                        <p>
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                            incididunt ut labore et dolore magna aliqua.
                                                        </p>
                                                        <a href="#" title="" className="reply-btn">
                                                            Reply
                                                        </a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <div className="post-comment">
                                            <div className="comment-thumb">
                                                <img src="/static/images/cm3.jpg" alt="" />
                                            </div>
                                            <div className="comment-info">
                                                <h3>Antony Bredan</h3>
                                                <span>May 22, 2020</span>
                                                <p>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                                                    incididunt ut labore et dolore magna aliqua.
                                                </p>
                                                <a href="#" title="" className="reply-btn">
                                                    Reply
                                                </a>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="post-comment-form">
                                <h3>Leave A Comment</h3>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <input type="text" name="name" placeholder="Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <input type="text" name="email" placeholder="Email Address" />
                                            </div>
                                        </div>
                                        <div className="col-lg-4 col-md-4">
                                            <div className="form-group">
                                                <input type="text" name="subject" placeholder="Subject (optional)" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea name="message" placeholder="Message" defaultValue={''} />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="form-submit">
                                                <button type="submit" className="btn-default text-uppercase">
                                                    send message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterVariant1 />
        </>
    );
};

BlogSingleLayoutTwo.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Home">{page}</Layout>;
};

export default BlogSingleLayoutTwo;
