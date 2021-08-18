import React, { useState } from "react";
import InputSpinner from "react-native-input-spinner";
import { Container, AreaFlatList } from "./styles";

import { FlatList, View } from "react-native";

import { TopTab } from "../../components/TopBar";
import { CardButton } from "../../components/CardButton";

import { pratos } from "../../utils/mocado";
import { CardComanda } from "../../components/CardComanda";
import { RFValue } from "react-native-responsive-fontsize";
import { ModalWI } from "../../components/ModalWI";

export function ComandaDescAdmin() {
  const [modalVisible, setModalVisible] = useState(false);

  function handleCancelModal() {
    setModalVisible(!modalVisible);
  }

  function handleExitModal() {
    setModalVisible(!modalVisible);
  }
  return (
    <Container>
      <TopTab name={"Comanda"} />
      <CardComanda table={"X"} waiter={"Cinthia"} amount={"100.00"} />
      <AreaFlatList>
        <FlatList
          data={pratos.todos}
          columnWrapperStyle={{ justifyContent: "space-around" }}
          contentContainerStyle={{ paddingBottom: RFValue(250) }}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={3}
          renderItem={({ item, index, separators }) => (
            <CardButton
              title={item.name}
              indice={index + 1}
              onPress={() => setModalVisible(!modalVisible)}
            />
          )}
        />
        {modalVisible && (
          <ModalWI
            title="Prato X"
            text={"Quantidade"}
            textCancel="Remover prato"
            textConfirm="Atualizar"
            cancel={handleCancelModal}
            exit={handleExitModal}
          >
            <View>
              <InputSpinner
                min={1}
                step={1}
                arrows={true}
                colorPress={"#745F9A"}
                color={"#947FBA"}
                background={"#947FBA"}
                style={{ marginTop: "5%", marginBottom: "5%" }}
                width={"80%"}
                onChange={(num) => {
                  console.log(num);
                }}
              />
            </View>
          </ModalWI>
        )}
      </AreaFlatList>
    </Container>
  );
}
