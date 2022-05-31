import React, { createRef, Suspense } from "react";
import styled from "styled-components";
import Footer from "../Footer";
import {
  StyledH2,
  StyledH3,
  StyledP,
  DivContainer,
  StyledA,
  useScrollToElement,
} from "../App";
import pricingPlansData from "../pricingPlans";
import { CardStyledH3 } from "../Components/Card";

const Button = React.lazy(() => import("../Components/Button"));
const Card = React.lazy(() => import("../Components/Card"));
const Header = React.lazy(() => import("../Components/Header"));


const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: fit-content;
`;

const StyledDivCards = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;

  @media screen and (min-width: 1024px) {
    flex-direction: row;
  }
`;

const DivCardLoader = styled.div`
  padding: 3rem;
`;

const Pricing: React.FC = () => {
      const compare_plans_ref = createRef<HTMLDivElement>();
      // const Card = React.lazy(() => import("../Components/Card"));
      return (
        <DivContainer>
          <Suspense fallback={null}>
            <Header 
              h3text="Pricing Plans" 
              h1text="Upgrade your plan. And designs." 
              ptext="Stark helps you sign your name on a job well done. Pricier than a news subscription. Cheaper than a lawsuit.!" 
              button1text="Find the plan for you" 
              button1handler={(e: React.MouseEvent<HTMLButtonElement>) => useScrollToElement(e, compare_plans_ref)}
            />
          </Suspense>
          <Main>
            <section>
              <StyledH2>Plan Pricing</StyledH2>
              <StyledP>
              With three different plans, Stark is sure to have one that checks all of the boxes, whether it’s just for you or your entire team.
              </StyledP>
              <StyledA href="#">View Monthly Prices</StyledA> {/** pridať link */}
              
              <Suspense fallback={
                <DivCardLoader>
                  <CardStyledH3>
                    Loading pricing plans...
                  </CardStyledH3>
                </DivCardLoader>
                }
              >
                <StyledDivCards>
                  {pricingPlansData.map((data, key) => {
                    return (
                      <Card key={key} type={data.type} price={data.price} about={data.about} includes={data.includes} buttonText={data.buttonText} />
                    )
                  })}
                </StyledDivCards>
              </Suspense>

            </section>
            <section>
              <StyledH2 ref={compare_plans_ref}>Compare Plans</StyledH2>
              <StyledP>
              Check out all of the features that differ per plan to find one that fits what you’re looking for. All of our plans are easy to switch, any time.
              </StyledP>
            </section>
            <section>
              <StyledH3>Features</StyledH3>
              <StyledH2>Coming soon to Stark</StyledH2>
              {/* 1 x 2 */}
              <div>
                <div>
                  <StyledH3>Type</StyledH3>
                  <StyledH2>Deep Type Analysis</StyledH2>
                  <StyledP>Deep dives of the typography in your design document letting you know the appropriate font size, weight and color for your typeface.</StyledP>
                </div>
                <div>
                  <StyledH3>Image</StyledH3>
                  <StyledH2>Alt Text</StyledH2>
                  <StyledP>Set image descriptions for code right in your design files, ensuring developer handoff assets are seamless, and every image for customers is accessible.</StyledP>
                </div>
              </div>
            </section>
          </Main>
        <Footer />
      </DivContainer>
  );
}

export default Pricing;