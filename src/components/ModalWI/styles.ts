import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const ModalContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.colors.background_modal};
`;
export const Content = styled.View`
  width: 80%;
  background-color: white;
  border-radius: 20px;
  align-items: center;

  box-shadow: 1px 5px 6px rgba(177, 177, 177, 0.6);
`;
export const Title = styled.Text`
  margin-top: ${RFValue(20)}px;
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.purple_dark};
`;
export const Description = styled.Text`
  margin-top: ${RFValue(10)}px;
  padding-left: 10px;
  padding-right: 10px;
  font-size: ${RFValue(12)}px;
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray_dark};
`;
export const Space = styled.View`
  margin-top: ${-RFValue(10)}px;
`;
export const Buttons = styled.View`
  width: 100%;
  height: 55px;
  flex-direction: row;

  align-items: center;
  background-color: ${({ theme }) => theme.colors.purple_medium};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
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
