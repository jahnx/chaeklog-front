import palette from 'lib/styles/palette';
import { createGlobalStyle } from 'styled-components';
import { reset } from 'styled-reset';

export const GlobalStyle = createGlobalStyle`
    ${reset}
    :focus {
        outline: none;
        border: none;
    }
    ::-webkit-scrollbar {
        display: none;
    }

    * {
        box-sizing: border-box;
    }

    html{
        font-size: 11px;
        -webkit-text-size-adjust: none;
        font-family: -apple-system,BlinkMacSystemFont,helvetica,Apple SD Gothic Neo,sans-serif;       
        font-display: fallback;
        -ms-overflow-style: none;
        scrollbar-width: none;
    }

    body {
        max-width: 1000px;
        width: 100%;
        margin: 20px auto;
        background-color: ${palette.gray[2]}

    }

    button {
        background: none;
        padding: 0;
        border: none;
        cursor: pointer;
        &:disabled {
            cursor: default;
            fill: #f2f3f4;
        }
    }

    a {
        color: inherit;
        text-decoration: none; 
        outline: none

        &:hover,
        &:active {
            text-decoration: none;
        }
    }
`;
