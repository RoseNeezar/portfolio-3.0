import React, { FC } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
interface ILayout {}
const Layout: FC<ILayout> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  )
}

export default Layout
