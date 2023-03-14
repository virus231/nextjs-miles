import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { useInView } from 'react-intersection-observer';


const BlogLayoutOne: NextPageWithLayout = (props: Props) => {
    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <>
            <HeaderV1 isText view={inView} />

            <section className="page-content">
                <div className="container">
                    <div className="page-sec-title text-center">
                        <span>our journal</span>
                        <h2>Writing is socially acceptable from of schizophrenia</h2>
                    </div>
                    <div className="blog-posts-v10 blog-layout1 row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="post-v10">
                                <div className="post-thumb">
                                    <img src="/static/images/blog-post4.jpg" alt="" className="w-100" />
                                </div>
                                <div className="post-info">
                                    <span className="category">discuss</span>
                                    <h2>
                                        <a href="blog-single-layout1.html" title="">
                                            5 Things That You Need To Knows About E-Commerce
                                        </a>
                                    </h2>
                                    <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
                                    <span className="posted-on">
                                        May 3rd, 2020, by{' '}
                                        <a href="#" title="">
                                            Admin
                                        </a>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <div ref={ref}> */}
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="post-v10">
                                    <div className="post-thumb">
                                        <img src="/static/images/blog-post5.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="post-info">
                                        <span className="category">discuss</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                Times &amp; The Focus - How to Control Its Smart{' '}
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
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
                                            <a href="blog-single-layout1.html" title="">
                                                Branding Mockup Essentials for Your Projects
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
                                        <span className="posted-on">
                                            April 22th, 2020, by{' '}
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
                                        <img src="/static/images/blog-post7.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="post-info">
                                        <span className="category">discuss</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                5 Things That You Need To Knows About E-Commerce
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
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
                                        <img src="/static/images/blog-post8.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="post-info">
                                        <span className="category">discuss</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                Times &amp; The Focus - How to Control Its Smart{' '}
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
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
                                        <img src="/static/images/blog-post9.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="post-info">
                                        <span className="category">resources</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                Branding Mockup Essentials for Your Projects
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
                                        <span className="posted-on">
                                            April 22th, 2020, by{' '}
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
                                        <img src="/static/images/blog-post1.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="post-info">
                                        <span className="category">discuss</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                5 Things That You Need To Knows About E-Commerce
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
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
                                        <img src="/static/images/blog-post2.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="post-info">
                                        <span className="category">discuss</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                Times &amp; The Focus - How to Control Its Smart{' '}
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
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
                                        <img src="/static/images/blog-post3.jpg" alt="" className="w-100" />
                                    </div>
                                    <div className="post-info">
                                        <span className="category">resources</span>
                                        <h2>
                                            <a href="blog-single-layout1.html" title="">
                                                Branding Mockup Essentials for Your Projects
                                            </a>
                                        </h2>
                                        <p>Handshake scrum project learning curve termsheet buzz bandwidth alpha pivot analytics supply.</p>
                                        <span className="posted-on">
                                            April 22th, 2020, by{' '}
                                            <a href="#" title="">
                                                Admin
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}

                    </div>
                    <div className="mile_pagination">
                        <nav>
                            <ul className="pagination">
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
            </section>
            <FooterVariant1 />
        </>
    );
};

BlogLayoutOne.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Blog Layout One">{page}</Layout>;
};

export default BlogLayoutOne;
