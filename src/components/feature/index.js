import React from 'react';
import { Container, Title, SubTitle } from "./styles/Feature";
//optContainer
export default function Feature({children, ...restProps}) {
    return (
        <Container {...restProps}>
            {children}
        </Container>
    )
}

Feature.Title = ({children, ...restProps}) => <Title {...restProps}>{children}</Title>;

Feature.SubTitle = ({children, ...restProps}) => <SubTitle {...restProps}>{children}</SubTitle>;
