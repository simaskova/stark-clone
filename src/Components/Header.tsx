import React from "react";
import styled from "styled-components";
import { StyledH3, StyledH1, StyledP, spacer_1, spacer_0_375, spacer_1_5, spacer_2_75 } from "../App";

const Button = React.lazy(() => import("../Components/Button"));

const WrapperHeader = styled.div`
  padding: 3rem 0;
`;

const DivWrapP = styled.div`
  max-width: 548px;
`;

interface PropsHeader {
  h3text: string, 
  h1text: string, 
  ptext?: string, 
  button1text?: string, 
  button2text?: string, 
  button1handler?: (e: React.MouseEvent<HTMLButtonElement>) => void,
  button2handler?: (e: React.MouseEvent<HTMLButtonElement>) => void,
} 

const Header = (props: PropsHeader) => {

  return (
    <WrapperHeader>
      <StyledH3>{props.h3text}</StyledH3>
      <StyledH1>{props.h1text}</StyledH1>
      <DivWrapP>{props.ptext && <StyledP>{props.ptext}</StyledP>}</DivWrapP>
      {props.button1text && <Button buttonHandler={props.button1handler} variant="dark" text={props.button1text} minHeight={`${spacer_2_75}`} padding={`${spacer_0_375} ${spacer_1_5}}`} />}
      {props.button2text && <Button buttonHandler={props.button2handler} variant="light" text={props.button2text} minHeight={`${spacer_2_75}`} padding={`${spacer_0_375} ${spacer_1_5}`} margin="0 1rem" />}
    </WrapperHeader>
  )
}; 

export default Header;