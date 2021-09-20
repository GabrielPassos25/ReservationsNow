import React, { useEffect, useState } from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
import CheckBox from "@react-native-community/checkbox";

import {
  ContainerModal,
  Forms,
  Input,
  LabelTitle,
  ContentForm,
} from "./styles";
import { ModalWI } from "../ModalWI";
import { FormFieldLogin } from "../FormFieldLogin";

interface ModalCreatePratoProps {
  onCancel: () => void;
  onExit: () => void;
}
export function ModalCreatePrato({ onCancel, onExit }: ModalCreatePratoProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [keyboardStatus, setKeyboardStatus] = useState("");

  const DismissKeyboard = ({ children }: any) => (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
  return (
    <ModalWI
      title="Adicionar novo prato/bebida"
      textCancel="Sair"
      textConfirm="Criar prato"
      cancel={onCancel}
      exit={onExit}
    >
      <ContainerModal>
        <ContentForm>
          <LabelTitle>Nome:</LabelTitle>
          <Forms>
            <DismissKeyboard>
              <Input
                showSoftInputOnFocus={false}
                placeholder={"nome do prato"}
                onChangeText={(e) => setName(e)}
                placeholderTextColor="gray"
                value={name}
                onSubmitEditing={Keyboard.dismiss}
              />
            </DismissKeyboard>
          </Forms>
        </ContentForm>
        <ContentForm>
          <LabelTitle>Descrição:</LabelTitle>
          <Forms>
            <Input
              placeholder={"descrição do prato"}
              onChangeText={(e) => setDescription(e)}
              placeholderTextColor="gray"
              value={description}
              onSubmitEditing={() => Keyboard.dismiss()}
            />
          </Forms>
        </ContentForm>
        <ContentForm>
          <LabelTitle>Valor:</LabelTitle>
          <Forms>
            <Input
              keyboardType="numeric"
              placeholder={"R$"}
              onChangeText={(e) => setPrice(e)}
              placeholderTextColor="gray"
              value={price}
              onSubmitEditing={Keyboard.dismiss}
            />
          </Forms>
        </ContentForm>
      </ContainerModal>
    </ModalWI>
  );
}
