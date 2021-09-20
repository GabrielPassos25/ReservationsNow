import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const InfoContainer = styled.View`
  flex-direction: column;
  width: ${RFValue(150)}px;
`;

export const Image = styled.Image`
  width: ${RFValue(100)}px;
  height: ${RFValue(65)}px;
  border-radius: 20px;
`;

export const Title = styled.Text`
  margin-top: 7px;
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: #000000;
`;

export const Price = styled.Text`
  font-size: ${RFValue(11)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.gray_dark};
  text-align: left;
`;
