import React from "react";

import Icon from "react-native-vector-icons/MaterialIcons";

import { Container, TextInputCheck } from "./styles";

interface PropsInputCheckbox {
  selected: boolean;
  onPress: () => void;

  size?: number;
  color?: string;
  text?: string;
}

const InputCheckbox = ({
  selected,
  onPress,

  size = 23,
  color = "#8C8C8C",
  text = "",
  ...props
}: PropsInputCheckbox) => (
  <Container onPress={onPress} {...props}>
    <Icon
      size={size}
      color={color}
      name={selected ? "check-box" : "check-box-outline-blank"}
    />

    <TextInputCheck> {text} </TextInputCheck>
  </Container>
);

export default InputCheckbox;
