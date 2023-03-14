import { NextLink } from '../BaseNextLink';
import { rightMenu } from '../../config/menu-config';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { activeLink } from '../../utils/functions';

type Props = {
    isOpen: boolean;
    closeMenu: () => void;
};

export const RightMenu = ({ isOpen = false, closeMenu }: Props) => {
    const { pathname } = useRouter();

    const [openCollapse, setOpenCollapse] = useState({
        name: '',
        isOpen: false
    });

    const onClick = (menu: any) => {
        setOpenCollapse({
            name: menu.name,
            isOpen: !openCollapse.isOpen
        });
    };

    const clickOnItem = () => {
        closeMenu();
        setOpenCollapse({
            name: '',
            isOpen: false
        });
    };

    return (
        <div className={`responsive-menu ${isOpen ? 'active' : ''}`}>
            <div className="rep-header">
                <div className="rep-logo">
                    <img src="/static/images/logo2.png" alt="" />
                </div>
                <div onClick={closeMenu} className="close-menu">
                    <i className="lni lni-close" />
                </div>
            </div>
            <div className="search-box">
                <form>
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                        <i className="lni lni-search-alt" />
                    </button>
                </form>
            </div>
            <ul className="mobile-menu">
                {rightMenu.map((menu) => (
                    <li
                        key={menu.name}
                        className={`menu-item-has-children ${openCollapse.name === menu.name && openCollapse.isOpen ? 'active' : ''}`}
                    >
                        <a style={{
                          color: openCollapse.name === menu.name && openCollapse.isOpen ? '#f59e31' : '#343a40'
                        }} onClick={() => onClick(menu)}>{menu.name}</a>
                        <ul
                            style={{
                                display: openCollapse.name === menu.name && openCollapse.isOpen ? 'block' : 'none'
                            }}
                        >
                            {menu.children.map((child, index) => (
                                <li key={child.name} onClick={clickOnItem}>
                                    <NextLink
                                        href={child.href}
                                        style={{
                                            color: activeLink(pathname, child.href) ? '#f59e31' : ''
                                        }}
                                    >
                                        {child.name}
                                    </NextLink>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};
