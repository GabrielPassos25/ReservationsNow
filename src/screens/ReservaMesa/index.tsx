import React, { useState } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import { Container, AreaCenter, Title, AreaFlatList } from "./styles";

import { ModalWI } from "../../components/ModalWI";
import { FlatList } from "react-native";

import { restaurantes } from "../../utils/mocado";

import { TopTab } from "../../components/TopBar";
import { CardButton } from "../../components/CardButton";
import { ModalOcupadas } from "../../components/ModalMesasAdmin/ModalOcupadas";
import { ModalReservadas } from "../../components/ModalMesasAdmin/ModalReservadas";

export function ReservaMesa() {
  const restaurante: string = "Bom demais";
  const qtdMesas: number = 3;
  const [modalVisible, setModalVisible] = useState(false);
  const text =
    "Deseja reservar a mesa XX?" +
    "\n" +
    "• X Lugares" +
    "\n" +
    "• XX:XX Horas";
  function handleCancelModal() {
    setModalVisible(!modalVisible);
  }

  function handleExitModal() {
    setModalVisible(!modalVisible);
  }
  return (
    <Container>
      <TopTab name={`Mesas restaurante - ${restaurante}`} />
      <AreaCenter>
        <Title>Mesas disponíveis - {qtdMesas}</Title>
        <AreaFlatList>
          <FlatList
            data={restaurantes.todos}
            columnWrapperStyle={{ justifyContent: "space-around" }}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={3}
            contentContainerStyle={{ paddingBottom: RFValue(390) }}
            renderItem={({ item, index, separators }) => (
              <CardButton
                title={item.name}
                lugares={item.lugares}
                indice={index + 1}
                onPress={() => setModalVisible(!modalVisible)}
              />
            )}
          />
          {modalVisible && (
            <ModalWI
              title="Reserva de Mesa"
              text={text}
              cancel={handleCancelModal}
              exit={handleExitModal}
            />
          )}
        </AreaFlatList>
      </AreaCenter>
    </Container>
  );
}
