import React, { useState } from "react";
import { View, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { ButtonModalSimple } from "../../ButtonModalSimple";

import { ModalWI } from "../../ModalWI";
import { ContainerModal, SubTitle, Title } from "./styles";
interface PropsModalReservadas {
  infosMesa: {
    lugares: number;
    capacidade: number;
    enumeracao: number;
    id: number;
    id_restaurante: number;
    status: string;
  };
  titleMesa: string;
  onCancel: () => void;
  onExit: () => void;
  onConfirm: () => void;
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
  onConfirm,
}: PropsModalReservadas) {
  return (
    <ModalWI
      title={`Mesa ${titleMesa} reservada`}
      textCancel="Recusar"
      textConfirm="Confirmar"
      cancel={onCancel}
      exit={onExit}
      confirm={onConfirm}
    >
      <ContainerModal>
        <Title>Deseja confirmar a reserva?</Title>
        <SubTitle>Cliente: {infosCliente.name}</SubTitle>
        <SubTitle>Pessoas: {infosCliente.qtd}</SubTitle>
      </ContainerModal>
    </ModalWI>
  );
}
