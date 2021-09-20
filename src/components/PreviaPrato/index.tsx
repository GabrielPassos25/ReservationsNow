import React from "react";

import {
  InfoContainer,
  Image,
  Title,
  InfoImage,
  InfoText,
  InfoPrice,
  Price,
} from "./styles";

interface MenuProps {
  data: {
    photo: any;
    title: string;
    price: string;
  };

  notShowImage?: boolean;
}
export function PreviPrato({ data, notShowImage }: MenuProps) {
  return (
    <InfoContainer>
      <Image source={data.photo} />

      <Title>{data.title}</Title>

      <Price>{data.price}</Price>
    </InfoContainer>
  );
}
