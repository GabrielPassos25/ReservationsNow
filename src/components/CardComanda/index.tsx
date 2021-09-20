import React from "react";
// import {  Image } from 'react-native';
import { RFValue } from "react-native-responsive-fontsize";
import IconRelogio from "../../assets/relogio.png";

import {
  Container,
  Title,
  AreaLeft,
  Header,
  SubTitle,
  Line,
  SubMenu,
  TitleH3,
  Image,
  AreaRight,
  Button,
  Text,
} from "./styles";

import { useNavigation } from "@react-navigation/native";
interface Props {
  table: string;
  waiter: string;
  amount: string;
  isCliente?: boolean;
}

export function CardComanda({ table, waiter, amount, isCliente=true }: Props) {
  const navigation = useNavigation();
  return (
    <Container>
      <AreaLeft>
        <Header>
          <Title>COMANDA</Title>

          <Line />
          <SubTitle>MESA - {table}</SubTitle>
        </Header>
        <SubMenu>
          <TitleH3>Garçom: {waiter}</TitleH3>
          <TitleH3>Valor total: R$ {amount}</TitleH3>
        </SubMenu>
      </AreaLeft>
      <AreaRight>
        <Image source={IconRelogio} height={RFValue(10)} />
       {
         !isCliente &&  <Button onPress={() => navigation.navigate("PaymentChoice")}>
         <Text>Pagar</Text>
       </Button>
       }
      </AreaRight>
    </Container>
  );
}
