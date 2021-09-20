import React from "react";
import { Container, HomeContainer, Image } from "./styles";

interface Props {
  logo: string;
}
export function TopTabRestaurante({ logo }: Props) {
  return (
    <>
    <Container/>
    <Image source={logo} />
    </>
  );
}
