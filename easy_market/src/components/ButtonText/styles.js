import styled from "styled-components"

export const Container = styled.button`
  display: flex;
  align-items: center;

  background: none;
  color: ${({ theme }) => theme.COLORS.YELLOW_700};

  border: none;
  font-size: 1rem;
  cursor: pointer;

  margin-bottom: 0.625rem;

  > svg {
    margin-right: 0.5rem;
  }
`