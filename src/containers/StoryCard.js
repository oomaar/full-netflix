import React from "react";
import { StoryCard } from "../components";
import storyCardData from "../data/story-card.json";

export default function StoryCardContainer() {
  return (
    <div>
      <StoryCard.Container>
        {storyCardData.map((item) => (
          <StoryCard key={item.id} direction={item.direction}>
            <StoryCard.Pane>
              <StoryCard.Title>{item.title}</StoryCard.Title>
              <StoryCard.SubTitle>{item.subTitle}</StoryCard.SubTitle>
            </StoryCard.Pane>

            <StoryCard.Pane>
              <StoryCard.Image src={item.image} alt={item.alt} />
            </StoryCard.Pane>
          </StoryCard>
        ))}
      </StoryCard.Container>
    </div>
  );
}