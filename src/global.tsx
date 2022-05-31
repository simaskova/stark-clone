import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        outline:0;
        box-sizing:border-box;
        font-family: 'Open Sans', sans-serif; 
    }
    #root{
        margin:0 auto;
        background: ${theme.colors.ghostwhite};
    }
`;
