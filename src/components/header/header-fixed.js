import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import NavBar from "./navbar"
import { Link } from "gatsby"

const HeaderFixed = ({ color, menu }) => {
  const [scrollY, setScrollY] = useState(0)
  const logit = () => {
    setScrollY(window.pageYOffset)
  }
  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener("scroll", logit)
    }
  }, [])
  return (
    <header
      className={`header fixed ${scrollY > 182 ? "fixed-bar" : " "} clearfix`}
    >
      <div className="container">
        <div className="row header-fixed">
          <div
            className={`col-md-3 ${scrollY > 182 ? "header-left-fixed" : ""}`}
          >
            <div className="header-left clearfix">
              <Link to="/">
                <div
                  className={`logo ${scrollY > 182 ? "logo-fixed" : ""}`}
                ></div>
              </Link>
              <div
                className="site-slogan"
                style={{ display: `${scrollY > 182 ? "none" : "block"}` }}
              >
                Your Satisfaction Is Our Success
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="header-right clearfix">
              <div className="main-navigation animated">
                <NavBar menu={menu} color={color} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: value => dispatch({ type: `ACTIVE_NAVBAR`, active: value }),
  }
}
export default connect(mapDispatchToProps)(HeaderFixed)
