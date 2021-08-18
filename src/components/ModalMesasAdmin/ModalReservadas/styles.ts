import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ContainerModal = styled.View`
  width: 100%;
`;
export const Title = styled.Text`
  text-align: center;

  margin-bottom: ${RFValue(8)}px;
  color: ${({ theme }) => theme.colors.gray_dark_2};
  font-size: ${RFValue(15)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
export const SubTitle = styled.Text`
  margin-top: ${RFValue(10)}px;
  color: ${({ theme }) => theme.colors.gray_dark};
  opacity: 0.8;
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
