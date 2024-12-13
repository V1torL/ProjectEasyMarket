import styled from "styled-components"
import { DEVICE_BREAKPOINTS } from "../../../../styles/deviceBreakpoints"

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f2cb05;
  padding: 0.625rem;

  > p {
    width: 250px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  &:nth-child(1) {
    --delay: 0.4s;
    animation: appear 0.4s var(--delay) backwards;
  }

  &:nth-child(2) {
    --delay: 0.8s;
    animation: appear 0.4s var(--delay) backwards;
  }

  &:nth-child(3) {
    --delay: 1.2s;
    animation: appear 0.4s var(--delay) backwards;
  }

  &:nth-child(4) {
    --delay: 1.6s;
    animation: appear 0.4s var(--delay) backwards;
  }

  &:nth-child(5) {
    --delay: 2s;
    animation: appear 0.4s var(--delay) backwards;
  }

  @keyframes appear {
    0% {
      opacity: 0;
      transform: scale(0.7);
    }

    50% {
      transform: scale(1.2);
    }
  }

  .quantidade {
    color: red;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 0.875rem;
  }
`

