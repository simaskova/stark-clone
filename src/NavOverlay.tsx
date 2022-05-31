import React, { Dispatch, SetStateAction, useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./theme";

// style
// animation + transition

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  border-top: 1px solid ${theme.colors.gainsboro};
  padding: 16px;
  overflow: hidden;

  a {
    font-size: 0.8em;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: ${theme.colors.black};
    padding: 8px 0;
  }
`;

type Props = {
  show: boolean,
  onLinkClick: Dispatch<SetStateAction<boolean>>
}

const NavOverlay: React.FC<Props> = (props: Props) => { //Dispatch<SetStateAction<boolean>>
  const handleClick = useCallback(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (_event: React.MouseEvent<HTMLAnchorElement>) => {
      props.onLinkClick(!props.show);
    },
    [props.onLinkClick]
  );

  return (
    <DivContainer>
      <Link to="/pricing" onClick={handleClick}>
        Pricing
      </Link>
      <Link to="/blog" onClick={handleClick}>
        Blog
      </Link>
      <Link to="/community" onClick={handleClick}>
        Community
      </Link>
      <Link to="/library" onClick={handleClick}>
        Library
      </Link>
      <Link to="/support" onClick={handleClick}>
        Support
      </Link>
      <Link to="/mac-beta" onClick={handleClick}>
        Mac Beta
      </Link>
      <Link to="/login" onClick={handleClick}>
        Log in
      </Link>
    </DivContainer>
  );
}

export default NavOverlay;