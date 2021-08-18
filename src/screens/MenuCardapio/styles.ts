import styled from "styled-components/native";
import { Dimensions } from "react-native";

export const Container = styled.View`
  flex: 1;
  background: ${({ theme }) => theme.colors.white};
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
  backgroundColor: "#1F3955",
})``;

export const ButtonsContainer = styled.View`
  width: ${Dimensions.get("screen").width}px;
  height: 50px;
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
`;
