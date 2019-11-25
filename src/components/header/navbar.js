import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
const NavBar = ({ color, active, changeActive }) => {
  const [openDrop, setOpenDrop] = useState(false)

  return (
    <nav className="navbar navbar-default" role="navigation">
      <div className="container-fluid">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setOpenDrop(!openDrop)}
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>

        <div
          className="collapse navbar-collapse"
          style={{ display: `${openDrop ? "block" : "none"}` }}
        >
          <ul className="nav navbar-nav navbar-right">
            <li
              className={`${color} ${active === "1" ? "active" : ""} `}
              onClick={() => changeActive("1")}
            >
              <Link to="/">Home</Link>
            </li>
            <li
              className={`${color} ${active === "2" ? "active" : ""} `}
              onClick={() => changeActive("2")}
            >
              <Link to="/services">Service</Link>
            </li>
            <li
              className={`${color} ${active === "3" ? "active" : ""} `}
              onClick={() => changeActive("3")}
            >
              <Link to="/portfolio">Portfolios</Link>
            </li>
            <li
              className={`${color} ${active === "4" ? "active" : ""} `}
              onClick={() => changeActive("4")}
            >
              <Link to="/blog">Blogs</Link>
            </li>
            <li
              className={`${color} ${active === "5" ? "active" : ""} `}
              onClick={() => changeActive("5")}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ active }) => {
  return { active }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: value => dispatch({ type: `ACTIVE_NAVBAR`, active: value }),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
