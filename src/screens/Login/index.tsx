import React, { useState } from "react";
import {
  Container,
  Forms,
  RecuperarSenha,
  TextoRegistro,
  Registro,
  StatusBarAndroid,
  ButtonRecuperarSenha,
  ButtonRegistro,
  Informations,
  Text,
  ImageContainer,
} from "./styles";
import SvgUri from "react-native-svg-uri";
import { Platform, View, LayoutRectangle } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FormFieldLogin } from "../../components/FormFieldLogin";

import { DynamicScrollView } from "../../components/DynamicScrollView";

import LoginImage from "../../assets/logo.svg";
import theme from "../../global/styles/theme";
import { ButtonLogin } from "../../components/ButtonLogin";
import { RenderSvg } from "../../components/RenderSvg";

const schema = Yup.object().shape({
  email: Yup.string().email("Email inválido").required("Email é obrigatório!"),
  password: Yup.string()
    .matches(/\w*[A-Z]\w*/, "A senha deve conter uma letra maiúscula!")
    .matches(/\d/, "Senha deve conter um número!")
    .min(8, ({ min }) => `Senha deve conter no mínimo ${min} caractéres!`)
    .required("Senha é obrigatória!"),
});

interface Props {
  navigation: any;
}

export function Login({ navigation } : Props) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function find_dimensions(layout: LayoutRectangle) {
    const { height } = layout;
    setHeight(height);
    return height;
  }

  const [height, setHeight] = useState(0);
  return (
    <>
      <Container>
        {Platform.OS === "android" ? <StatusBarAndroid /> : <></>}
        <DynamicScrollView size={height}>
          {Platform.OS === "ios" && (
            <View
              style={{
                backgroundColor: theme.colors.primary,
                height: 1000,
                position: "absolute",
                top: -1000,
                left: 0,
                right: 0,
              }}
            />
          )}
          <View
            onLayout={(event) => {
              find_dimensions(event.nativeEvent.layout);
            }}
          >
            <Informations>
              <Text>Bem vindo!</Text>
              <ImageContainer>
                <RenderSvg name="logo"/>
              </ImageContainer>
            </Informations>
          </View>
          <Forms>
            <FormFieldLogin
              control={control}
              name="email"
              type="email"
              error={errors.email && errors.email.message}
              title="Email"
            />
            <FormFieldLogin
              control={control}
              name="password"
              type="password"
              error={errors.password && errors.password.message}
              title="Senha"
            />
            <ButtonRecuperarSenha
              onPress={() => navigation.push("RequestChangePassword")}
            >
              <RecuperarSenha>Esqueceu a senha?</RecuperarSenha>
            </ButtonRecuperarSenha>
            <ButtonLogin
              title="Entrar"
              // onPress={() => navigation.push("DashboardClient")}
              onPress={() => navigation.push("AdminRoutes")}
            />
            <TextoRegistro>Não possui conta?</TextoRegistro>
            <ButtonRegistro onPress={() => navigation.push("Register")}>
              <Registro>Registre-se {">"}</Registro>
            </ButtonRegistro>
          </Forms>
        </DynamicScrollView>
      </Container>
    </>
  );
}
