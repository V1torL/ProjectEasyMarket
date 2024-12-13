import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../../styles/deviceBreakpoints"

export const Container = styled.div`
  padding: 1.5625rem;
  background: ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 1rem;
  box-shadow: 0rem 0.25rem 1rem rgba(0, 0, 0, 0.2);

  grid-area: ChartFour;

  display: flex;
  flex-direction: column;
  gap: 0.625rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1rem;
  }
`

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0;
`

export const Header = styled.header`
  display: flex;
  align-items: center;

  > h3 {
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    font-size: 1.2rem;
    font-weight: 600;
    line-height: 1.75rem;

    width: 90%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > h3 {
      font-size: 1rem;
      line-height: 1.25rem;
    }
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

