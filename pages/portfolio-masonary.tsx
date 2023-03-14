import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { FooterVariant1 } from '../app/components/Footer/FooterVariant1';
import { HeaderV1 } from '../app/components/Navigation/HeaderV1';
import dynamic from 'next/dynamic';


const items = [
    {
        id: 1,
        value: 'ui-ux'
    },
    {
        id: 2,
        value: 'motion'
    },
    {
        id: 3,
        value: 'branding'
    },
    {
        id: 4,
        value: 'motion'
    },
    {
        id: 5,
        value: 'branding'
    },
    {
        id: 6,
        value: 'ui-ux'
    },
    {
        id: 7,
        value: 'motion'
    },
    {
        id: 8,
        value: 'ui-ux'
    },
    {
        id: 9,
        value: 'branding'
    },
];

const Isotope = dynamic(
    () => import('../app/components/IsotopeLayout'),
    { ssr: false }
  );

const PortfolioMasonary: NextPageWithLayout = () => {

    return (
        <>
            <HeaderV1 isText />

            <section className="portfolio-ms-page">
                <div className="container-fluid">
                    <div className="sv-title v3 text-center">
                        <span>our works</span>
                        <h2>Bigger, Bolder &amp; Better</h2>
                    </div>
                    
                    <Isotope items={items}/>
                    <div className="more-items text-center">
                        <a href="#" title="" className="more-item">
                            more
                        </a>
                    </div>
                </div>
            </section>
            <FooterVariant1 />
        </>
    );
};

PortfolioMasonary.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Masonary">{page}</Layout>;
};

export default PortfolioMasonary;
