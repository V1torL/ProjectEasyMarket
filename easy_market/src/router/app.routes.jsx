// Importa os componentes para definir as rotas da aplicação;
import { Routes, Route } from "react-router-dom";

// Importa as páginas que serão usadas na aplicação;
import { Notes } from "../pages/Notes";
import { Dashboard } from "../pages/Dashboard";
import { NotFound } from "../pages/NotFound";
import { NewNote } from "../pages/NewNote";
import { PreviewNote } from "../pages/PreviewNote";

// Função que define as rotas principais da aplicação;
export function AppRoutes() {
  return (
    <Routes>
      {/* Rota para o caminho raiz ("/") que renderiza a página de Notas */}
      <Route path="/" element={<Notes />} />
      
      {/* Rota "/new-note" que renderiza a página de criação de nova nota */}
      <Route path="/new-note" element={<NewNote />} />
      
      {/* Rota "/preview-note" que renderiza a página de visualização de nota */}
      <Route path="/preview-note" element={<PreviewNote />} />
      
      {/* Rota "/dashboard" que renderiza o painel de controle (Dashboard) */}
      <Route path="/dashboard" element={<Dashboard />} />
      
      {/* Rota que renderiza a página de erro (NotFound) para qualquer caminho não definido */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
