import React from "react";
import { Container, PageName, HomeContainer } from "./styles";
import {RenderSvg} from '../RenderSvg'

interface Props {
  name: string;
}

export function TopTab({ name }: Props) {
  return (
    <Container>
      <HomeContainer>
        <RenderSvg name="logo_toptab"/>
        <PageName>{name}</PageName>
      </HomeContainer>
    </Container>
  );
}
