import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
    body {
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-areas:
      "heade heade"
      "sidebar main ";
  }
`
