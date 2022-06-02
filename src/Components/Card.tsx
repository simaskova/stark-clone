import React from 'react';
import styled from 'styled-components';
import { theme } from '../theme';
import { StyledH3, StyledH2, StyledH5, spacer_0_375, spacer_1_5, spacer_2_75 } from '../App';
import { useNavigate } from 'react-router-dom';

const Button = React.lazy(() => import("../Components/Button"));

const CardStyled = styled.div`
  position: relative;
  font: ${theme.fontFamilies.h4};
  border: 2px solid ${theme.colors.crowblackblue};
  border-radius: 4px;
  padding: 2rem;
  margin: .8rem;
  width: 80%;
  text-align: start;
`;

export const CardStyledH3 = styled((props) => <StyledH3 {...props} />)`
  color: ${theme.colors.dimgray};
  width: 100%;
`;

const CardStyledUl = styled.ul`
  list-style-image: url("../icons/check.png");
`;

type Props = {
  type: string;
  price: string; 
  about: string;
  includes: string[];
  buttonText?: string;
  buttonId?: string;
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
}

const Card: React.FC<Props> = (props: Props) => {
  const navigate = useNavigate();
  return (
    <CardStyled>
      <CardStyledH3>{props.type}</CardStyledH3>
      <StyledH2>{!/\d/.test(props.price) ? props.price : `$${props.price}/yr`}</StyledH2>
      <StyledH5>{props.about}</StyledH5>
      <CardStyledUl>
        {props.includes.map((liInnerText, index) => {
          return (
            <li key={index}>
              <StyledH5>{liInnerText}</StyledH5>
            </li>
          )
        })}
      </CardStyledUl>
      <Button buttonHandler={() => {props.type === "team"? console.log("open mailing service") : navigate(`/sign-up`)}} id={props.buttonId} variant={props.buttonText ? "light" : "dark"} text={props.buttonText || `Subscribe for $${props.price}`} width="90%" minHeight={`${spacer_2_75}`} padding={`${spacer_0_375} ${spacer_1_5}}`} ></Button>
    </CardStyled>
  )
}

export default Card;