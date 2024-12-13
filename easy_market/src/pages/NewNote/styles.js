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

export const Record = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  padding: 0.625rem;

  > div {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1.25rem;
    padding: 1.25rem;

    > p {
      font-size: 1rem;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;

    > div {
      width: 100%;
    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;

  input {
    flex: 1;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`