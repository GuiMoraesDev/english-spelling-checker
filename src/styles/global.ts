import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;

    outline: 0;
  }

  html { font-size: 62.5% }

  body {
    font-size: ${({ theme }) => theme.sizes.common.x4};
  
    color: ${({ theme }) => theme.themeColors.text};
    background-color: ${({ theme }) => theme.themeColors.canvas};
  }

  html, body, #__next {
    min-width: 100vw;
    min-height: 100vh;

    font-family: ${({ theme }) => theme.typography.fontFamily.body};

    ${({ theme }) => theme.typography.variants.body1};

    -webkit-font-smoothing: antialiased;

    scroll-behavior: smooth;
  }

  body, input, button, textarea {
    font-family: ${({ theme }) => theme.typography.fontFamily.body};
  }

  strong {
    font-weight: 600;
  }

  h1 {
    ${({ theme }) => theme.typography.variants.heading1};
  }

  h2 {
    ${({ theme }) => theme.typography.variants.heading2};
  }

  h3 {
    ${({ theme }) => theme.typography.variants.heading3};
  }

  h4 {
    ${({ theme }) => theme.typography.variants.heading4};
  }

  h5 {
    ${({ theme }) => theme.typography.variants.heading5};
  }

  a, button {
    background: transparent;

    cursor: pointer;

    &[disabled] {
      cursor: not-allowed;
    }
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors.neutrals["400"]};
  }

  img {
    object-fit: cover;

    word-break: break-all;
  }
`;
