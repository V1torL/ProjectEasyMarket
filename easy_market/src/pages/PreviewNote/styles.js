import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 13.75rem auto;
  grid-template-areas: "menu content";

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;

    grid-template-areas: "content";
  }
`

export const Nota = styled.div`
  width: 100%;

  > div {
    display: flex;
    gap: 0.625rem;
    align-items: center;

    p {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

      display: flex;
      gap: 0.3125rem;
      align-items: center;
    }
  }

  > footer {
    display: flex;
    gap: 0.625rem;
    align-items: center;

    margin-top: 0.625rem;
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  box-shadow: 0 0.625rem 1.25rem -0.625rem ${({ theme }) => theme.COLORS.BACKGROUND_900};

  margin-top: 1.25rem;

  border-radius: 0.625rem;

  > thead {
    background-color: ${({ theme }) => theme.COLORS.YELLOW_300};

    > tr th {
      font-size: 1.25rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }

    > tr th:first-child {
      border-top-left-radius: 0.625rem;
    }

    > tr th:last-child {
      border-top-right-radius: 0.625rem;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      > tr th {
        font-size: 0.875rem;
        font-weight: 400;
      }
    }
  }

  > tbody {
    text-align: center;
    font-size: 1rem;
    color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    > tr td {
      padding: 0.3125rem;
    }

    > tr:nth-child(odd) {
      background: #ddd;
    }

    > tr:nth-child(even) {
      background: #eee;
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      font-size: 0.75rem;
    }
  }

  > tfoot {
    background-color: ${({ theme }) => theme.COLORS.YELLOW_300};

    > tr td {
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.COLORS.WHITE};
      padding: 0.625rem;
    }

    > tr td:first-child {
      border-bottom-left-radius: 0.625rem;
    }

    > tr td:last-child {
      border-bottom-right-radius: 0.625rem;

      text-align: end;
    }

    .pagination {
      display: inline-flex;
      align-items: center;
      gap: 0.75rem;

      > div {
        display: flex;
        gap: 0.625rem;
        justify-content: center;
      }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
      > tr td {
        font-size: 0.875rem;
      }

      .pagination {
        display: block;
        text-align: center;
        > div {
          margin-top: 0.5rem;
        }
      }
    }
  }
`

export const Remove = styled.div`
  width: 100%;
  margin-top: 1.25rem;
  text-align: center;

  > button {
    width: 12.5rem;
    height: 3.125rem;
    background-color: ${({ theme }) => theme.COLORS.YELLOW_700};
    border: none;
    border-radius: 6.25rem;
    box-shadow: 0 1.25rem 0.625rem -0.625rem ${({ theme }) => theme.COLORS.BACKGROUND_800};

    font-size: 1.125rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    cursor: pointer;
    transition: 0.4s;

    &:hover {
      background: ${({ theme }) => theme.COLORS.YELLOW_400};
      box-shadow: 0 0 0.125rem ${({ theme }) => theme.COLORS.YELLOW_100};
      filter: saturate(120%);
      transform: scale(1.01);
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    > button {
      width: 8rem;
      height: 2.5rem;

      font-size: 1rem;
    }
  }
`
