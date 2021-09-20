import React, { useState, useContext, useEffect } from "react";
import { Alert, FlatList } from "react-native";

import {
  Container,
  StatusBarAndroid,
  ButtonsContainer,
  DescriptionContainer,
  Separator,
  Botao,
} from "./styles";

import { TopTab } from "../../components/TopBar";
import { TopButtons } from "../../components/TopButtons";
import { PratosCardapio } from "../../components/PratosCardapio";
import { api } from "../../utils/api";
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";
import Logo from "../../assets/Logo.png";

interface Props {
  navigation: any;
}

interface IQueryResponse {
  message: string;
  status: number;
  data?: any;
}

export function ComandaGeralAdmin({ navigation }: Props) {
  const { infos, setComandaAtual } = useContext(RestauranteContext);
  const dataPratoAbertas = [
    {
      id: "01",
      photo: Logo,
      title: "Feijao verde com cocada deliciosa e pão de alho!",
      description: "Prato regional delicioso",
      preco: "R$ 30,00 ",
    },
    {
      id: "02",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      preco: "R$ 272,13 ",
    },
    {
      id: "03",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description: "É muito bom!!",
      preco: "R$ 272,13 ",
    },
    {
      id: "04",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      preco: "R$ 272,13 ",
    },
  ];

  const dataPratoFechadas = [
    {
      id: "08",
      photo: Logo,
      title: "Arroz branquissimo ao leite de coco",
      description:
        "É muito bom!! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo sequi nam, officiis mollitia accusamus earum autem in excepturi aliquid sed, eos nemo distinctio illum minima tempore soluta aperiam aspernatur similique.",
      preco: "R$ 272,13 ",
    },
  ];

  const [menuSelected, setMenuSelected] = useState("ABERTAS");
  const [comandas, setComandas] = useState([]);
  const [task, setTask] = useState();

  function handleMenuSelected(menuOption: string) {
    setMenuSelected(menuOption);
  }
  async function getData() {
    const data = {
      id_restaurante: infos.id,
    };
    let response: IQueryResponse = (await api.post("/comandas", data)).data
      .response;
    setComandas(response.data.comandas);
  }

  async function handleComandaSelected(id : number) {
    let rota = "/comanda/" + id;
    let response: IQueryResponse = (await api.post(rota)).data.response;
    if (response.status != 200) {
      Alert.alert("Erro", response.message, [
        {
          text: "ok",
          onPress: () => {
            //Do nothing
          },
        },
      ]);
    } else {
      setComandaAtual({...response.data, id});
      navigation.push("Details");
    }
  }

  useEffect(() => {
    getData();
  }, [true]);

  useEffect(() => {
    if (!task) {
      setTask(
        setTimeout(() => {
          getData();
          setTask(null);
        }, 5000)
      );
    }
  });

  return (
    <Container>
      <StatusBarAndroid />
      <TopTab />

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
            menuSelected === "ABERTAS"
              ? comandas.filter(
                  (comanda: any) => comanda.status_comanda === "ABERTA"
                )
              : comandas.filter(
                  (comanda: any) => comanda.status_comanda === "FECHADA"
                )
          }
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <Botao onPress={() => handleComandaSelected(item.id)}>
              <PratosCardapio data={item} isComanda />
            </Botao>
          )}
        />
      </DescriptionContainer>
    </Container>
  );
}
