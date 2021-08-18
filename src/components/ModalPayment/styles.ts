import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 10px;
  align-items: center;
  shadow-color: ${({ theme }) => theme.colors.black};
  shadow-opacity: 1;
  shadow-radius: 10px;
`;
export const Title = styled.Text`
  margin-top: ${RFValue(20)}px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.purple_dark};
`;
export const Description = styled.Text`
  margin-top: ${RFValue(10)}px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_dark};
`;
export const Space = styled.View`
  margin-top: ${-RFValue(10)}px;
`;
export const Buttons = styled.View`
  width: 100%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.purple_medium};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  margin-top: 30px;
  justify-content: space-evenly;
  padding: 10px;
  bottom: -5px;
`;
export const ButtonOption = styled.TouchableOpacity`
  flex: 1;
`;
export const Divider = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
`;

export const ButtonText = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
`;
