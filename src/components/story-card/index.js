import React from 'react'
import {Inner, Item, Container, Pane, Title, SubTitle, Image} from "./styles/story-card";

export default function StoryCard({children, direction = 'row', ...restProps}) { 
    return ( <Item> <Inner direction={direction}> {children} </Inner> </Item> ) 
}

StoryCard.Container = ({children, ...restProps}) => <Container {...restProps}>{children}</Container>;

StoryCard.Pane = ({children, ...restProps}) => <Pane {...restProps}>{children}</Pane>;

StoryCard.Title = ({children, ...restProps}) => <Title {...restProps}>{children}</Title>;

StoryCard.SubTitle = ({children, ...restProps}) => <SubTitle {...restProps}>{children}</SubTitle>;

StoryCard.Image = ({...restProps}) => <Image {...restProps} />;