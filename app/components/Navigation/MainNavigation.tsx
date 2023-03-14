import { useState } from 'react';
import { NextLink } from '../BaseNextLink';
import { RightMenu } from '../RightMenu';
import { Burger } from './Burger';

type Props = {
    view?: boolean
}


export const MainNavigation = (props: Props) => {
    const { view } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <header className={`pb ${view ? 'sticky animated slideInDown' : ''}`}>
                <div className="container-fluid">
                    <div className="header-content d-flex flex-wrap align-items-center">
                        <div className="logo">
                            <NextLink href="/" title="logo">
                                <img src="/static/images/logo2.png" alt="" />
                            </NextLink>
                        </div>
                        <div className="mile-right ms-auto">
                            <Burger isText setOpen={() => setOpen(!open)} />
                            <a href="#" title="" className="btn-default no-bg">
                                Purchase Now
                            </a>
                        </div>
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />
        </>
    );
};
