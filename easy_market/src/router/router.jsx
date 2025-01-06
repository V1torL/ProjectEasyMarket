// Import responsavel por gerenciar o roteamento da aplicação no lado do cliente;
import { BrowserRouter } from "react-router-dom";

// Import responsavel por controlar informações sobre o estado de autenticação do usuário;
import { useAuth } from "../hooks/auth";

// Importa os conjuntos de rotas para a aplicação autenticada (AppRoutes) e não autenticada (AuthRoutes);
import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

// Função que define as rotas principais da aplicação;
export function Routes() {

  // Desestrutura o objeto para obter o usuário autenticado;
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {/* Se o usuário estiver autenticado, renderiza o AppRoutes, caso contrário, renderiza o AuthRoutes */}
      {user ? <AppRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}
