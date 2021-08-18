import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
`;

export const Logo = styled.Image`
  margin-top: ${getStatusBarHeight() + RFValue(25)}px;

  width: ${RFValue(80)}px;
  height: ${RFValue(80)}px;
`;

export const PageName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 7px;
  margin-bottom: 7px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
