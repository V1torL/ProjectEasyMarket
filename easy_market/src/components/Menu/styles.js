import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
  grid-area: menu;
  width: 100%;
  height: 100vh;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND};

  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  justify-content: start;

  padding: 1.6rem;

  > img {
    width: 9.375rem;
    margin: 0 auto;
  }

  position: relative;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-area: none;
    position: absolute;
    z-index: 1;

    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;

    &[data-menu-is-open="true"] {
      transform: translateX(0);
    }
  }
`

export const Nav = styled.nav`
  > ul {
    display: flex;
    flex-direction: column;
    gap: 0.94rem;

    list-style: none;
    text-decoration: none;

    > li {
      > a {
        font-size: 1.25rem;
        color: ${({ theme }) => theme.COLORS.WHITE};

        transition: 0.4s;

        > svg {
          margin-right: 0.625rem;
        }
      }

      > a:hover {
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.YELLOW_100};
      }
    }
  }
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 0.875rem;

  margin-top: auto;

  > div {
    display: flex;
    flex-direction: column;

    > button:nth-child(1) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      margin-bottom: 0.5rem;

      opacity: 0.8;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }

    > button:nth-child(2) {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      justify-content: start;

      opacity: 0.5;
      transition: 0.2s;

      &:hover {
        opacity: 1;
      }
    }
  }

  > img {
    width: 3.375rem;
    height: 3.375rem;
    border-radius: 50%;
    cursor: pointer;
  }
`

export const Close = styled.button`
  background: transparent;
  border: none;

  color: ${({ theme }) => theme.COLORS.YELLOW_300};
  font-size: 1.75rem;
  cursor: pointer;

  position: absolute;
  top: 2.5%;
  right: 5%;
`

