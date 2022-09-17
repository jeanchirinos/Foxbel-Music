import { createGlobalStyle, css } from 'styled-components'
import '@fontsource/quicksand'
import '@fontsource/quicksand/700.css'
import { MD } from './breakpoints'

export default createGlobalStyle(
  () => css`
    *,
    ::before,
    ::after {
      box-sizing: border-box;
      margin: 0;
    }

    :root {
      --primary: #eb5757;
      --dark-red-secondary: #662323;
      --primary-red: #e86060;
      --inline-padding: 1rem;
      --soft-gray: #bdbdbd;

      @media (min-width: ${MD}) {
        --inline-padding: 2.5rem;
      }
    }

    html {
      --bg: white;
      --color: black;
      --opposite: black;
      --scrollbar: rgba(0, 0, 0, 0.2);

      &.dark {
        --bg: rgb(26, 26, 26);
        --color: white;
        --scrollbar: rgba(255, 255, 255, 0.2);
        --opposite: white;
      }
    }

    ::-webkit-scrollbar {
      background-color: transparent;
      width: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--scrollbar);
      border-radius: 10px;
    }

    ::selection {
      background: rgba(231, 104, 0, 0.2);
    }

    body {
      font-family: 'Quicksand', system-ui;
      background-color: var(--bg);
      color: var(--color);

      &.with-transition {
        transition: background-color 0.3s, color 0.3s;
      }
    }

    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      color: inherit;
      font: inherit;
      padding: 0;

      transition: transform 0.1s ease-in-out, opacity 0.2s ease-in-out;

      &:active {
        transform: scale(0.9);
      }
      &:hover {
        opacity: 0.7;
      }
    }

    a {
      color: var(--primary);
    }

    h2 {
      line-height: 1.8;
    }

    .bold {
      font-weight: 700;
      font-size: 14px;
    }

    .light {
      font-size: 12px;
    }

    .main-btn {
      border: 1px solid transparent;
      background-color: var(--primary-red);
      color: white;
      border-radius: 100px;
      padding: 0.4rem 1.25rem;
    }

    .alt-btn {
      border: 1px solid #eb5757;
      color: #eb5757;
      border-radius: 100px;
      padding: 0.4rem 1.25rem;
    }

    .play-icon {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 2rem;
    }
  `
)
