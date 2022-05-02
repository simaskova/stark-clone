import React, { useCallback } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { theme } from "./theme";
import { spacer_full, spacer_half } from "./App";

// style
// animation + transition

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  border-top: 1px solid ${theme.colors.lightgray};
  padding: ${spacer_full};

  a {
    font-family: ${theme.fonts.basic};
    font-size: 0.8em;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    color: ${theme.colors.black};
    padding: ${spacer_half} 0;
  }
`;

export default function NavOverlay({ show: any, onLinkClick }) {
  const handleClick = useCallback(
    (event) => {
      onLinkClick(!show);
    },
    [onLinkClick]
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
