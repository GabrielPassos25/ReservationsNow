import React, { useState, useContext } from "react";
import InputSpinner from "react-native-input-spinner";
import { Container, AreaFlatList, TextButton2 } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { Alert, FlatList, TouchableOpacity, View } from "react-native";
import { api } from "../../utils/api";
import { TopTab } from "../../components/TopTab";
import { CardButton } from "../../components/CardButton";
import { CommandPlate } from '../../components/CommandPlate';
import { pratos } from "../../utils/mocado";
import { CardComanda } from "../../components/CardComanda";
import { RFValue } from "react-native-responsive-fontsize";
import { ModalWI } from "../../components/ModalWI";
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";
import { ModalCreatePrato } from "../../components/ModalCreatePrato";

export function ComandaDescAdmin() {
  const { comandaAtual, setComandaAtual } = useContext(RestauranteContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [pratoSelecionado, setPratoSelecionado] = useState();
  const [quantidade, setQuantidade] = useState(0);
  const [buttonsIsVisible, setButtonsIsVisible] = useState(true);
  const [openModalCreateCardapio, setOpenModalCreateCardapio] = useState(false);
  const navigation = useNavigation();
  function handleCancelModal() {
    setModalVisible(!modalVisible);
  }
  function handleExitModalCreate() {
    setOpenModalCreateCardapio(false);
    setButtonsIsVisible(true);
  }
  function handleClickButtonCreatePrato() {
    setOpenModalCreateCardapio(true);
    setButtonsIsVisible(false);
  }
  interface IQueryResponse {
    message: string;
    status: number;
    data?: any;
  }
  
  async function handleConfirmModal() {
    const data = {
      id: pratoSelecionado.id,
      quantidade: quantidade - pratoSelecionado.quantidade
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
    }
  }
  return (
    <Container>
      <TopTab name={""} />
      <CardComanda table={comandaAtual.mesa.numero} waiter={comandaAtual.garcom} amount={comandaAtual.total} isCliente={false} />
      <AreaFlatList>
        <FlatList
          data={comandaAtual.pratos}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          contentContainerStyle={{ paddingBottom: RFValue(250) }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={3}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index, separators }) => (
            <CommandPlate
              title={item.nome}
              onPress={async () => {await setPratoSelecionado(item); setModalVisible(!modalVisible)}}
            />
          )}
        />
        {modalVisible && (
          <ModalWI
            title={"Prato - " + pratoSelecionado.nome} 
            text={"Quantidade"}
            textCancel="Remover prato"
            textConfirm="Atualizar"
            cancel={handleCancelModal}
            confirm={handleConfirmModal}
          >
            <View>
              <InputSpinner
                min={pratoSelecionado.quantidade}
                step={1}
                arrows={true}
                colorPress={"#745F9A"}
                color={"#947FBA"}
                background={"#947FBA"}
                style={{ marginTop: "5%", marginBottom: "5%" }}
                width={"80%"}
                onChange={(num : number) => {
                  setQuantidade(num);
                }}
              />
            </View>
          </ModalWI>
        )}
      </AreaFlatList>
      
      <TouchableOpacity
        onPress={() => {navigation.navigate("CardapioAdmin")}}
        style={{
          borderWidth: 1,
          borderColor: "rgba(0,0,0,0.2)",
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          position: "absolute",
          bottom: 10,
          right: 10,
          height: 60,
          backgroundColor: "#8572DA",
          borderRadius: 100,
        }}
      >
        <TextButton2>+</TextButton2>
      </TouchableOpacity>
      
    </Container>
  );
}
