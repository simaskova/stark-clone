import React, { Suspense } from "react";
import { DivContainer, Main } from "../App";
import Header from "../Components/Header";

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
          twirlyArrow={false}
        />
      </Suspense>
      <Main></Main>
    </DivContainer>
  );
};

export default Community;
