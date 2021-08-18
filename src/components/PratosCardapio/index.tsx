import React from "react";

import {
  InfoContainer,
  Image,
  Title,
  Description,
  InfoImage,
  InfoText,
  InfoPrice,
  PriceLabel,
  Price,
} from "./styles";

interface MenuProps {
  data: {
    id: string;
    photo: any;
    title: string;
    description: string;
    price: string;
  };
  children?: React.ReactNode;
  notShowImage?: boolean;
}

export function PratosCardapio({ data, notShowImage, children }: MenuProps) {
  return (
    <InfoContainer>
      <InfoImage>
        <Image source={data.photo} />
      </InfoImage>

      <InfoText>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
        {children}
      </InfoText>

      <InfoPrice>
        <PriceLabel>Total </PriceLabel>
        <Price>{data.price}</Price>
      </InfoPrice>
    </InfoContainer>
  );
}
