import React, { useState, useEffect, useContext } from "react";
import { Alert, FlatList, Platform } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import { CardButton } from "../../components/CardButton";
import { ModalOcupadas } from "../../components/ModalMesasAdmin/ModalOcupadas";
import { ModalReservadas } from "../../components/ModalMesasAdmin/ModalReservadas";
import { TopButtons } from "../../components/TopButtons";
import { TopTab } from "../../components/TopBar";
import { api } from "../../utils/api";
import { restaurantes } from "../../utils/mocado";
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";
import {
  Container,
  AreaFlatList,
  ButtonsContainer,
  StatusBarAndroid,
  Title,
} from "./styles";

interface IQueryResponse {
  message: string;
  status: number;
  data?: any;
}

export function MesasAdmin() {
  const { infos } = useContext(RestauranteContext);
  const qtdMesas: number = 3;
  const client = {
    name: "Cinthia",
    qtd: 2,
  };
  const [mesas, setMesas] = useState<any>([]);
  const [menuSelected, setMenuSelected] = useState("DISPONÍVEIS");
  const [currentMesa, setCurrentMesa] = useState({
    lugares: 0,
    capacidade: 0,
    enumeracao: 0,
    id: 0,
    id_restaurante: 0,
    status: "",
  });

  const [modalVisible, setModalVisible] = useState(false);
  const [task, setTask] = useState();

  function handleMenuSelected(menuOption: string) {
    setMenuSelected(menuOption);
  }

  async function getReserva(id: number) {
    const response = await (
      await api.post("/reservas", { id_mesa: id, concluida: 0 })
    ).data.response;

    return response;
  }
  async function handleCancelReserva() {
    const response_reserva = await getReserva(currentMesa.id);

    const id = response_reserva.data[0].id;
    const response = await (
      await api.put(`/reserva/concluir/${id}`)
    ).data.response;

    if (response.status == 200) {
      Alert.alert("Sucesso", "Reserva cancelada!");
    }
  }

  function handleCancelModal() {
    handleCancelReserva();

    setModalVisible(!modalVisible);
  }

  function handleExitModal() {
    setModalVisible(!modalVisible);
  }
  async function handleConfirmModal() {
    const response_reserva = await getReserva(currentMesa.id);
    console.log(response_reserva, " fwdt");

    const data = {
      id_restaurante: infos.id,
    };
    const response: IQueryResponse = (await api.post("/comandas", data)).data
      .response;
    let ordem = 1;
      if(response.status !== 404){
        ordem = response.data.comandas.length + 1
      }

    const body = {
      ordem: ordem,
      id_mesa: response_reserva.data[0].id_mesa,
      id_restaurante: infos.id,
      id_cliente: response_reserva.data[0].id_cliente,
      id_garcom: 1,
    };

    await (
      await api.post("/comanda", body)
    ).data.response;

    await (
      await api.put(`/mesa/${response_reserva.data[0].id_mesa}`, {
        status: "OCUPADA",
      })
    ).data.response;

    setModalVisible(!modalVisible);
  }
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
  function handleClickMesa(mesa: any) {
    setCurrentMesa(mesa);

    setModalVisible(!modalVisible);
  }         
  const mesasFiltradas = {
    DISPONÍVEIS: mesas.filter((mesa: any) => mesa.status === "LIVRE"),
    OCUPADAS: mesas.filter((mesa: any) => mesa.status === "OCUPADA"),
    RESERVADAS: mesas.filter((mesa: any) => mesa.status === "RESERVADA"),
  }
  return (
    <Container>
      {Platform.OS === "android" ? <StatusBarAndroid /> : <></>}

      <TopTab />

      <ButtonsContainer>
        <TopButtons
          title="DISPONÍVEIS"
          active={"DISPONÍVEIS" === menuSelected}
          onPress={() => handleMenuSelected("DISPONÍVEIS")}
        />

        <TopButtons
          title="OCUPADAS"
          active={"OCUPADAS" === menuSelected}
          onPress={() => handleMenuSelected("OCUPADAS")}
        />

        <TopButtons
          title="RESERVADAS"
          active={"RESERVADAS" === menuSelected}
          onPress={() => handleMenuSelected("RESERVADAS")}
        />
      </ButtonsContainer>

      <Title>Mesas {menuSelected.toLowerCase()} - {mesasFiltradas[menuSelected].length}</Title>

      <AreaFlatList>
        <FlatList
          columnWrapperStyle={{ justifyContent: "space-around" }}
          data={
            mesasFiltradas[menuSelected]
          }
          numColumns={3}
          contentContainerStyle={{ paddingBottom: RFValue(200) }}
          showsVerticalScrollIndicator={false}
          renderItem={({ item, index, separators }) => (
            <CardButton
              title={item.enumeracao}
              lugares={item.lugares}
              indice={item.enumeracao}
              onPress={() => handleClickMesa(item)}
            />
          )}
        />

        {modalVisible && menuSelected === "OCUPADAS" && (
          <ModalOcupadas
            onCancel={handleCancelModal}
            onExit={handleExitModal}
          />
        )}

        {modalVisible && menuSelected === "RESERVADAS" && (
          <ModalReservadas
            infosMesa={currentMesa}
            titleMesa="1"
            infosCliente={client}
            onCancel={handleCancelModal}
            onExit={handleExitModal}
            onConfirm={handleConfirmModal}
          />
        )}
      </AreaFlatList>
    </Container>
  );
}
