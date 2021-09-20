import React, { useState } from "react";
import { Platform, Dimensions } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ButtonInitial } from "../../components/ButtonInitial";
import { FormField } from "../../components/FormField";
import { api } from "../../utils/api";
import {
  Container,
  BackButton,
  Icon,
  BackText,
  Title,
  Forms,
  ButtonInitialContainer,
  StatusBarAndroid,
  StatusBarIOS,
  EnableScrollView,
} from "./styles";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPasword: string;
}

const schema = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório!"),
  email: Yup.string()
    .matches(/^(?!.*@reservationsnow\.com)/i, "Email não permitido!")
    .email("Email inválido")
    .required("Email é obrigatório!"),
  password: Yup.string()
    .matches(/\w*[A-Z]\w*/, "A senha deve conter uma letra maiúscula!")
    .matches(/\w*[a-z]\w*/, "A senha deve conter uma letra minúscula!")
    .matches(/\d/, "Senha deve conter um número!")
    .min(6, ({ min }) => `Senha deve conter no mínimo ${min} caractéres!`)
    .required("Senha é obrigatória!"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "As senhas são diferentes!")
    .required("Confirme a sua senha!"),
});

interface Props {
  navigation: any;
}

export function Register({ navigation }: Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleRegister(form: FormData) {
    const data = {
      nome: form.name,
      email: form.email,
      senha: form.password,
    };
    const response = await api.post("/register", data);
  }
  return (
    <Container>
      <StatusBarAndroid />
      {Platform.OS === "ios" ? <StatusBarIOS /> : <></>}
      <KeyboardAwareScrollView
        automaticallyAdjustContentInsets
        style={{ paddingBottom: Platform.OS === "android" ? 20 : 0 }}
      >
        <BackButton onPress={() => navigation.push("Login")}>
          <Icon name="arrow-left" size={24} color="white" />
          <BackText>Voltar</BackText>
        </BackButton>
        <Title>Cadastre-se</Title>
        <Forms>
          <FormField
            control={control}
            name="name"
            error={errors.name && errors.name.message}
            type="name"
            title="Nome Completo"
          />
          <FormField
            control={control}
            name="email"
            error={errors.email && errors.email.message}
            type="email"
            title="Email"
          />
          <FormField
            control={control}
            name="password"
            error={errors.password && errors.password.message}
            type="password"
            title="Senha"
          />
          <FormField
            control={control}
            name="confirmPassword"
            error={errors.confirmPassword && errors.confirmPassword.message}
            type="password"
            title="Repita a Senha"
          />
        </Forms>
        <ButtonInitialContainer>
          <ButtonInitial
            title="Cadastrar"
            onPress={handleSubmit(handleRegister)}
          />
        </ButtonInitialContainer>
      </KeyboardAwareScrollView>
    </Container>
  );
}
