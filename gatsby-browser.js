import "./src/css/main.css"
import React from "react"
import { ThemeProvider } from "styled-components"
import { LightTheme, GlobalStyles } from "./src/theme"

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={LightTheme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
)
