import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';

const GlobalStyles = createGlobalStyle`
  ${normalize};

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;

  }
  body {
    font-family: ${props => props.theme.fonts.main};
    font-size: 1.6rem;
    background: ${props => props.theme.colors.background1};
    color: ${props => props.theme.colors.primary1};
    cursor: default;

  }
  body {
    animation: theme 21s linear infinite;
    
    &:after,
    &:before {
        content: '';
        display: block;
        position: fixed;
        z-index: -1;
        top: 0;
        width: 100vw;  // IE/Edge
        height: 100vh; // fallback
        width: 100vmax;
        height: 100vmax;
        background: rgba(0,0,0,0.05);
        animation: background 90s linear infinite;
    }

    &:after {
        left: 15vw;
    }

    &:before {
        right: 15vw;
        animation-delay: -30s;
        animation-direction: reverse;
    }
}

@keyframes theme {
    0% {
        background: #79a7d3;
    }
    
    16% {
        background: #79a7d3;
    }
    
    33% {
        background: hsl(232.7,27.3%,23.7%);
    }
    
    50% {
        background: hsl(232.7,27.3%,23.7%);
    }
    
    66% {
        background: hsl(232.7,27.3%,23.7%);
    }    
    
    83% {
        background: #79a7d3;
    }

    100% {
        background: #79a7d3;
    }
}

@keyframes background {
    0% {
        transform: rotate(0deg);
    }
    
    100% {
        transform: rotate(360deg);
    }
}

  h1,h2,h3,h4,h5,h6,button {
    font-family: ${props => props.theme.fonts.title};
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
  @font-face{
    font-family: OpenSans;
    src: /public/images/OpenSans.tff;
  }

`;

export default GlobalStyles;