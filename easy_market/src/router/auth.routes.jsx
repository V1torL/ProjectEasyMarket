// Importa os componentes para definir as rotas da aplicação;
import { Routes, Route } from "react-router-dom";

// Importa as páginas relacionadas ao fluxo de autenticação;
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";
import { NotFound } from "../pages/NotFound";

// Função que define as rotas relacionadas à autenticação;
export function AuthRoutes() {
  return (
    <Routes>
      {/* Rota para o caminho raiz ("/") que renderiza a página de login (SignIn) */}
      <Route path="/" element={<SignIn />} />
      
      {/* Rota para o caminho "/register" que renderiza a página de cadastro (SignUp) */}
      <Route path="/register" element={<SignUp />} />
      
      {/* Rota que renderiza a página de erro (NotFound) para qualquer caminho não definido */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
