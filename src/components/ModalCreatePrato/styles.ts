import { RFValue } from "react-native-responsive-fontsize";

import { TextInput } from "react-native";
import styled from "styled-components/native";
export const ContainerModal = styled.View`
  width: 100%;
`;

export const ContentForm = styled.View`
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: ${RFValue(15)}px;
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

  color: ${({ theme }) => theme.colors.purple_dark};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const LabelTitle = styled.Text`
  margin-top: ${RFValue(8)}px;
  margin-bottom: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.gray_dark};
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const Forms = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.white};
  align-items: center;
  justify-content: center;
`;
export const Input = styled(TextInput)`
  color: ${({ theme }) => theme.colors.black};
  width: ${RFValue(200)}px;
  height: ${RFValue(30)}px;
  border: 1px solid ${({ theme }) => theme.colors.gray_dark};
  border-radius: 18px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  padding-left: 17px;
`;
