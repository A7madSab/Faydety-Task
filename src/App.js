import { BrowserRouter } from "react-router-dom"

import rtl from "jss-rtl"
import { create } from "jss"
import { jssPreset, StylesProvider, ThemeProvider } from "@material-ui/core"
import routes, { renderRoutes } from "./navigation/Index"
import useSettings from "./hooks/useSettings"
import { createTheme } from "./theme"

const jss = create({ plugins: [...jssPreset().plugins, rtl()] })

const RTL = ({ children }) => {
  return (
    <StylesProvider jss={jss}>
      {children}
    </StylesProvider>
  )
}

const App = () => {
  const { settings } = useSettings()

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    theme: settings.theme
  })

  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <BrowserRouter>
            {renderRoutes(routes)}
          </BrowserRouter>
        </StylesProvider>
      </ThemeProvider>
    </RTL>
  )
}

export default App
