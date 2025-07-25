import { createGlobalStyle } from 'styled-components';
import Colors from './Colors';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    :root {
        --vh: 100%;
        --font-family: 'Inter', sans-serif;
    }
    

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, 
    a, abbr, acronym, address, big, cite, 
    del, em, strong, dfn,  img, ins, kbd, q, s, samp,
    small, strike,  sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, menu, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    main, menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        border: 0;
        padding: 0;
        vertical-align: baseline;
        font-family: 'Inter', sans-serif;

    }
    article, aside, details, figcaption, figure,
    footer, header, hgroup, main, menu, nav, section {
        display: block;
    }
    *[hidden] {
        display: none;
    }

    body {
        touch-action: manipulation;
        background-size: 100%;
        background-repeat: repeat;
        background-color: ${Colors.white};
        display: flex;
        justify-content: center;
    }
    menu, ol, ul {
        list-style: none;
    }

    
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    * {
        box-sizing: border-box;
    } 
    html {
        font-family: var(--font-family);
        -webkit-touch-callout: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        scroll-behavior: smooth;
        font-size: 62.5%;
    }

    @media screen and (max-width: 375px) {
        html {
            font-size: 40%;
        }
    }
    
    ul, li {
        padding-left: 0rem;
        list-style: none;
    }

    
    a {
        text-decoration: none;
        color: inherit;
    }
    input, button {
        outline: none; 
        border: none;
        background-color: transparent;
    }
    button {
        cursor: pointer;
        padding: 0;
    }
    input {
        appearance: none;
        
        &:focus {
        outline: none;
        }
    }
    select{
        border: none;
        &:focus {
        outline: none;
        }
    }

    .scroll::-webkit-scrollbar {
        display: none;
    }

    .scroll {
        -ms-overflow-style: none; /* 인터넷 익스플로러 */
        scrollbar-width: none; /* 파이어폭스 */
    }

    .pageContainer {
        width: 425px;
        height: 100vh;
        padding: 0 2rem;
    }
    
    @media screen and (max-width: 424px) {
        .pageContainer {
            width: 100vw;
        }
    }
`;

export default GlobalStyle;
