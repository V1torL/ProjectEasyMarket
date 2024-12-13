import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints"

export const Container = styled.div`
  padding: 1.5625rem;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 1rem;
  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.2);

  grid-area: ChartThree;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.375rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 1rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1rem;

    gap: 0.5rem;
  }
`

export const Title = styled.div`
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 1.75rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 1rem;
    line-height: 1.25rem;
  }
`

export const Chart = styled.div`
  display: grid;
  grid-template-columns: max-content 2fr;
  height: 90%;
  gap: 2rem;

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
    grid-template-columns: max-content;
    grid-template-rows: max-content max-content;
    gap: 0.5rem;
    width: 100%;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  .bigger,
  .smaller {
    > h4 {
      text-transform: uppercase;
    }
  }

  .bigger,
  .smaller,
  .media {
    > h4 {
      font-size: 1.125rem;
      font-weight: 500;
      line-height: 2.375rem;
    }

    > p {
      display: flex;
      gap: 0.3125rem;
      align-items: center;

      font-size: 0.875rem;
      font-weight: 500;
      line-height: 1.375rem;
    }

    > svg {
      font-size: 0.9375rem;
    }
  }

  .bigger svg {
    color: red;
  }

  .smaller svg {
    color: green;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    flex-direction: row;
    justify-content: space-between;

    .bigger,
    .smaller,
    .media {
      max-width: 6.25rem;

      > h4 {
        font-size: 0.75rem;
        line-height: 1rem;
      }

      > p {
        font-size: 0.75rem;
        line-height: 1rem;
        word-wrap: break-word;
      }

      > svg {
        font-size: 0.75rem;
      }
    }
  }
`

export const Right = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    justify-content: center;
  }
`

export const Bars = styled.div`
  display: flex;

  gap: 0.625rem;

  align-items: flex-end;
  position: relative;

  &::before {
    content: "";
    display: block;
    height: 0.1875rem;
    width: 100%;
    background: rgba(74, 69, 86, 0.2);
    border-radius: 6.25rem;
    position: absolute;
    top: calc(100% - var(--percentage) - 0.3125rem - 28px);
    transform: translateY(-50%);
    z-index: 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 0.5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    gap: 0.45rem;
  }
`

