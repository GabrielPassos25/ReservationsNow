import React, { useState } from "react";
import { View, FlatList, Text } from "react-native";
import { ModalWI } from "../../components/ModalWI";
import { FloatingAction } from "react-native-floating-action";
import InputSpinner from "react-native-input-spinner";

import {
  Container,
  StatusBarAndroid,
  ButtonsContainer,
  DescriptionContainer,
  Separator,
  ButtonSelectPrato,
  TextModal,
  TextButton,
} from "./styles";

import { TopTab } from "../../components/TopTab";
import { TopButtons } from "../../components/TopButtons";
import { PratosCardapio } from "../../components/PratosCardapio";
import { dataPrato } from "../../utils/mocado";

interface PropsPrato {
  id: string;
  photo: string;
  title: string;
  description: string;
  price: number;
}
export function CardapioAdmin() {
  const [modalVisible, setModalVisible] = useState(false);
  const [currentNamePrato, setCurrentNamePrato] = useState("aa");
  const [currentPrice, setCurrentPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  function handleCancelModal() {
    setCurrentPrice(0);
    setTotalPrice(0);
    setModalVisible(!modalVisible);
  }

  function handleExitModal() {
    setCurrentPrice(0);
    setTotalPrice(0);
    setModalVisible(!modalVisible);
  }

  const [menuSelected, setMenuSelected] = useState("ENTRADAS");

  function handleMenuSelected(menuOption: string) {
    setMenuSelected(menuOption);
  }

  function handleClickSelectPrato(data: PropsPrato) {
    setModalVisible(!modalVisible);
    setCurrentNamePrato(data.title);
    setCurrentPrice(data.price);
  }
  return (
    <Container>
      <StatusBarAndroid />
      <TopTab name="Cardápio - administrador" />

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
          title="SOBREMESAS"
          active={"SOBREMESAS" === menuSelected}
          onPress={() => handleMenuSelected("SOBREMESAS")}
        />
      </ButtonsContainer>

      <DescriptionContainer>
        <FlatList
          data={dataPrato}
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
          text={currentNamePrato}
          textCancel="Sair"
          textConfirm="Concluir"
          cancel={handleCancelModal}
          exit={handleExitModal}
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
              onDecrease={(num) => {
                console.log(num, totalPrice);
                setTotalPrice((prev) => prev - currentPrice);
              }}
              onIncrease={(num) => {
                console.log(num, totalPrice);
                setTotalPrice((prev) => prev + currentPrice);
              }}
            />
          </View>
          <TextModal>Total: R${totalPrice} </TextModal>
        </ModalWI>
      )}
      <FloatingAction
        color={"#8572DA"}
        onPressItem={(name) => {
          console.log(`selected button: ${name}`);
        }}
      />
    </Container>
  );
}
