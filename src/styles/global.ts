import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  :root {
    // Colors
    --color-blue-600: #2563EB;
    --color-sky-50: #F0F9FF;
    --color-sky-400: #38BDF8;
    --color-sky-500: #0EA5E9;
    --color-sky-700: #0369A1;

    --color-gray-200: #c4c4cc;
    --color-gray-300: #8d8d99;
    --color-gray-500: #323238;
    --color-gray-600: #29292e;
    --color-gray-700: #121214;
    --color-gray-900: #09090a;

    // Breakpoints

    --breakpoint-small: 768px;
    --breakpoint-medium: 1024px;
    --breakpoint-large: 1440px;
    --breakpoint-extra-large: 1920px;

    // Font size

    --font-sm: clamp(0.78rem, calc(0.7rem + 0.2vw), 0.88rem); // 14.08px at 1440px resolution
    --font-lg: clamp(1.13rem, calc(0.83rem + 0.75vw), 1.5rem); // 24px at 1440px resolution

    // Spacing

    --spacing-02: clamp(0.44rem, calc(0.39rem + 0.13vw), 0.5rem);    // 8px at 1440px resolution
    --spacing-04: clamp(0.88rem, calc(0.78rem + 0.25vw), 1rem);    // 16px at 1440px resolution
    --spacing-05: clamp(1.13rem, calc(1.03rem + 0.25vw), 1.25rem); // 20px at 1440px resolution
    --spacing-06: clamp(1.31rem, calc(1.16rem + 0.38vw), 1.5rem); // 24px at 1440px resolution

    // Measures
    --border-size: 2px;
  }

  body {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    background-color: var(--color-gray-900);
    color: var(--color-sky-50);
    font-family: 'Poppins', sans-serif;
    line-height: 1.5;
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4 {
  -ms-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
}
`;

export default GlobalStyle;
