import { createGlobalStyle } from 'styled-components';
import ArminGrotesk from './ArminGrotesk/Fontspring-DEMO-armingrotesk-regular.otf';
import ArminGroteskBlack from './ArminGrotesk/Fontspring-DEMO-armingrotesk-black.otf';
import ArminGroteskSemibold from './ArminGrotesk/Fontspring-DEMO-armingrotesk-semibold.otf';
import ArminGroteskUltrabold from './ArminGrotesk/Fontspring-DEMO-armingrotesk-ultrabold.otf';

export default createGlobalStyle`
    @font-face {
        font-family: 'Armin Grotesk Regular';
        src: local('Armin Grotesk Regular'), local('ArminGroteskRegular'),
          url(${ArminGrotesk}) format('opentype');
        font-weight: 400;
        font-style: normal;
    }
    @font-face {
        font-family: 'Armin Grotesk Black';
        src: local('Armin Grotesk Black'), local('ArminGroteskBlack'),
          url(${ArminGroteskBlack}) format('opentype');
        font-weight: 900;
        font-style: normal;
    }
    @font-face {
        font-family: 'Armin Grotesk Semibold';
        src: local('Armin Grotesk Semibold'), local('ArminGroteskSemibold'),
          url(${ArminGroteskSemibold}) format('opentype');
        font-weight: 500;
        font-style: normal;
    }
    @font-face {
      font-family: 'Armin Grotesk Ultrabold';
      font-style: normal;
      font-weight: 700;
      src: local('Armin Grotesk Ultrabold'), local('ArminGroteskUltrabold'),
          url(${ArminGroteskUltrabold}) format('opentype');
    }
    @font-face {
      font-family: 'Roboto Mono';
      font-style: normal;
      font-weight: 700;
      font-display: swap;
      src: url(https://fonts.gstatic.com/s/robotomono/v21/L0xuDF4xlVMF-BfR8bXMIhJHg45mwgGEFl0_Of2_ROW4.woff2) format('woff2');
      unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }
`;