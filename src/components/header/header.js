import React from "react"
import HeaderTop from "./header-top"
import HeaderFixed from "./header-fixed"

const Header = ({ menu,color,language }) => {
  return (
    <header>
      <HeaderTop />
      <HeaderFixed menu= {menu} color={color}  language={language} />
    </header>
  )
}

export default Header
