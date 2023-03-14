import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { useInView } from 'react-intersection-observer';


const CareerDetailPage: NextPageWithLayout = () => {
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });


    return (
        <>
            <HeaderV1 view={inView} />

            <section className="career-page">
                <div className="container">
                    <div className="sv-title v2 text-center">
                        <span>job description</span>
                        <h2>Creative Director</h2>
                    </div>
                    <div className="career-single">
                        <span className="job-type">Sanfrancisco / Full Time</span>
                        <div className="cr-single-thumb">
                            <img src="/static/images/cr-single.jpg" alt="" className="w-100" />
                        </div>
                        <div ref={ref} className="cr-single-content">
                            <p>
                                First and foremost, you’re a leader. You see what others don’t and know what it takes to turn a vision into
                                a real world execution
                            </p>
                            <p>
                                You love positioning brands to matter in culture, and you’ve dedicated your career to creating game changing
                                experiences for the world’s most renowned brands. When it comes to this position and our embedded team in
                                Mountain View, you see this as your opportunity to do the best work of your life.
                            </p>
                            <h3>What you’ll do:</h3>
                            <ul>
                                <li>Work with a team of 40+ people on-site in Mountain View.</li>
                                <li>Leading the creative staff.</li>
                                <li>
                                    Collaborate with the team to drive several large-scale digital projects to completion including
                                    websites, branding, content, and more.
                                </li>
                                <li>Inspire the client, as well as your team through collaborative concepts.</li>
                                <li>Bring business strategy to creative execution to drive results.</li>
                                <li>Be a leader, putting the client and your team before yourself.</li>
                                <li>Work with little process in place, solving problems through proactive problem solving.</li>
                                <li>You hustle your ass off..</li>
                            </ul>
                            <h3>What you’ll bring:</h3>
                            <ul>
                                <li> 7+ years of design and interactive work.</li>
                                <li>Confidence and talent when it comes to presenting to stakeholders at all levels.</li>
                                <li>
                                    {' '}
                                    Strong knowledge of visual design, user-centered experience design, interaction design, brand
                                    development, and the creative process.
                                </li>
                                <li>Ability to lead internal teams with strategic vision and creative inspiration.</li>
                                <li>A solid point-of-view and a collaborative nature.</li>
                                <li>An entrepreneurial and independent spirit.</li>
                                <li> A diverse sense of taste with the knowledge necessary to apply to various challenges.</li>
                                <li>Real passion for our craft: design, creativity, technology.</li>
                            </ul>
                            <h3>What you’ll get:</h3>
                            <ul>
                                <li>Money.</li>
                                <li>Full benefits including medical, dental, and vision.</li>
                                <li> Paid holidays and vacation.</li>
                                <li>Matching 401k.</li>
                                <li>Amazing clients to work with.</li>
                                <li>Dogs to pet and things to drink.</li>
                                <li>A team that works hard, has fun and loves a challenge.</li>
                            </ul>
                            <a href="#" title="" className="btn-default box-shadow-none w-100 text-center">
                                Send Your CV/Resume
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <FooterVariant1 />
        </>
    );
};

CareerDetailPage.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Career Detail">{page}</Layout>;
};

export default CareerDetailPage;
