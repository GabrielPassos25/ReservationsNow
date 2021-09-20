import React, { useState, useEffect, useContext } from "react";
import { RFValue } from "react-native-responsive-fontsize";
import {
  Container,
  AreaCenter,
  Title,
  AreaFlatList,
  AreaSelector,
} from "./styles";

import { ModalWI } from "../../components/ModalWI";
import { FlatList, Text } from "react-native";

import { restaurantes } from "../../utils/mocado";
import { lugares } from "../../utils/mocado";
import { api } from "../../utils/api";
import { TopTab } from "../../components/TopBar";
import { CardButton } from "../../components/CardButton";
import { ModalOcupadas } from "../../components/ModalMesasAdmin/ModalOcupadas";
import { ModalReservadas } from "../../components/ModalMesasAdmin/ModalReservadas";
import { QuantityButton } from "../../components/QuantityButton";
import ModalReservada from "./ModalReserva";
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";

export function ReservaMesa() {
  const { infos } = useContext(RestauranteContext);
  const [modalVisible, setModalVisible] = useState(false);
  const [currentMesa, setCurrentMesa] = useState({lugares: 0, capacidade: 0, enumeracao: 0, id: 0, id_restaurante: 0, status: ""})
  const [mesas, setMesas] = useState<any>([]);
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
  const [quantitySelected, setQuantitySelected] = useState("0");
  function handleQuantitySelected(quantity: string) {
    setQuantitySelected(quantity);
    if (quantity == "all") {
      //Função de filtragem
    }
    //Função de filtragem
  }

  function updateMesa(id: number){
    const newMesa = mesas.filter((mesa:any) => mesa.id !== id);
    setMesas(newMesa)
  }

  function handleClickMesa(data: any) {
    setCurrentMesa(data)
    setModalVisible(!modalVisible)
  }
  useEffect(() => {
    async function getData() {
      await api
        .get(`/mesas/${infos.id}`)
        .then(({ data }) => {
          const dataAux = data.response.data.map((mesa: any) => {
            if (mesa.capacidade > 6) {
              mesa.lugares = "6";
            } else {
              mesa.lugares = mesa.capacidade.toString();
            }
            return mesa;
          });

          setMesas(dataAux);
        })
        .catch((error) => console.log("Ops", error));
    }
    getData();
  }, [true]);
  return (
    <Container>
      <TopTab />
      <AreaSelector>
        <Title>Mesas disponíveis</Title>
        <FlatList
          data={lugares}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <QuantityButton
              active={item.id === quantitySelected}
              onPress={() => handleQuantitySelected(item.id)}
              title={item.quant}
            />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            height: 40,
            justifyContent: "center",
            paddingBottom: 5,
            marginVertical: 20,
          }}
        />
      </AreaSelector>
      <AreaCenter>
        <AreaFlatList>
          <FlatList
            data={
              quantitySelected === "0"
                ? mesas.filter((mesa:any) => mesa.status === "LIVRE")
                : mesas.filter((mesa: any) => mesa.lugares === quantitySelected && mesa.status === "LIVRE")
            }
            columnWrapperStyle={{ justifyContent: "space-around" }}
            showsVerticalScrollIndicator={false}
            horizontal={false}
            numColumns={3}
            contentContainerStyle={{ paddingBottom: RFValue(390) }}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index, separators }) => (
              <CardButton
                title={`Mesa ${item.enumeracao}`}
                lugares={item.capacidade}
                indice={item.enumeracao}
                onPress={() => handleClickMesa(item)}
              />
            )}
          />
          {modalVisible && (
            <ModalReservada
              onUpdateMesa={updateMesa}
              infos={currentMesa}
              onCancel={handleCancelModal}
              onExit={handleExitModal}
            />
          )}
        </AreaFlatList>
      </AreaCenter>
    </Container>
  );
}
