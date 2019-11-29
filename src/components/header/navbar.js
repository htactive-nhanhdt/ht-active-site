import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from "gatsby"
const NavBar = ({ color, active, changeActive, menu,language, changeSlug }) => {
  const [openDrop, setOpenDrop] = useState(false)
  const engRoute = ["/", "services", "products", "blog", "contact"]
  let menuItem = []
  
  if (menu) {
    const dataUse = menu.frontmatter[`menu_${language}`] || {}
    const dataArr = Object.values(dataUse).map(item => item) || []
    menuItem = dataArr.map((item, index) => {
      return (
        <li
         key={index}
          className={`${color} ${active === `${index + 1}` ? "active" : ""} `}
          onClick={() =>{
            changeActive(`${index + 1}`)
            localStorage.setItem('active',index+1)
            
          } }
        >
          <Link to={engRoute[index]} onClick={()=> changeSlug("/")}>{item}</Link>
        </li>
      )
    })
  }

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
          <ul className="nav navbar-nav navbar-right">{menuItem}</ul>
        </div>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ active,language }) => {
  return { active,language }
}
const mapDispatchToProps = dispatch => {
  return {
    changeActive: value => dispatch({ type: `ACTIVE_NAVBAR`, active: value }),
    changeSlug: slug =>
      dispatch({ type: `CHANGE_SLUG`, slug: slug }),
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar)
