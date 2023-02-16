import styled, { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyles = createGlobalStyle`
    ${reset}

    html {
    scroll-behavior: smooth;
    }
    p, a, span, h3, h4, div, input, label, textarea {
        font-family: "Spoqa Han Sans Neo", "Spoqa Han Sans JP", sans-serif;
        color: #12121D;
    }
`;
