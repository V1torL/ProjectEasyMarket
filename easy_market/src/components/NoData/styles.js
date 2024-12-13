import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  margin: 3.125rem auto 0;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  > div {
    width: 40%;

    text-align: center;

    > h1 {
      font-size: 1.875rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      margin-bottom: 1.25rem;
    }

    > p {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }

  .home {
    height: 25.75rem;
    width: 25.75rem;
  }

  .dashboard {
    height: 25.75rem;
    width: 25.75rem;
  }

  .note {
    height: 18.75rem;
    width: 18.75rem;
  }

  .list {
    height: 18.75rem;
    width: 18.75rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    > div {
      width: 100%;

      > h1 {
        font-size: 1.5rem;
      }

      > p {
        font-size: 0.875rem;
      }
    }

    .home {
      display: none;
    }

    .dashboard {
      display: none;
    }

    .note {
      display: none;
    }

    .list {
      display: none;
    }
  }
`

