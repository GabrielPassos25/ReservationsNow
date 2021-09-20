import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const TextTitle = styled.Text`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${RFValue(12)}px;
  margin-left: ${RFValue(5)}px;
  margin-bottom: ${RFValue(3)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary};
`;
export const ContainerModal = styled.View`
  width: 100%;
`;

export const ViewTime = styled.View`
  margin-left: 33%;
`;

export const Button = styled.TouchableOpacity`
  height: ${RFValue(40)}px;
  padding: 0 5px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 15px;
  justify-content: center;
  align-items: center;
`;

export const TextHoras = styled.Text`
  color: #ffffff;
  font-size: 12px;
`