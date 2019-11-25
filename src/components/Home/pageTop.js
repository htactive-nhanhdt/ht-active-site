import React from "react"
import {Link } from "gatsby"


const PageTop = () => {
    return (
        <div className="page-top" style={{ marginTop: "0px" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="call-to-action">

                            <p className="lead">We strive to offer the best solution for your business.</p>
                            <Link className="btn btn-white more" to="/services">
                                Read More<i className="pl-10 fa fa-info"></i>
                            </Link>

                            <Link to="/contact" className="btn btn-default contact">
                                Contact<i className="pl-10 fa fa-phone"></i>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PageTop