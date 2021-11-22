import { createGlobalStyle } from "styled-components";

export const colors = {
    primary: '#FFC93F',
};

export const GlobalStyle = createGlobalStyle`
    body {
        background: #222;
        color: #ffffff;
    };

    body, input {
        font-family: 'Roboto', sans-serif;
    }
`;