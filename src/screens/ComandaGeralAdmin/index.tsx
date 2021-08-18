import React, { useState } from "react";
import { FlatList } from "react-native";

import {
  Container,
  StatusBarAndroid,
  ButtonsContainer,
  DescriptionContainer,
  Separator,
  Botao
} from "./styles";

import { TopTab } from "../../components/TopTab";
import { TopButtons } from "../../components/TopButtons";
import { PratosCardapio } from "../../components/PratosCardapio";

import Logo from "../../assets/Logo.png";

interface Props {
  navigation: any;
}

export function ComandaGeralAdmin({ navigation } : Props) {
  const dataPratoAbertas = [
    {
      id: "01",
      photo: Logo,
      title: "Feijao verde com cocada deliciosa e pão de alho!",
      description: "Prato regional delicioso",
      price: "R$ 30,00 ",
    },
    {
      id: "02",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      price: "R$ 272,13 ",
    },
    {
      id: "03",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description: "É muito bom!!",
      price: "R$ 272,13 ",
    },
    {
      id: "04",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      price: "R$ 272,13 ",
    },
  ];

  const dataPratoFechadas = [
    {
      id: "08",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      price: "R$ 272,13 ",
    },
  ];

  const [menuSelected, setMenuSelected] = useState("ABERTAS");

  function handleMenuSelected(menuOption: string) {
    setMenuSelected(menuOption);
  }

  return (
    <Container>
      <StatusBarAndroid />
      <TopTab name="COMANDAS" />

      <ButtonsContainer>
        <TopButtons
          title="ABERTAS"
          active={"ABERTAS" === menuSelected}
          onPress={() => handleMenuSelected("ABERTAS")}
        />

        <TopButtons
          title="FECHADAS"
          active={"FECHADAS" === menuSelected}
          onPress={() => handleMenuSelected("FECHADAS")}
        />
      </ButtonsContainer>

      <DescriptionContainer>
        <FlatList
          data={
            menuSelected == "ABERTAS" ? dataPratoAbertas : dataPratoFechadas
          }
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => <Botao onPress={() => navigation.push("Details")}><PratosCardapio data={item} /></Botao>}
        />
      </DescriptionContainer>
    </Container>
  );
}
