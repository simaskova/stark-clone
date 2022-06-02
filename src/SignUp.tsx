import React from "react";
import styled from "styled-components";
import { StyledH2 } from "./App";
import { theme } from "./theme";

const SignUpContainer = styled.div`
  position: absolute;
  left: 0;
  display: flex;
  align-items: center;
  height: 100vh;
  width: 100vw;
  max-width: 960px;
  overflow-x: hidden;
  color: ${theme.colors.crowblackblue};
  /* border: 2px solid black; */

  
  /* Hide scrollbar for Chrome, Safari and Opera */
  /* ::-webkit-scrollbar {
    display: none;
  } */
  /* Hide scrollbar for IE, Edge and Firefox */
  /* IE and Edge */
  -ms-overflow-style: none; 
  /* Firefox */
  scrollbar-width: none; 

  aside, main { width: 100% }
  aside {
    height: 100%;
    padding: 2rem 0;
    background: ${theme.colors.oldlace};
    /* border: 2px solid red; */
  }
  main {
    height: 100%;
    background: ${theme.colors.ghostwhite};
    /* border: 2px solid blue; */
  }
`;

const SignUp: React.FC = () => {
  return (
    <SignUpContainer>
      <aside>
          <StyledH2>Make the world’s products accessible</StyledH2>
          <img src="https://account.getstark.co/assets/images/public-illo.png" alt="helping-a-person-with-crutches" width="600" />
      </aside>
      <main>

      </main>
    </SignUpContainer>
  )
}

export default SignUp;
