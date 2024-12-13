import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-radius: 0.625rem;
  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_500};

  transition: 0.2s;

  &:focus-within {
    border: 1px solid ${({ theme }) => theme.COLORS.YELLOW_200};
  }

  > input {
    height: 3.125rem;
    width: 100%;

    padding: 0.75rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    background: transparent;
    border: 0;

    display: flex;
    align-items: center;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    }
  }

  > svg {
    margin-left: 1rem;
    font-size: 1rem;
  }

  .controlPassword {
    margin-right: 0.75rem;
    cursor: pointer;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > input {
      height: 2.5rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > input {
      height: 2rem;

      padding: 0.5rem;
      font-size: 0.75rem;

      &::placeholder {
        font-size: 0.75rem;
      }
    }
  }
`
