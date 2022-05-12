import React from "react";
import { Wrench } from "./assets";
import { Container, Subtitle, Text, Title } from "./style";

export const Logo = () => {
  return (
    <Container href="#">
      <Wrench />
      <Text>
        <Title>ELITE MECHANICS</Title>
        <Subtitle>Mecanică și tractări auto</Subtitle>
      </Text>
    </Container>
  );
};
