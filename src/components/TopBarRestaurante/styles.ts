import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  height: ${RFValue(80)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;
export const Image = styled.Image`
  align-self: flex-start;
  margin-left: ${RFValue(20)}px;
  margin-top: ${RFValue(-30)}px;
  width: ${RFValue(70)}px;
  height: ${RFValue(70)}px;
`;
