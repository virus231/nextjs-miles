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

export default function IsotopeLayoutCareer(props: Props) {
    const [filterKey, setFilterKey] = useState('*');
    const isotope = useRef<Isotope | null>(null);

    const handleFilterKeyChange = (key: string) => () => {
        setFilterKey(key);

    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            isotope.current = new Isotope('.masonary', {
                // itemSelector: '.career',
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

    return (
        <>
            <div className="options">
                <div className="option-isotop">
                    <ul id="filter" className="option-set filters-nav text-center" data-option-key="filter">
                        <li>
                            <a className={`${isActive('*')}`} onClick={handleFilterKeyChange('*')} data-option-value="*">
                                All Jobs{' '}
                            </a>
                        </li>
                        <li>
                            <a className={`${isActive('full_time')}`} onClick={handleFilterKeyChange('full_time')} data-option-value=".full_time">Full Time</a>
                        </li>
                        <li>
                            <a className={`${isActive('part_time')}`} onClick={handleFilterKeyChange('part_time')} data-option-value=".part_time">Part Time</a>
                        </li>
                        <li>
                            <a className={`${isActive('remote')}`} onClick={handleFilterKeyChange('remote')} data-option-value=".remote">Remote</a>
                        </li>
                        <li>
                            <a className={`${isActive('internship')}`} onClick={handleFilterKeyChange('internship')} data-option-value=".internship">Internship</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row ms-row masonary">
                {props.items.map((item: Item) => (
                    <div key={item.id}
                        className={`career col-lg-6 col-md-6 col-sm-6 ${item.value}`}>
                        <div className="career-item">
                            <div className="career-thumb">
                                <img src={`/static/images/cr${item.id}.jpg`} alt="" className="w-100" />
                            </div>
                            <div className="career-info">
                                <h2>
                                    <a href="career-detail.tsx" title="">
                                        Creative Director
                                    </a>
                                </h2>
                                <p>
                                    First and foremost, you’re a leader. You see what others don’t and know what it takes to turn a
                                    vision...
                                </p>
                                <span>Sanfrancisco / Full Time</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* <div className="row ms-row masonary">
                <div className="col-lg-6 col-md-6 col-sm-6 part_time">
                    <div className="career-item">
                        <div className="career-thumb">
                            <img src="/static/images/cr1.jpg" alt="" className="w-100" />
                        </div>
                        <div className="career-info">
                            <h2>
                                <a href="34_career_detail.html" title="">
                                    Creative Director
                                </a>
                            </h2>
                            <p>
                                First and foremost, you’re a leader. You see what others don’t and
                                know what it takes to turn a vision...
                            </p>
                            <span>Sanfrancisco / Full Time</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 full_time">
                    <div className="career-item">
                        <div className="career-thumb">
                            <img src="/static/images/cr2.jpg" alt="" className="w-100" />
                        </div>
                        <div className="career-info">
                            <h2>
                                <a href="34_career_detail.html" title="">
                                    Senior Product Management
                                </a>
                            </h2>
                            <p>
                                You’ve got grit and a deep desire to design and contribute to the
                                creation of amazing digital experiences...
                            </p>
                            <span>Sanfrancisco / Full Time</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 full_time">
                    <div className="career-item">
                        <div className="career-thumb">
                            <img src="/static/images/cr.jpg" alt="" className="w-100" />
                        </div>
                        <div className="career-info">
                            <h2>
                                <a href="34_career_detail.html" title="">
                                    Senior UI/UX Product Designer
                                </a>
                            </h2>
                            <p>
                                First and foremost, you’re a leader. You see what others don’t and
                                know what it takes to turn a vision...
                            </p>
                            <span>Sanfrancisco / Full Time</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 internship">
                    <div className="career-item">
                        <div className="career-thumb">
                            <img src="/static/images/cr4.jpg" alt="" className="w-100" />
                        </div>
                        <div className="career-info">
                            <h2>
                                <a href="34_career_detail.html" title="">
                                    Content Executive
                                </a>
                            </h2>
                            <p>
                                You’ve got grit and a deep desire to design and contribute to the
                                creation of amazing digital experiences...
                            </p>
                            <span>Los Angeles / intership</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 full_time">
                    <div className="career-item">
                        <div className="career-thumb">
                            <img src="/static/images/cr5.jpg" alt="" className="w-100" />
                        </div>
                        <div className="career-info">
                            <h2>
                                <a href="34_career_detail.html" title="">
                                    Leader Strategry &amp; Marketing
                                </a>
                            </h2>
                            <p>
                                First and foremost, you’re a leader. You see what others don’t and
                                know what it takes to turn a vision...
                            </p>
                            <span>Mahattan / Full Time</span>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 remote part_time">
                    <div className="career-item">
                        <div className="career-thumb">
                            <img src="/static/images/cr6.jpg" alt="" className="w-100" />
                        </div>
                        <div className="career-info">
                            <h2>
                                <a href="34_career_detail.html" title="">
                                    Graphic Designer
                                </a>
                            </h2>
                            <p>
                                You’ve got grit and a deep desire to design and contribute to the
                                creation of amazing digital experiences...
                            </p>
                            <span>remote</span>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
};