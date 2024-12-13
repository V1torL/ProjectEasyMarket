import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints"

export const Container = styled.div`
  grid-area: ChartTwo;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto auto;
  gap: 0.625rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    padding: 0.625rem;
    background: ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 1rem;
    box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.2);

    > img {
      width: 6.25rem;
      height: 6.25rem;

      border-radius: 0.375rem;
    }

    > div {
      .name {
        font-size: 1rem;
        margin-bottom: 0.3125rem;
        font-weight: 500;
      }

      .spent {
        font-size: 1.25rem;
        margin-bottom: 0.3125rem;
        font-weight: 600;
      }

      .address {
        font-size: 0.75rem;
      }
    }
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    gap: 1rem;

    > div {
      gap: 1rem;

      > img {
        width: 4.5rem;
        height: 4.5rem;
      }

      > div {
        > h3 {
          font-size: 1rem;
        }

        > p {
          font-size: 0.875rem;
        }
      }
    }
  }
`

export const NoData = styled.div`
  grid-area: ChartTwo;

  padding: 1.5625rem;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 1rem;
  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.2);

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

