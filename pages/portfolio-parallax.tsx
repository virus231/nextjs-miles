import { NextPageWithLayout } from './_app';
import { Layout } from '../app/components/Layout';
import { useState } from 'react';
import ReactPageScroller from 'react-page-scroller';
import { RightMenu } from '../app/components/RightMenu';
import { Burger } from '../app/components/Navigation/Burger';
import { NextLink } from '../app/components/BaseNextLink';


const originalLinks = [{
    id: 0,
    text: 'Byzano App',
},
{
    id: 1,
    text: 'Lewis',
},
{
    id: 2,
    text: 'Ethant Hunt',
}];

const PortfolioParallax: NextPageWithLayout = () => {
    const [currentPage, setCurrentPage] = useState<number | null>(null);
    const [open, setOpen] = useState<boolean>(false);

    const handlePageChange = (value: number | null) => {
        setCurrentPage(value);
    };

    return (
        <>
            <header className="header-v12 v13 pb active">
                <div className="container">
                    <div className="header-content">
                        <div className="logo">
                            <NextLink href="/" title="" className="light-logo">
                                <img src="/static/images/logo13.png" alt="" />
                            </NextLink>
                        </div>
                        <Burger white isText setOpen={() => setOpen(!open)} />
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />


            <div className="pt-linkss">
                <ul id="menuMain">
                    {
                        originalLinks.map((link) => <li data-menuanchor="about" 
                                                        className={`${link.id === currentPage ? 'active' : ''}` }>
                                <a href="#about" title="">
                                    {link.text}
                                </a>
                            </li>
                        )
                    }
                </ul>
            </div>
        
            <ReactPageScroller
                    pageOnChange={handlePageChange}
                    customPageNumber={currentPage ?? 0}
            >
                <div className="section pp-scrollable sc-slide1 gb-1" id="about">
                            <div className="slide-container">
                                <div className="fixed-bg gb-1" />
                                <div className="enter-btn">
                                    <a href="17_portfolio_single_layout_1.html" title="">
                                        Enter
                                    </a>
                                </div>
                                <div className="container" >
                                    <div className="gb-content">
                                        <div className="gb-title">
                                            <h2>
                                                <a href="17_portfolio_single_layout_1.html" title="">
                                                    ui/ux
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="gb-img">
                                            <img src="/static/images/gb1.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <span className="pager-count">1/3</span>
                            </div>
                </div>
                <div className="section pp-scrollable" id="services">
                    <div className="slide-container">
                        <div className="fixed-bg gb-2" />
                        <div className="enter-btn">
                            <a href="17_portfolio_single_layout_1.html" title="">
                                Enter
                            </a>
                        </div>
                        <div className="container">
                            <div className="gb-content">
                                <div className="gb-title">
                                    <h2>
                                        <a href="17_portfolio_single_layout_1.html" title="">
                                            branding
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <span className="pager-count">2/3</span>
                    </div>
                </div>
                <div className="section pp-scrollable" id="why-choose-us">
                    <div className="slide-container">
                        <div className="fixed-bg gb-3" />
                        <div className="enter-btn">
                            <a href="17_portfolio_single_layout_1.html" title="">
                                Enter
                            </a>
                        </div>
                        <div className="container">
                            <div className="gb-content">
                                <div className="gb-title">
                                    <h2>
                                        <a href="17_portfolio_single_layout_1.html" title="">
                                            motion
                                        </a>
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <span className="pager-count">3/3</span>
                    </div>
                </div>
            </ReactPageScroller>


        </>
    );
};

PortfolioParallax.getLayout = function getLayout(page: React.ReactElement) {
    return <Layout title="Portfolio Parallax">{page}</Layout>;
};

export default PortfolioParallax;
