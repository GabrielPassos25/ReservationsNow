import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { TouchableOpacity } from "react-native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const BackButton = styled(TouchableOpacity)`
  margin-top: ${RFValue(10)}px;
  flex-direction: row;
  padding: 0px 20px;
  align-items: center;
`;

export const Icon = styled(Feather)``;

export const BackText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Title = styled.Text`
  margin-top: ${RFValue(38)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(30)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Forms = styled.View`
  align-items: center;
`;

export const ButtonInitialContainer = styled.View`
  align-items: center;
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
  backgroundColor: "#1F3955",
})``;

export const StatusBarIOS = styled.View`
  height: ${getStatusBarHeight() + 10}px;
`;

export const EnableScrollView = styled.ScrollView.attrs({
  contentContainerStyle: { flexGrow: 1 },
})`
  flex: 1;
`;
