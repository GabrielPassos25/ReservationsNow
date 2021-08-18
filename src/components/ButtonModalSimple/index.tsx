import React from "react";

import { TouchableOpacityProps } from "react-native";
import iconSet from "../../assets/setright.png";

import { Container, Title, ImageButton } from "./styles";
interface Props extends TouchableOpacityProps {
  title: string;
}

export function ButtonModalSimple({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <ImageButton source={iconSet} />
    </Container>
  );
}
