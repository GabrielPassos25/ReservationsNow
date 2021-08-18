import React, { useState } from "react";
import { View, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { ButtonModalSimple } from "../../ButtonModalSimple";

import { ModalWI } from "../../ModalWI";
import { ContainerModal, SubTitle, Title } from "./styles";
interface PropsModalReservadas {
  titleMesa: string;
  onCancel: () => void;
  onExit: () => void;
  infosCliente: {
    name: string;
    qtd: number;
  };
}
export function ModalReservadas({
  onCancel,
  onExit,
  titleMesa,
  infosCliente,
}: PropsModalReservadas) {
  return (
    <ModalWI
      title={`Mesa ${titleMesa} reservada`}
      textCancel="Recusar"
      textConfirm="Confirmar"
      cancel={onCancel}
      exit={onExit}
    >
      <ContainerModal>
        <Title>Deseja confirmar a reserva?</Title>
        <SubTitle>Cliente: {infosCliente.name}</SubTitle>
        <SubTitle>Pessoas: {infosCliente.qtd}</SubTitle>
      </ContainerModal>
    </ModalWI>
  );
}
