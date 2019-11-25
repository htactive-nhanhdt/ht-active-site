import React from "./node_modules/react"
import HeaderTop from "../header-top"
import HeaderFixed from "../header-fixed"

const Header = ({ color }) => {
  return (
    <header>
      <HeaderTop />
      <HeaderFixed color={color} />
    </header>
  )
}

export default Header
