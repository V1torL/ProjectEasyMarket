import React from "react"
import ReactDOM from "react-dom/client"

import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/globalStyles"
import { AuthProvider } from "./hooks/auth"
import theme from "./styles/theme"
import { PopupProvider } from "./hooks/PopupProvider"

import { Routes } from "./router/router"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <PopupProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </PopupProvider>
    </ThemeProvider>
  </React.StrictMode>
)
