export function Testi() {
    return (
        <div className="row align-items-center">
            <div className="col-lg-6 col-md-5">
                <div className="testi-v3-slider">
                    <div className="testi-v3-slide current" id="tab1">
                        <span className="t-icon">
                            <i className="lni lni-quotation" />
                        </span>
                        <p>
                            I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and
                            outstanding support.
                        </p>
                        <h3>Edison Cavani</h3>
                        <span>Product Management at Spotify</span>
                    </div>
                    <div className="testi-v3-slide" id="tab2">
                        <span className="t-icon">
                            <i className="lni lni-quotation" />
                        </span>
                        <p>this is something that you haven’t seen before. Unique design, lightweight, and outstanding support.</p>
                        <h3>Edison Cavani</h3>
                        <span>Product Management at Spotify</span>
                    </div>
                    <div className="testi-v3-slide" id="tab3">
                        <span className="t-icon">
                            <i className="lni lni-quotation" />
                        </span>
                        <p>I don’t know what else to say before. Unique design, lightweight, and outstanding support.</p>
                        <h3>Logan Cee</h3>
                        <span>Product Management at Spotify</span>
                    </div>
                    <div className="testi-v3-slide" id="tab4">
                        <span className="t-icon">
                            <i className="lni lni-quotation" />
                        </span>
                        <p>
                            I don’t know what else to say, this is something that you haven’t seen before. Unique design, lightweight, and
                            outstanding support.
                        </p>
                        <h3>Edison Cavani</h3>
                        <span>Product Management at Spotify</span>
                    </div>
                    <div className="testi-v3-slide" id="tab5">
                        <span className="t-icon">
                            <i className="lni lni-quotation" />
                        </span>
                        <p>this is something that you haven’t seen before. Unique design, lightweight, and outstanding support.</p>
                        <h3>Edison Cavani</h3>
                        <span>Product Management at Spotify</span>
                    </div>
                    <div className="testi-v3-slide" id="tab6">
                        <span className="t-icon">
                            <i className="lni lni-quotation" />
                        </span>
                        <p>I don’t know what else to say before. Unique design, lightweight, and outstanding support.</p>
                        <h3>Logan Cee</h3>
                        <span>Product Management at Spotify</span>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-7">
                <div className="testi-bg">
                    <img src="/static/images/testi-bg.png" alt="" />
                    <ul className="testi-thumbs">
                        <li data-tab="tab1" className="v1 current">
                            <img src="/static/images/tm1.jpg" alt="" />
                        </li>
                        <li data-tab="tab2" className="v2">
                            <img src="/static/images/tm2.jpg" alt="" />
                        </li>
                        <li data-tab="tab3" className="v3">
                            <img src="/static/images/tm3.jpg" alt="" />
                        </li>
                        <li data-tab="tab4" className="v4">
                            <img src="/static/images/tm4.jpg" alt="" />
                        </li>
                        <li data-tab="tab5" className="v5">
                            <img src="/static/images/tm5.jpg" alt="" />
                        </li>
                        <li data-tab="tab6" className="v6">
                            <img src="/static/images/tm6.jpg" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
