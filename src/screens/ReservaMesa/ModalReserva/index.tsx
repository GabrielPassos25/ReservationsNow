import React, { useContext, useState } from "react";

import { View, Text, Platform, Alert } from "react-native";

import DateTimePicker, { Event } from "@react-native-community/datetimepicker";
import { ModalWI } from "../../../components/ModalWI";
import {
  TextTitle,
  ContainerModal,
  ViewTime,
  Button,
  TextHoras,
} from "./styles";
import { api } from "../../../utils/api";
import "intl";
import "intl/locale-data/jsonp/pt-BR";
import { DateTime } from "luxon";
import { RestauranteContext } from "../../../components/Contexts/RestauranteContext";
interface Props {
  infos: {
    lugares: number;
    capacidade: number;
    enumeracao: number;
    id: number;
    id_restaurante: number;
    status: string;
  };
  onCancel: () => void;
  onExit: () => void;
  onUpdateMesa: (value: number) => void;
}

interface IQueryResponse {
  data: {
    id_restaurante: number;
    id_mesa: number;
    id_cliente: number;
  };
  status: number;
}

export default function ModalReservada({
  onCancel,
  onExit,
  infos,
  onUpdateMesa,
}: Props) {
  const { idCliente } = useContext(RestauranteContext);

  const [date, setDate] = useState(new Date());
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS == "ios");
  const onChange = (event: Event, selectedDate: any) => {
    const currentDate = selectedDate || date;

    setDate(currentDate);
  };

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === "android") {
      setShowDatePicker((oldState) => !oldState);
    }
    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  async function onConfirm() {
    const data = {
      data_reserva: DateTime.fromISO(selectedDateTime.toISOString()).toMillis(),
      id_restaurante: infos.id_restaurante,
      id_mesa: infos.id,
      id_cliente: idCliente,
    };
    onUpdateMesa(infos.id);
    let response: IQueryResponse = (await api.post("/reserva", data)).data
      .response;

    if (response.status == 200) {
      Alert.alert("Sucesso", "Sua reserva foi realizada com sucesso!");
    }
    onExit();
  }

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker((oldState) => !oldState);
  }
  return (
    <ModalWI
      title={`Reservar mesa - ${new Intl.DateTimeFormat("pt-BR").format(
        new Date(date)
      )}`}
      text={`Desaja reservar a mesa ${infos.enumeracao}?`}
      cancel={onCancel}
      exit={onExit}
      confirm={onConfirm}
    >
      <ContainerModal>
        <TextTitle>{infos.lugares} lugares</TextTitle>

        <View>
          <TextTitle>Qual horário você gostaria de reservar?</TextTitle>
        </View>

        {showDatePicker && (
          <ViewTime>
            <DateTimePicker
              testID="dateTimePicker"
              value={selectedDateTime}
              mode={"time"}
              is24Hour={true}
              display="default"
              onChange={handleChangeTime}
            />
          </ViewTime>
        )}
        {Platform.OS === "android" && (
          <Button onPress={handleOpenDateTimePickerForAndroid}>
            <TextHoras>Selecionar hora</TextHoras>
          </Button>
        )}
      </ContainerModal>
    </ModalWI>
  );
}
