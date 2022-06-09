import React, { Suspense } from "react";
import { DivContainer, Main } from "../App";
import Header from "../Components/Header";

const Blog: React.FC = () => {
  return (
    <DivContainer>
      <Suspense fallback={null}>
        <Header
          h3text="blog"
          h1text="Stories, resources, and material making a Stark difference"
          twirlyArrow={false}
        />
      </Suspense>
      <Main></Main>
    </DivContainer>
  );
};

export default Blog;
