import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";
import { Dimensions } from "react-native";

interface ButtonProps {
  isActive: boolean;
}

export const ButtonContainer = styled.View<ButtonProps>`
  flex-grow: 1;
  align-items: center;
  border-bottom-width: 1.5px;
  border-bottom-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.purple_dark : "transparent"};

  background: ${({ theme }) => theme.colors.purple_light};
`;

export const TabButton = styled(RectButton)`
  width: ${Dimensions.get("screen").width * (1 / 3)}px;
  height: 55px;
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text<ButtonProps>`
  font-size: ${RFValue(12)}px;
  text-align: center;

  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.purple_dark : theme.colors.gray_dark};
`;
