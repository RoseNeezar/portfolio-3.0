import React, { FC, useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
import { colorE } from "../constants/colorEnum"

interface ILayout {
  navColor?: colorE
}
const Layout: FC<ILayout> = ({ children, navColor }) => {
  const [openSidebar, setOpenSidebar] = useState(false)
  const toggle = () => {
    setOpenSidebar(!openSidebar)
  }
  return (
    <>
      <Navbar navColor={navColor} toggle={toggle} />
      <Sidebar isOpen={openSidebar} toggle={toggle} />
      {children}
      <Footer />
    </>
  )
}

export default Layout
