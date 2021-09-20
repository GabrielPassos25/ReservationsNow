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
import { useNavigation } from "@react-navigation/native";

interface PropsModalOcupadas {
  onCancel: () => void;
  onExit: () => void;
}
export function ModalOcupadas({ onCancel, onExit }: PropsModalOcupadas) {
  const [toggleCheckMesaLivre, setToggleCheckMesaLivre] = useState(false);
  const [toggleCheckPedido, setToggleCheckPedido] = useState(false);
  const [toggleCheckPagamento, setToggleCheckPagamento] = useState(false);
  const [toggleCheckOcupada, setToggleCheckOcupada] = useState(false);
  const navigation = useNavigation();
  return (
    <ModalWI
      title="O que deseja fazer?"
      textCancel="Sair"
      textConfirm="Concluir"
      cancel={onCancel}
      confirm={onExit}
    >
      <ContainerModal>
        <ContainerButtons>
          <ButtonModalSimple title={"Realizar pedido"} onPress={() => navigation.push("AdminRoutes", { screen: "Comanda" })}/>
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
