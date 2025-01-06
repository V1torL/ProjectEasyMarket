// Importa a biblioteca styled-components para criar componentes estilizados;
import styled from "styled-components"

// Importa os breakpoints;
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

// Estiliza o contêiner principal da página;
export const Container = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  min-height: 100vh;
`
// Estiliza o conteudo da página;
export const Content = styled.div`
  max-width: 1008px;
  height: 100vh;
  margin: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  > img {
    width: 31.25rem;

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      width: 9.375rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      width: 21.875rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      width: 28.125rem;
    }
  }

  > div {
    text-align: center;

    > h1 {
      font-size: 2.5rem;
      margin-bottom: 0.625rem;

      color: ${({ theme }) => theme.COLORS.YELLOW_500};

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
        font-size: 2rem;
      }
    }

    > p {
      font-size: 1rem;

      margin-bottom: 3rem;
    }

    > button {
      background: ${({ theme }) => theme.COLORS.YELLOW_400};
      border-radius: 1rem;
      box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.2);
      border: none;

      padding: 0.75rem 1.375rem;

      color: ${({ theme }) => theme.COLORS.WHITE};

      cursor: pointer;

      transition: 0.4s;

      &:hover {
        background: ${({ theme }) => theme.COLORS.YELLOW_200};

        transform: scale(1.05);
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    max-width: 18.75rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 25rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 50rem;
  }
`

