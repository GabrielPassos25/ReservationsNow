import React from "react";
import Logo from "../../assets/Logo.png";
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
    id: number;
    categoria: string;
    descricao: string;
    nome: string;
    preco: number;
    ordem?: number;
    data?: number;
    total_conta: number;
  };
  children?: React.ReactNode;
  isComanda?: boolean;
}

export function PratosCardapio({ data, isComanda, children }: MenuProps) {
  return (
    <InfoContainer>
      <InfoImage>
        <Image source={Logo} />
      </InfoImage>

      <InfoText>
        {isComanda ? (
          <Title>Comanda {data.ordem}</Title>
        ) : (
          <>
            <Title>{data.nome}</Title>
            <Description>{data.descricao}</Description>
          </>
        )}
        {children}
      </InfoText>

      <InfoPrice>
        <PriceLabel>Total </PriceLabel>
        <Price>
          R$ {(isComanda ? data.total_conta : data.preco).toFixed(2)}
        </Price>
      </InfoPrice>
    </InfoContainer>
  );
}
