// PREFIXED

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "./theme";
import NavOverlay from "./NavOverlay";
import {
  MOBILE_BREAKPOINT,
  useWindowDimensions,
  spacer_2,
} from "./App";
import StarkLogo from "./StarkLogo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Button = React.lazy(() => import("./Components/Button"));

const DivBurger = styled.div`
  cursor: pointer;
`;

const StyledNavbar = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-x: hidden;

  /* Hide scrollbar for Chrome, Safari and Opera */
  ::-webkit-scrollbar {
    display: none;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  a {
    color: ${theme.colors.crowblackblue};
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    font-family: "Armin Grotesk Ultrabold";
    color: ${theme.colors.crowblackblue};
    letter-spacing: 0.1em;
    font-size: 13px;
    font-weight: 700;

    :hover {
      color: ${theme.colors.mediumblue};
    }

    button {
      font-family: "Armin Grotesk Ultrabold";
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      font-weight: 700;
    }
  }
`;

const NavbarMobile = styled((props) => <StyledNavbar {...props} />)`
  a {
    font-size: 25px;
  }

  & :nth-child(1) {
    -webkit-box-flex: 5;
    -ms-flex: 5;
    flex: 5;
  }
  & :nth-child(2) {
    position: absolute;
    width: calc(100vw - 7rem);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;

    i {
      position: absolute;
    }
  }
  & :nth-child(3) {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
  }
`;

const NavbarDesktop = styled((props) => <StyledNavbar {...props} />)``;

const DivPages = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  a {
    margin-right: 40px;
  }
`;

const DivUser = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: end;
  -ms-flex-pack: end;
  justify-content: flex-end;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  button {
    margin-left: 1rem;
  }
`;

const Navbar: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState<boolean>(false);
  const { window_width } = useWindowDimensions();
  return (
    <>
      {window_width < MOBILE_BREAKPOINT ? (
        <>
          <NavbarMobile>
            <DivBurger style={{ height: "100%" }}>
              {!showOverlay ? (
                <FontAwesomeIcon
                  icon="bars"
                  onClick={() => setShowOverlay(!showOverlay)}
                />
              ) : (
                <FontAwesomeIcon
                  icon="xmark"
                  onClick={() => setShowOverlay(!showOverlay)}
                />
              )}
            </DivBurger>
            <Link to="/">
              <StarkLogo />
            </Link>
            <Link to="/sign-up">
              <Button
                variant="dark"
                text="Sign up"
                padding={`0.5rem calc(1 * 1rem)`}
                buttonHandler={() => ""}
              ></Button>
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
              <StarkLogo />
            </Link>
            <Link to="/pricing">Pricing</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/community">Community</Link>
            <Link to="/library">Library</Link>
            <Link to="/support">Support</Link>
            <Link to="/mac-beta">Mac Beta</Link>
          </DivPages>
          <DivUser>
            <Link to="/login">Log in</Link>
            <Link to="/sign-up">
              <Button
                variant="dark"
                text="Sign up"
                minHeight={`${spacer_2}`}
                margin="0 0 0 1rem"
                padding={`0 1rem`}
                buttonHandler={() => ""}
              ></Button>
            </Link>
          </DivUser>
        </NavbarDesktop>
      )}
    </>
  );
};

export default Navbar;
