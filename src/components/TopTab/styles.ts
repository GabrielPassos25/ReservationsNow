import { RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const PageName = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  margin-top: 7px;
  margin-bottom: ${RFValue(20)}px;
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const HomeContainer = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: ${RFValue(10)}px;
`;