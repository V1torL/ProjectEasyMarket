// Importa a biblioteca styled-components para criar componentes estilizados;
import styled from "styled-components"

// Importa os breakpoints;
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

// Estiliza o cabeçalho;
export const Header = styled.header`
  text-align: left;
  font-size: 1rem;
  font-weight: bold;
  margin-top: 2rem;
  margin-left: 3rem;
  color: #333; // Ajuste a cor conforme o tema da aplicação
`;

// Estiliza o contêiner principal da página;
export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 13.75rem auto;
  grid-template-areas: "menu content";

  background-color: #fff; /* Define o fundo branco para o Container */

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-areas: "content";
  }
`;

// Estiliza a área de busca das notas;
export const Search = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`;

// Estiliza a lista de notas;
export const List = styled.div`
  margin-top: 1.875rem;
  padding: 0.625rem;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  place-content: center;
  gap: 1.875rem 1.25rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-columns: 1fr 1fr;
    margin-top: 1.25rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-columns: 1fr;
    margin-top: 1rem;
  }
`;

// Estiliza o botão para carregar mais notas;
export const More = styled.div`
  width: 100%;
  margin-top: 1.25rem;
  text-align: center;

  > button {
    width: 12.5rem;
    height: 3.125rem;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_700};
    border: none;
    border-radius: 6.25rem;
    box-shadow: 0 1.25rem 0.625rem -0.625rem ${({ theme }) => theme.COLORS.BACKGROUND_800};

    font-size: 1.125rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.COLORS.YELLOW_400};
      box-shadow: 0 0 0.125rem ${({ theme }) => theme.COLORS.YELLOW_100};
      filter: saturate(120%);
      transform: scale(1.01);
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > button {
      width: 8rem;
      height: 2.5rem;
      font-size: 1rem;
    }
  }
`;
