import React from "react";

import LogoImage from "../../assets/Logo.png";
import { Container, Logo, PageName } from "./styles";

interface Props {
  name: string;
}

export function TopTab({ name }: Props) {
  return (
    <Container>
      <Logo source={LogoImage} />
      <PageName>{name}</PageName>
    </Container>
  );
}
