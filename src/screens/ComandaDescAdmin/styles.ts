import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.gray_light};
`;
export const AreaFlatList = styled.View`
  width: 100%;

  margin-top: 35px;
`;
export const TextButton2 = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(17)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;
