// Importa a biblioteca styled-components para criar componentes estilizados;
import styled from "styled-components"

// Importa uma imagem de fundo que será usada na página;
import image from "../../assets/background.jfif"

// Importa os breakpoints;
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

// Estiliza o contêiner principal da página;
export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

// Estiliza o formulário;
export const Form = styled.form`
  width: 34.375rem;
  padding: 0 6.25rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.875rem;
  align-items: center;

  text-align: center;

  > img {
    width: 17.2rem;
  }

  > h2 {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > input {
    width: 18.75rem;
  }

  .back {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    transition: 0.4s;

    &:hover {
      color: ${({ theme }) => theme.COLORS.YELLOW_100};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    width: 43.75rem;
    margin: 0 auto;
  }
`

// Estiliza a imagem de fundo da página;
export const BackgroundImg = styled.div`
  flex: 1;
  background: url(${image}) no-repeat center center;
  background-size: cover;

  display: block;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    display: none;
  }
`
