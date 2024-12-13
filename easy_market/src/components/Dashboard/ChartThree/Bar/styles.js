import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../../../styles/deviceBreakpoints"

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: end;

  z-index: 1;

  cursor: pointer;

  > span {
    font-size: 0.85rem;
    text-transform: uppercase;
    margin-top: 0.3125rem;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  .bar {
    width: 0.9375rem;
    background: linear-gradient(180deg, #8c7f3b 0%, #f2cb05 100%);
    border-radius: 6.25rem;

    margin: 0.3125rem auto 0;

    animation: up 1.4s;

    @keyframes up {
      0% {
        height: 0;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    height: 200px;

    gap: 0.15rem;

    > span {
      font-size: 0.625rem;
    }

    .bar {
      width: 0.625rem;
    }
  }
`
