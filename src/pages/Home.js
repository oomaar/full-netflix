import React from "react";
import StoryCardContainer from "../containers/StoryCard";
import FaqsContainer from "../containers/Faqs";
import FooterContainer from "../containers/Footer";
import HeaderContainer from "../containers/Header";
import { Feature, OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <Feature>
          <Feature.Title>Unlimited movies, TV shows, and more.</Feature.Title>
          <Feature.SubTitle>Watch anywhere. Cancel anytime.</Feature.SubTitle>
          
            <OptForm>
              <OptForm.Text>
                Ready to watch? Enter your email to create or restart your
                membership.
              </OptForm.Text>
              <OptForm.Input placeholder="Email address" />
              <OptForm.Button>Get Started</OptForm.Button>
              <OptForm.Break />
            </OptForm>
         
        </Feature>
      </HeaderContainer>

      <StoryCardContainer />
      <FaqsContainer />
      <FooterContainer />
    </>
  );
}
