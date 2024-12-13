import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #ffffff; // Define o fundo branco
  
  display: grid;
  grid-template-columns: 13.75rem auto;
  grid-template-areas: "menu content";

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-areas: "content";
  }
`;

export const DashBoard = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-template-rows: auto auto auto;
  grid-template-areas:
    "ChartOne ChartTwo ChartTwo"
    "ChartOne ChartTwo ChartTwo"
    "ChartThree ChartThree ChartFour";
  gap: 0.625rem;

  place-content: center;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    grid-template-columns: auto auto;
    grid-template-areas:
      "ChartOne ChartFour"
      "ChartTwo ChartTwo"
      "ChartThree ChartThree";
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-columns: auto;
    grid-template-areas:
      "ChartOne"
      "ChartTwo"
      "ChartThree"
      "ChartFour";
  }
`;
