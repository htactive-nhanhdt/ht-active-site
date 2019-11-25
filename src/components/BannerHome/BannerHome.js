import React from 'react';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'
import '../BannerHome/BannerHome.css'
const BannerHome = () => {
    return (
        <ParallaxProvider>
<ParallaxBanner
    className="section parallax light-translucent-bg parallax-bg-"
    layers={[
        {
            image: '/static/portfolio-3-8131bf4168dcf035b6fd4a32a0696a7f.jpg',
            amount: 0.7,
        }
    ]}
    style={{
        height: 'auto',
    }}
>      
                    <div className="container">
                        <div className="call-to-action">
                            <div className="row">
                                <div className="col-lg-8 col-sm-12">
                                    <h1 className="title text-center">DON'T MISS OUT, CONTACT US NOW!</h1>
                                    <p className="text-center">We will reply your message as soon as possible.</p>
                                </div>
                                <div className="col-lg-4 col-s,-12">
                                    <div className="text-center">
                                        <a href="/contact" className="btn btn-default btn-lg">Contact</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </ParallaxBanner>
        </ParallaxProvider>

    );
};

export default BannerHome;