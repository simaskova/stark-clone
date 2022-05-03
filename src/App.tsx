import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Blog from "./Pages/Blog";
import Pricing from "./Pages/Pricing";
import Support from "./Pages/Support";
import Community from "./Pages/Community";
import Library from "./Pages/Library";
import MacBeta from "./Pages/MacBeta";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import styled from "styled-components";
import { theme } from "./theme";
import createGlobalStyle from "./global"; // for getting rid of the offwhite in corners
import { useEffect, useState } from "react";
import "./App.css";

export const DESKTOP_BREAKPOINT = 935;
export const MOBILE_BREAKPOINT = 845;
export const spacer_full = "16px";
export const spacer_half = "8px";

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${theme.colors.offwhite};
  height: 100%;
  width: 100vw;
`;

const DivNavbar = styled.div`
  width: 100%;
  max-width: 840px;
`;

function getWindowDimensions() {
  const { innerWidth: window_width, innerHeight: window_height } = window;
  return {
    window_width,
    window_height,
  };
}

export function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowDimensions;
}

function App() {
  return (
    <Router>
      <DivContainer>
        <DivNavbar>
          <Navbar />
        </DivNavbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/community" element={<Community />} />
          <Route path="/library" element={<Library />} />
          <Route path="/support" element={<Support />} />
          <Route path="/mac-beta" element={<MacBeta />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </DivContainer>
    </Router>
  );
}

export default App;
