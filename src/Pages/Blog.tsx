import React, { Suspense } from "react";
import { DivContainer, StyledH3, StyledH2, StyledP, StyledH4, Main } from "../App";
import Button from "../Components/Button";
import Header from "../Components/Header";
import Footer from "../Footer";

const Blog: React.FC = () => {
  return (
    
    <DivContainer>
      <Suspense fallback={null}>
        <Header 
          h3text="blog" 
          h1text="Stories, resources, and material making a Stark difference" 
        />
      </Suspense>
      <Main>
      </Main>
      <Footer />
    </DivContainer>
  );
}

export default Blog;