import React from 'react';
import { Container, Input, Break, Button, Text } from './styles/opt-form';

export default function OptForm({ children, ...restProps }) { return <Container {...restProps}>{children}</Container>; }

OptForm.Input = ({ ...restProps }) => <Input {...restProps} />;

OptForm.Button = ({ children, ...restProps }) => {
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = ({ children, ...restProps }) => <Text {...restProps}>{children}</Text>;

OptForm.Break = ({ ...restProps }) => <Break {...restProps} />;
