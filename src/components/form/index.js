import React from 'react'
import { Container, Error, Title, Text, TextSmall, Link, Input, Submit, Base, BlueLink } from './styles/Form';

export default function Form({children, ...restProps}) {
    return (
        <Container {...restProps} > {children} </Container>
    );
}

Form.Error = ({children, ...restProps}) => <Error {...restProps}>{children}</Error>;

Form.Title = ({children, ...restProps}) => <Title {...restProps}>{children}</Title>;

Form.Text = ({children, ...restProps}) => <Text {...restProps}>{children}</Text>;

Form.TextSmall = ({children, ...restProps}) => <TextSmall {...restProps}>{children}</TextSmall>;

Form.Link = ({children, ...restProps}) => <Link {...restProps}>{children}</Link>;

Form.Input = ({children, ...restProps}) => <Input {...restProps}>{children}</Input>;

Form.Submit = ({children, ...restProps}) => <Submit {...restProps}>{children}</Submit>;

Form.Base = ({children, ...restProps}) => <Base {...restProps}>{children}</Base>;

Form.BlueLink = ({children, ...restProps}) => <BlueLink {...restProps}>{children}</BlueLink>;