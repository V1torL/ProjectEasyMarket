import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.section`
  grid-area: content;
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_100};

  margin-top: 1rem;
  border-radius: 1.5625rem 0 0 0;

  padding: 1rem 1.875rem;

  overflow-y: scroll;

  > header {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 0.625rem;

    > h1 {
      font-size: 1.5625rem;
      color: ${({ theme }) => theme.COLORS.YELLOW_700};
    }

    > svg {
      display: none;
      font-size: 1.25rem;
      color: ${({ theme }) => theme.COLORS.YELLOW_700};
    }
  }

  &::-webkit-scrollbar {
    width: 0.625rem;
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.YELLOW_700};
    border-radius: 3.125rem;
    margin-right: 0.5rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({ theme }) => theme.COLORS.YELLOW_300};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    margin-top: 0;

    border-radius: 0;

    padding: 1rem;

    > header {
      > h1 {
        font-size: 1.5rem;
      }

      > svg {
        display: block;

        cursor: pointer;
      }
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    margin-top: 0;

    border-radius: 0;

    padding: 1rem;

    > header {
      > h1 {
        font-size: 1.25rem;
      }

      > svg {
        display: block;
      }
    }
  }
`
