import React, { useState } from "react"
import { connect } from "react-redux";
import {Link} from "gatsby"

const HeaderTop = ({language, changeActive}) => { 
  const [openDropdown, setOpenDropdown] = useState(false)
  const [openToggle, setOpenToggle] = useState(false)

  return (
    <div className="header-top">
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-sm-6">
            <div className="header-top-first clearfix">
              <ul className="social-links clearfix hidden-xs">
                <li className="twitter">
                  <a href="https://twitter.com/hoangvhh">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="skype">
                  <a href="skype:hoangvhh">
                    <i className="fa fa-skype"></i>
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/hoang-pham-6236b8b7">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li className="googleplus">
                  <a href="https://plus.google.com/u/0/117715430853979848085">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="youtube">
                  <a href="http://www.youtube.com">
                    <i className="fa fa-youtube-play"></i>
                  </a>
                </li>
                <li className="flickr">
                  <a href="https://www.flickr.com/photos/124606867@N06/">
                    <i className="fa fa-flickr"></i>
                  </a>
                </li>
                <li className="facebook">
                  <a href="https://www.facebook.com/htactive">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="pinterest">
                  <a href="https://www.pinterest.com/vhhoang/">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </li>
              </ul>

              <div className="social-links hidden-lg hidden-md hidden-sm">
                <div className="btn-group dropdown">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={() => setOpenToggle(!openToggle)}
                  >
                    <i className="fa fa-share-alt"></i>
                  </button>
                  {openToggle && (
                    <ul className="dropdown-menu dropdown-animation">
                      <li className="twitter">
                        <a href="https://twitter.com/hoangvhh">
                          <i className="fa fa-twitter"></i>
                        </a>
                      </li>
                      <li className="skype">
                        <a href="skype:hoangvhh">
                          <i className="fa fa-skype"></i>
                        </a>
                      </li>
                      <li className="linkedin">
                        <a href="https://www.linkedin.com/in/hoang-pham-6236b8b7">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </li>
                      <li className="googleplus">
                        <a href="https://plus.google.com/u/0/117715430853979848085">
                          <i className="fa fa-google-plus"></i>
                        </a>
                      </li>
                      <li className="youtube">
                        <a href="http://www.youtube.com">
                          <i className="fa fa-youtube-play"></i>
                        </a>
                      </li>
                      <li className="flickr">
                        <a href="https://www.flickr.com/photos/124606867@N06/">
                          <i className="fa fa-flickr"></i>
                        </a>
                      </li>
                      <li className="facebook">
                        <a href="https://www.facebook.com/htactive">
                          <i className="fa fa-facebook"></i>
                        </a>
                      </li>
                      <li className="pinterest">
                        <a href="https://www.pinterest.com/vhhoang/">
                          <i className="fa fa-pinterest"></i>
                        </a>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-10 col-sm-6">
            <div id="header-top-second" className="clearfix">
              <div className="header-top-dropdown">
                <div className="btn-group dropdown">
                  <button
                    type="button"
                    className="btn dropdown-toggle"
                    data-toggle="dropdown"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    <span className="fa fa-globe"></span>
                    <span className="text">{language==="en"?"English":"Tiếng Việt"}</span>
                  </button>

                  {openDropdown && (
                    <ul className="dropdown-menu dropdown-menu-right dropdown-animation">
                      <li
                        onClick={() => {
                          changeActive("en")
                          setOpenDropdown(false)
                        }}
                      >
                        <Link className="btn-link" to="/">
                          English
                        </Link>
                      </li>
                      <li
                        onClick={() => {
                          changeActive("vn")
                          setOpenDropdown(false)
                        }}
                      >
                        <Link className="btn-link" to="/">
                          Tiếng Việt
                        </Link>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ language }) => {
  return { language }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: value => dispatch({ type: `CHANGE_LANGUAGE`, language: value }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderTop)