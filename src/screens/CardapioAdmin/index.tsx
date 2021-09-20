import React, { useState, useEffect, useContext } from "react";
import { View, FlatList, TouchableOpacity, Text, Alert } from "react-native";
import { ModalWI } from "../../components/ModalWI";
import { FloatingAction } from "react-native-floating-action";
import { api } from "../../utils/api";
import InputSpinner from "react-native-input-spinner";
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";
import {
  Container,
  StatusBarAndroid,
  ButtonsContainer,
  DescriptionContainer,
  Separator,
  ButtonSelectPrato,
  TextModal,
  TextButton,
  TextButton2,
} from "./styles";
import { useNavigation } from "@react-navigation/native";
import { TopTab } from "../../components/TopBar";
import { TopButtons } from "../../components/TopButtons";
import { PratosCardapio } from "../../components/PratosCardapio";
import { dataPrato } from "../../utils/mocado";
import { ModalCreatePrato } from "../../components/ModalCreatePrato";

interface PropsPrato {
  id: string;
  photo: string;
  title: string;
  description: string;
  price: number;
}
export function CardapioAdmin() {
  const [modalVisible, setModalVisible] = useState(false);
  const [pratoSelecionado, setPratoSelecionado] = useState();
  const { infos, comandaAtual, setComandaAtual } = useContext(RestauranteContext);
  const [pratos, setPratos] = useState<any>([]);
  const navigation = useNavigation();
  function handleCancelModal() {
    setModalVisible(!modalVisible);
  }

  interface IQueryResponse {
    message: string;
    status: number;
    data?: any;
  }

  async function handleConfirmModal() {
    const data = {
      id: pratoSelecionado.id,
      quantidade: pratoSelecionado.quantidade
    }
    let response: IQueryResponse = (await api.put('/comanda/' + comandaAtual.id, data)).data.response;
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
      response = (await api.post('/comanda/' + comandaAtual.id)).data.response
      setComandaAtual({...response.data, id: comandaAtual.id});
      setModalVisible(!modalVisible);
      navigation.navigate('Comanda');
    }
  }

  const [menuSelected, setMenuSelected] = useState("ENTRADAS");

  function handleMenuSelected(menuOption: string) {
    setMenuSelected(menuOption);
  }
  async function handleClickSelectPrato(data: Object) {
    await setPratoSelecionado({...data, quantidade: 0});
    setModalVisible(!modalVisible);
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
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={({ item }) => (
            <PratosCardapio data={item} notShowImage>
              <ButtonSelectPrato onPress={() => handleClickSelectPrato(item)}>
                <TextButton>Selecionar</TextButton>
              </ButtonSelectPrato>
            </PratosCardapio>
          )}
        />
      </DescriptionContainer>
      {modalVisible && (
        <ModalWI
          title="Realizar pedido"
          text={pratoSelecionado.nome}
          textCancel="Sair"
          textConfirm="Concluir"
          cancel={handleCancelModal}
          confirm={handleConfirmModal}
        >
          <View>
            <InputSpinner
              min={0}
              step={0}
              arrows={true}
              colorPress={"#745F9A"}
              color={"#947FBA"}
              background={"#947FBA"}
              style={{ marginTop: "5%", marginBottom: "5%" }}
              width={"80%"}
              onChange = {(value) => setPratoSelecionado({...pratoSelecionado, quantidade: value})}
            />
          </View>
          <TextModal>Total: R${pratoSelecionado.preco * pratoSelecionado.quantidade} </TextModal>
        </ModalWI>
      )}
    </Container>
  );
}
