import React, { useState } from "react";
import {
  Modal,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import {
  ModalContainer,
  Content,
  Title,
  Description,
  Space,
  Buttons,
  ButtonOption,
  Divider,
  ButtonText,
} from "./styles";

interface ModalProps {
  cancel: () => void;
  exit: () => void;
  title: string;
  text?: string;
  textConfirm?: string;
  textCancel?: string;
  children?: React.ReactNode;
}

export function ModalWI({
  cancel,
  exit,
  title,
  text,
  textConfirm,
  textCancel,
  children,
}: ModalProps) {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <ModalContainer>
          <KeyboardAvoidingView
            behavior="padding"
            keyboardVerticalOffset={Platform.OS === "ios" ? 80 : 20}
          >
            <Content>
              <Title>{title}</Title>
              <Description>{text}</Description>
              {children}
              <Buttons>
                <ButtonOption
                  onPress={() => {
                    setModalVisible(false);
                    cancel();
                  }}
                >
                  <ButtonText>{textCancel ?? "Cancelar"}</ButtonText>
                </ButtonOption>
                <Divider>|</Divider>
                <ButtonOption
                  onPress={() => {
                    setModalVisible(false);
                    exit();
                  }}
                >
                  <ButtonText>{textConfirm ?? "Reservar"}</ButtonText>
                </ButtonOption>
              </Buttons>
            </Content>
          </KeyboardAvoidingView>
        </ModalContainer>
      </Modal>
    </TouchableWithoutFeedback>
  );
}
