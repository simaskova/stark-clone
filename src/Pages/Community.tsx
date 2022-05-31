import React, { Suspense } from "react";
import { DivContainer, Main, StyledH3, StyledH2, StyledP, StyledH4 } from "../App";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Footer from "../Footer";

const Community: React.FC = () => {
  return (
    <DivContainer>
      <Suspense fallback={null}>
        <Header 
          h3text="Join the community" 
          h1text="A world built by you, for you." 
          ptext="Come talk shop in meetups, join us on social, and contribute to the evergrowing community." 
          button1text="Host a meetup" 
          button2text="Join our community" 
        />
      </Suspense>
      <Main>
      </Main>
      <Footer />
    </DivContainer>
  );
}

export default Community;