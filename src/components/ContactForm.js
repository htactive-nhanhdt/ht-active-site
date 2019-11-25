import React from 'react';
import GoogleMap from '../components/GoogleMap/GoogleMap'
const ContactForm = () => {
    return (
        <React.Fragment>
            <GoogleMap />
            <div className="container">
                <div >
                    <h1 className="page-title"><br /> CONTACT</h1>
                    <aside className="col-sm-12 col-lg-4 col-lg-push-8  ">
                        <div className="sidebar">
                            <div className="side vertical-divider-left">
                                <h2 className="title"><strong>HT ACTIVE</strong></h2>
                                <ul className="list">
                                    <li><strong /></li>
                                    <li><i className="fa fa-home pr-10" /><abbr title="Address" />150 Duy Tan, Danang, Vietnam.</li>
                                    <li><i className="fa fa-phone pr-10" /><abbr title="Phone" />0905 610 229</li>
                                    <li><i className="fa fa-skype pr-10" /><abbr title="Skype" />hoangvhh</li>
                                    <li><i className="fa fa-envelope pr-10" /><a href="mailto:services@htactive.com">recruit@htactive.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </aside>
                    <div className="main col-sm-12 col-lg-8 col-lg-pull-4 ">
                        <p>If you need anything from us, please don't hesitate to contact with us via bellow form. We will contact you as soon as possible.</p>
                        <div className="alert alert-success hidden" id="MessageSent">
                            We have received your message, we will contact you very soon.
                </div>
                        <div className="alert alert-danger hidden" id="MessageNotSent">
                            Oops! Something went wrong please refresh the page and try again.
                </div>
                        <div className="contact-form">
                            <form name="contact" method="POST" data-netlify="true">
                                <input type="hidden" name="form-name" value="contact" />
                                <div className="form-group has-feedback">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" placeholder="Please input your name" />
                                    <i className="fa fa-user form-control-feedback" />
                                </div>
                                <div className="form-group has-feedback">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" className="form-control" id="email" name="email" placeholder="Please input your email address" />
                                    <i className="fa fa-envelope form-control-feedback" />
                                </div>
                                <div className="form-group has-feedback">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" className="form-control" id="subject" name="subject" placeholder="What can we do to assist you?" />
                                    <i className="fa fa-navicon form-control-feedback" />
                                </div>
                                <div className="form-group has-feedback">
                                    <label htmlFor="message">Your Message</label>
                                    <textarea className="form-control" rows={6} id="message" name="message" placeholder="Please let us know your idea" defaultValue={""} />
                                    <i className="fa fa-pencil form-control-feedback" />
                                </div>
                                <input type="submit" className="submit-button btn btn-default" defaultValue="SEND" data-loading="<i class='fa fa-spinner fa-spin fa-3x fa-fw'></i> SENDING..." />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default ContactForm;