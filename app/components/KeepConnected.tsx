export const KeepConnected = () => {
    return (
        <div className="news-letter-v7 wow fadeInUp" data-wow-duration="1000ms" data-wow-delay="0ms">
            <div className="row align-items-center">
                <div className="col-lg-5">
                    <div className="newsletter-text">
                        <h2>Keep Connected</h2>
                        <span>Get updates by subscribe my weekly newsletter</span>
                    </div>
                </div>
                <div className="col-lg-7">
                    <form className="newsletter-form-v7">
                        <input type="email" name="email" placeholder="Email Address" />
                        <button type="submit">Subscribe</button>
                        <i className="lni lni-envelope" />
                    </form>
                </div>
            </div>
        </div>
    );
};
