import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  padding: 1.25rem;

  display: flex;
  flex-direction: column;
  justify-content: space-around;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_300};
  border: none;
  border-radius: 0.625rem;
  box-shadow: 0rem 0.25rem 1rem ${({ theme }) => theme.COLORS.BACKGROUND_400};

  > h3 {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  > p {
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  }

  > footer {
    margin-top: 0.625rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.625rem;
    align-items: center;
  }

  cursor: pointer;
  transition: 0.4s;

  &:hover {
    transform: scale(1.01);
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
  }


  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    padding: 1rem;

    > h3 {
      font-size: 1rem;
    }

    > p {
      font-size: 0.875rem;
    }

    > footer {
      gap: 0.5rem;
    }
  }
`

