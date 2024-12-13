import styled, { keyframes } from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: inline-block;
  width: 2.125rem;
  height: 2.125rem;
  border: 0.25rem solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  animation: ${spin} 1s ease-in-out infinite;

  &.spinButton {
    width: 1.125rem;
    height: 1.125rem;
    border: 2px solid rgba(255, 255, 255, 0.3);
    border-top-color: ${({ theme }) => theme.COLORS.WHITE};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 1.75rem;
    height: 1.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 1.5rem;
    height: 1.5rem;
  }
`

