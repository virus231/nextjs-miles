import { useState } from 'react';
import { NextLink } from '../BaseNextLink';
import { RightMenu } from '../RightMenu';
import StickyHeader from '../StickyHeader';
import { Burger } from './Burger';
import { Links } from './Links';


type Props = {
    view: boolean
}

export const Navigation = (props: Props) => {
    const { view } = props;
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>
            <header className={`header-v8 ${view ? 'sticky animated slideInDown' : ''}`}>
                <div className="container">
                    <div className="header-content-v8">
                        <div className="logo-v8">
                            <NextLink href="/" title="logo">
                                <img src="/static/images/logo_8.png" alt="Logo" />
                            </NextLink>
                        </div>
                        <nav>
                            <ul>
                                <Links />
                            </ul>
                        </nav>
                        <NextLink href="#" className="chat-btn">
                            Let’s chat!
                            <i className="lni lni-comments-reply"></i>
                        </NextLink>
                        <Burger setOpen={() => setOpen(!open)} />
                    </div>
                </div>
            </header>

            <RightMenu isOpen={open} closeMenu={() => setOpen(!open)} />
        </>
    );
};
