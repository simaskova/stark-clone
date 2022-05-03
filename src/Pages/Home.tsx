import React from "react";
import styled from "styled-components";
import Footer from "../Footer";

const DivContainer = styled.div``;
const DivAbout = styled.div``;
const Main = styled.main``;

export default function Home() {
  return (
    <DivContainer>
      <DivAbout>Home About</DivAbout>
      <Main>Home Main</Main>
      <Footer />
    </DivContainer>
  );
}
