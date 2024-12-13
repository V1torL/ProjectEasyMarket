import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  padding: 0.3125rem 0.625rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-size: 0.875rem;

  background-color: ${({ theme }) => theme.COLORS.YELLOW_500};
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.BACKGROUND_400};
  border: none;
  border-radius: 0.5rem;

  white-space: nowrap;

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 0.3125rem;

    font-size: 0.625rem;
  }
`

