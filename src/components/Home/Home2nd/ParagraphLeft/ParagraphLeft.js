import React from 'react';
import {Link } from "gatsby"

const ParagraphLeft = ({ color }) => {
    return (
        <div className="col-lg-6 col-md-12">
            <h2 className="title">Meet the team - HT Active</h2>
            <div className="row">
                <div className="col-md-6">
                    <img className="imgAboutus" src="/assets/voc/images/section-image-2.png" alt="" />
                    <img className="imgAboutus" src="http://htactive.com/assets/voc/images/section-image-2.png" alt="" />
                </div>
                <div className="col-lg-6 col-md-12" style={{ marginLeft: 0 }}>
                    <p>We work on the services, product and comunication. We love what we do, and who we do it with. To HT Active, all customers are friends.</p>
                </div>
            </div>
            <p>HT Active wouldn’t be what it is without the incredible and loving contributions of our member. Thanks to everyone who’s put their heart and their energy into this community.</p>
            <Link to="/about" className="btn btn-white">Read More</Link>
            <div className="space hidden-md hidden-lg"></div>
        </div>
    );
};

export default ParagraphLeft;