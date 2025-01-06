// Importa a biblioteca axios para realizar requisições HTTP;
import axios from "axios"

// Cria uma instância personalizada do axios para a API;
export const api = axios.create({
  // Define a URL base para as requisições, que é obtida de uma variável de ambiente ('VITE_BASE_URL');
  baseURL: import.meta.env.VITE_BASE_URL,
})
