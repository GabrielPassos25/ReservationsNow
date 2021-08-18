import React, { useState } from "react";
import { View, Text } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { ButtonModalSimple } from "../../ButtonModalSimple";

import { ModalWI } from "../../ModalWI";
import {
  ContainerModal,
  CheckboxContainer,
  TitleCheckBox,
  ContainerButtons,
} from "./styles";
import InputCheckbox from "../../InputCheckbox";

interface PropsModalOcupadas {
  onCancel: () => void;
  onExit: () => void;
}
export function ModalOcupadas({ onCancel, onExit }: PropsModalOcupadas) {
  const [toggleCheckMesaLivre, setToggleCheckMesaLivre] = useState(false);
  const [toggleCheckPedido, setToggleCheckPedido] = useState(false);
  const [toggleCheckPagamento, setToggleCheckPagamento] = useState(false);
  const [toggleCheckOcupada, setToggleCheckOcupada] = useState(false);
  return (
    <ModalWI
      title="O que deseja fazer?"
      textCancel="Sair"
      textConfirm="Concluir"
      cancel={onCancel}
      exit={onExit}
    >
      <ContainerModal>
        <ContainerButtons>
          <ButtonModalSimple title={"Realizar pedido"} />
          <ButtonModalSimple title={"Ver comanda"} />
        </ContainerButtons>
        <CheckboxContainer>
          <TitleCheckBox>Atualizar</TitleCheckBox>
          <InputCheckbox
            selected={toggleCheckMesaLivre}
            onPress={() => setToggleCheckMesaLivre(!toggleCheckMesaLivre)}
            text="Mesa livre"
          />
          <InputCheckbox
            selected={toggleCheckPagamento}
            onPress={() => setToggleCheckPagamento(!toggleCheckPagamento)}
            text="Aguardando pagamento"
          />
          <InputCheckbox
            selected={toggleCheckPedido}
            onPress={() => setToggleCheckPedido(!toggleCheckPedido)}
            text="Pedido feito"
          />
          <InputCheckbox
            selected={toggleCheckOcupada}
            onPress={() => setToggleCheckOcupada(!toggleCheckOcupada)}
            text="Mesa ocupada"
          />
        </CheckboxContainer>
      </ContainerModal>
    </ModalWI>
  );
}
