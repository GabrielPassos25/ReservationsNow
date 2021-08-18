import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerModal = styled.View`
  width: 100%;
`;
export const CheckboxContainer = styled.View`
  justify-content: center;
`;

export const ContainerButtons = styled.View`
  align-items: flex-end;
  justify-content: flex-start;
`;
export const TitleCheckBox = styled.Text`
  text-align: center;
  margin-top: ${RFValue(13)}px;
  margin-bottom: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.purple_dark};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
