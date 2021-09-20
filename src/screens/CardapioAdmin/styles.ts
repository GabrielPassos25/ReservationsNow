import styled from "styled-components/native";

import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
  backgroundColor: "#1F3955",
})``;

export const ButtonsContainer = styled.View`
  width: ${Dimensions.get("screen").width}px;

  background-color: ${({ theme }) => theme.colors.gray};

  flex-direction: row;
`;

export const DescriptionContainer = styled.View`
  flex: 1;
  align-items: center;

  background-color: ${({ theme }) => theme.colors.gray};
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_dark};
  height: 0.5px;
  width: 100%;
`;

export const ButtonSelectPrato = styled.TouchableOpacity`
  align-items: center;
  border-radius: 38px;
  margin-top: ${RFValue(5)}px;
  padding: ${RFValue(1)}px;

  background-color: ${({ theme }) => theme.colors.purple_light};
  width: 125px;
`;
export const TextButton = styled.Text`
  color: ${({ theme }) => theme.colors.purple_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const TextButton2 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const TextModal = styled.Text`
  color: ${({ theme }) => theme.colors.purple_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

