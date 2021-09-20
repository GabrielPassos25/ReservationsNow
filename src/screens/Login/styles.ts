import styled from "styled-components/native";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
`;

export const StatusBarAndroid = styled.StatusBar`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Forms = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;

export const RecuperarSenha = styled.Text`
  text-decoration-line: underline;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  text-align: right;
`;
export const TextoRegistro = styled.Text`
  width: 100%;
  text-align: center;
  font-size: ${RFValue(14)}px;
  margin-top: ${RFValue(10)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const Registro = styled.Text`
  text-align: center;
  font-size: ${RFValue(15)}px;
  color: ${({ theme }) => theme.colors.purple};
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ButtonRecuperarSenha = styled.TouchableOpacity`
  width: 80%;
  margin-top: ${RFValue(11)}px;
`;

export const ButtonRegistro = styled.TouchableOpacity`
  width: 100%;
`;

export const Informations = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Text = styled.Text`
  margin-top: ${RFValue(60)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(30)}px;
  padding: 20px;
`;

export const ImageContainer = styled.View`
  align-items: flex-end;
  padding-horizontal: 40px;
  margin-bottom: 20px;
`;
