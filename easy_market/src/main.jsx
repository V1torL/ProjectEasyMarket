// Importa o React e a biblioteca ReactDOM;
import React from "react"
import ReactDOM from "react-dom/client"

// Import responsavel por gerenciar a navegação entre as paginas;
import { Routes } from "./router/router"

// Imports responsaveis pela autenticação e pop-ups, respectivamente;
import { AuthProvider } from "./hooks/auth"
import { PopupProvider } from "./hooks/PopupProvider"

// Importa os temas e estilos do site;
import { ThemeProvider } from "styled-components"
import GlobalStyles from "./styles/globalStyles"
import theme from "./styles/theme"

// Renderiza o React no DOM;
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
