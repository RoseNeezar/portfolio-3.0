import React, { FC, useContext } from "react"
import { ThemeProvider } from "styled-components"
import { LightTheme } from "../theme"

const MainLayout: FC = ({ children }) => {
  return <ThemeProvider theme={LightTheme}>{children}</ThemeProvider>
}

export default MainLayout
