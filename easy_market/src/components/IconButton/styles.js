import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.button`
  background: ${({ theme, disabled }) =>
    disabled ? theme.COLORS.BACKGROUND_300 : theme.COLORS.BACKGROUND_500};

  border: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_100};
  border-radius: 0.625rem;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.COLORS.BACKGROUND_100};
  font-size: 1rem;
  padding: 0.32rem;

  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`
