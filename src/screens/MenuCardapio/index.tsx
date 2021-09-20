import React, { useState, useEffect, useContext } from "react";
import { FlatList } from "react-native";

import { TopTab } from "../../components/TopBar";
import { TopButtons } from "../../components/TopButtons";
import { PratosCardapio } from "../../components/PratosCardapio";
import { api } from "../../utils/api";
import Logo from "../../assets/Logo.png";

import {
  Container,
  StatusBarAndroid,
  ButtonsContainer,
  DescriptionContainer,
  Separator,
} from "./styles";
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";

export function MenuCardapio() {
  const { infos } = useContext(RestauranteContext);
  const [pratos, setPratos] = useState<any>([]);
  const dataPrato = [
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
    {
      id: "05",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      price: "R$ 272,13 ",
    },
    {
      id: "06",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      price: "R$ 272,13 ",
    },
  ];

  const [menuSelected, setMenuSelected] = useState("ENTRADAS");

  function handleMenuSelected(menuOption: string) {
    setMenuSelected(menuOption);
  }
  useEffect(() => {
    async function getData() {
      await api
        .get(`/pratos/${infos.id}`)
        .then(({ data }) => {
          setPratos(data.response.data);
        })
        .catch((error) => console.log("Ops", error));
    }
    getData();
  }, []);
  return (
    <Container>
      <StatusBarAndroid />
      <TopTab />

      <ButtonsContainer>
        <TopButtons
          title="ENTRADAS"
          active={"ENTRADAS" === menuSelected}
          onPress={() => handleMenuSelected("ENTRADAS")}
        />

        <TopButtons
          title="PRINCIPAL"
          active={"PRINCIPAL" === menuSelected}
          onPress={() => handleMenuSelected("PRINCIPAL")}
        />

        <TopButtons
          title="BEBIDAS"
          active={"BEBIDAS" === menuSelected}
          onPress={() => handleMenuSelected("BEBIDAS")}
        />
        <TopButtons
          title="SOBREMESAS"
          active={"SOBREMESAS" === menuSelected}
          onPress={() => handleMenuSelected("SOBREMESAS")}
        />
      </ButtonsContainer>

      <DescriptionContainer>
        <FlatList
          data={pratos.filter((prato: any) => prato.categoria === menuSelected)}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => <PratosCardapio data={item} />}
        />
      </DescriptionContainer>
    </Container>
  );
}
