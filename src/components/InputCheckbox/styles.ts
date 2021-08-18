import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
`;

export const TextInputCheck = styled.Text`
  color: ${({ theme }) => theme.colors.gray_dark_2};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
