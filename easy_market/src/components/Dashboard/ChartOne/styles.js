import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints"

export const Container = styled.div`
  padding: 1.5625rem;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 1rem;
  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.2);

  grid-area: ChartOne;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1rem;
  }
`

export const Chart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 1rem;

  > h3 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 1.125rem;
    font-weight: 600;
    line-height: 1.75rem;
    text-align: center;
  }

  .tooltip {
    pointer-events: none;
    position: absolute;
    font-size: 0.875rem;
    text-align: center;
    background: #736a3c;
    padding: 0.625rem 0.9375rem;
    z-index: 5;
    height: 3.125rem;
    line-height: 1.875rem;
    margin: 0 auto;
    color: white;
    border-radius: 0.3125rem;
    transform: translateX(-50%);
    display: none;
  }

  .tooltip.active {
    display: block;

    //animation: fadeIn 0.3s ease-in-out forwards;
    //animation: slideIn 0.3s ease-in-out forwards;
    animation: bounce 0.6s ease forwards;
  }

  .tooltip:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    width: 0;
    height: 0;
    margin-left: -0.625rem;
    border-left: 0.625rem solid transparent;
    border-right: 0.625rem solid transparent;
    border-top: 0.625rem solid #736a3c;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes slideIn {
    from {
      transform: translate(-50%, 10px);
      opacity: 0;
    }
    to {
      transform: translate(-50%, 0);
      opacity: 1;
    }
  }

  @keyframes bounce {
    0% {
      transform: translate(-50%, 20px);
      opacity: 0;
    }
    60% {
      transform: translate(-50%, -10px);
      opacity: 1;
    }
    80% {
      transform: translate(-50%, 5px);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > h3 {
      font-size: 1rem;
      line-height: 1.25rem;
    }
  }
`

export const Donut = styled.div`
  display: grid;
  place-content: center;

  position: relative;

  > svg {
    border-radius: 50%;
    width: 11.5625rem;
    height: 11.5625rem;
    transform: rotate(
      -90deg
    ); /*Faz com o que o circulo inicia no top, se não ficava iniciando na direito no meio*/

    > circle {
      /*Propriedades para fazer sumir o circulo e assim conseguir animar*/
      stroke-dasharray: 471; /* 197 vezes pi(3,14) */
      stroke-dashoffset: 471; /* 197 vezes pi(3,14) */
      stroke-width: 35; /*circunferência do circulo*/
      fill: none; /*Circulo ser vazado, sem preenchimento*/
      transition: 0.5s;
    }

    /*Circulo de baixo*/
    .circleTotal {
      stroke-dashoffset: 0;

      cursor: pointer;

      &:hover {
        stroke: black;
      }
    }

    /*Circulo de cima*/
    .circleSpent {
      stroke-dashoffset: calc(
        471 - (471 * var(--percentage)) / 100
      ); /*Calculo para ajustar o tamanho do circulo*/

      stroke-linecap: round; /*Arredondar as pontas do circulo, mas não é funcional quando está a cima de 90%.*/

      animation: progress 2s ease-in-out;
    }

    /*Animação do circulo*/
    @keyframes progress {
      from {
        stroke-dashoffset: 471;
        stroke-dasharray: 471;
      }
    }
  }

  .percentage {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    > h3 {
      font-size: 1.25rem;
      line-height: 1.375rem;
    }

    > p {
      font-size: 0.875rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > svg {
      width: 8rem;
      height: 8rem;
    }

    .percentage {
      > h3 {
        font-size: 1rem;
        line-height: 1rem;
      }

      > p {
        font-size: 0.75rem;
      }
    }
  }
`

export const Legend = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;

  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;

  margin-top: auto;

  .item {
    display: flex;
    gap: 0.3125rem;
    align-items: center;
  }

  .circulo1 {
    width: 1rem;
    height: 1rem;
    display: block;
    background: #4a4556;
    border-radius: 999px;
  }

  .circulo2 {
    width: 1rem;
    height: 1rem;
    display: block;
    background: linear-gradient(122deg, #595437 0%, #f2cb05 100%);
    border-radius: 999px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 1rem;

    font-size: 0.75rem;
    line-height: 1rem;
  }
`

export const NoSpent = styled.div`
  max-width: 200px;

  width: 100%;
  height: 100%;

  text-align: center;

  > h1 {
    margin: 1.25rem 0;
  }

  > svg {
    margin-top: 1.25rem;
    font-size: 3rem;
  }
`

export const NoInfo = styled.div`
  text-align: center;

  width: 250px;

  > p {
    margin-bottom: 1.25rem;
  }

  > svg {
    font-size: 3rem;
    margin: 1.25rem 0;
  }
`

