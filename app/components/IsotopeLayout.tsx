import { useEffect, useRef, useState } from 'react';
import Isotope, { IsotopeOptions } from 'isotope-layout';
import fetch from 'isomorphic-unfetch';

type Item = {
    id: number,
    value: string
}

type Props = {
    items: Item[]
}


export default function IsotopeLayout(props: Props) {
    const [filterKey, setFilterKey] = useState('*');
    const isotope = useRef<Isotope | null>(null);

    const handleFilterKeyChange = (key: string) => () => {
        setFilterKey(key);

    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            isotope.current = new Isotope('.masonary', {
                itemSelector: '.main',
                layoutMode: 'masonry'
            });
        }
    }, []);

    useEffect(() => {
        if (filterKey === '*') isotope.current?.arrange({ filter: '*' });
        else isotope.current?.arrange({ filter: `.${filterKey}` });
    }, [isotope, filterKey]);

    const isActive = (key: string) => {
        return filterKey === key ? 'selected' : '';
    };


    return (<>
        <div className="options">
            <div className="option-isotop">
                <ul id="filter" className="option-set filters-nav text-center" data-option-key="filter">
                    <li>
                        <a className={`${isActive('*')}`} onClick={handleFilterKeyChange('*')} data-option-value="*" >
                            All Projects
                        </a>
                    </li>
                    <li>
                        <a className={`${isActive('ui-ux')}`} onClick={handleFilterKeyChange('ui-ux')} data-option-value=".ui-ux">
                            UI/UX
                        </a>
                    </li>
                    <li>
                        <a className={`${isActive('branding')}`} onClick={handleFilterKeyChange('branding')} data-option-value=".branding">
                            Branding
                        </a>
                    </li>
                    <li>
                        <a className={`${isActive('motion')}`} onClick={handleFilterKeyChange('motion')} data-option-value=".motion">
                            Motion
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="row ms-row masonary">
            {props.items.map((item: Item) => (
                <div key={item.id}
                    className={`main col-lg-4 col-md-4 col-sm-6 ${item.value}`}>
                    <div className="pt-item">
                        <a href="17_portfolio_single_layout_1.html" title="" className="">
                            <img src={`/static/images/pt${item.id}.jpg`} alt="" />
                        </a>
                    </div>
                </div>
            ))}
        </div>

    </>

    );
}