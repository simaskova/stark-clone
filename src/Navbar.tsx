import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./theme";
import { MdLocalFireDepartment } from "react-icons/md";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import NavOverlay from "./NavOverlay";
import {
  DESKTOP_BREAKPOINT,
  MOBILE_BREAKPOINT,
  spacer_full,
  spacer_half,
  useWindowDimensions,
} from "./App";

const DivBurger = styled.div`
  cursor: pointer;
`;

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: uppercase;
  font-family: ${theme.fonts.basic};
  font-size: 13px;
  font-weight: 700;
  max-width: 100%;
  height: 32px;
  padding: 16px;
  overflow-x: hidden;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: ${theme.colors.black};
    letter-spacing: 0.1em;
    font-size: 1em;
    font-weight: 700;

    :hover {
      color: ${theme.colors.violet};
    }

    a,
    button {
      cursor: pointer;
    }
  }
`;

const NavbarMobile = styled(StyledNavbar)`
  padding: 16px;
  a {
    font-size: 25px;
  }

  & :nth-child(1) {
    flex: 1;
  }
  & :nth-child(2) {
    flex: 3;
  }
  & :nth-child(3) {
    flex: 1;
  }
`;

const NavbarDesktop = styled(StyledNavbar)`
  width: 100%;
`;

const DivPages = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

const DivUser = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 20%;
`;

const ButtonSignUp = styled.button`
  background: ${theme.colors.blue};
  color: ${theme.colors.white};
  border: none;
  border-radius: 4px;
  text-transform: uppercase;
  font-family: ${theme.fonts.basic};
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.1em;
  min-height: 32px;
  padding: 0 1rem;
  width: 100px;

  :hover {
    background: ${theme.colors.violet};
  }
`;

export default function Navbar() {
  const [showOverlay, setShowOverlay] = useState(false);
  const { window_width } = useWindowDimensions();
  return (
    <>
      {window_width < MOBILE_BREAKPOINT ? (
        <>
          <NavbarMobile>
            <DivBurger onClick={() => setShowOverlay(!showOverlay)}>
              {!showOverlay ? <AiOutlineMenu /> : <AiOutlineClose />}
            </DivBurger>
            <Link to="/">
              <MdLocalFireDepartment />
            </Link>
            <Link to="/sign-up">
              <ButtonSignUp>Sign up</ButtonSignUp>
            </Link>
          </NavbarMobile>
          {showOverlay && (
            <NavOverlay show={showOverlay} onLinkClick={setShowOverlay} />
          )}
        </>
      ) : (
        <NavbarDesktop>
          <DivPages>
            <Link to="/">
              <MdLocalFireDepartment />
            </Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/community">Community</Link>
            <Link to="/library">Library</Link>
            <Link to="/support">Support</Link>
            <Link to="/mac-beta">Mac Beta</Link>
          </DivPages>
          <DivUser>
            <Link to="/login"> Log in </Link>
            <Link to="/sign-up">
              <ButtonSignUp>Sign up</ButtonSignUp>
            </Link>
          </DivUser>
        </NavbarDesktop>
      )}
    </>
  );
}
