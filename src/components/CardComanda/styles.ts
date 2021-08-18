import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex-direction: row;
  align-items: flex-start;
  align-items: center;
  margin-top: ${RFValue(-40)}px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  padding-top: 10px;
  padding-left: 20px;
  padding-bottom: 10px;
  width: 85%;
  max-width: 350px;
  height: 125px;
`;
export const AreaLeft = styled.View`
  justify-content: space-between;
  width: 80%;
  height: 85%;
`;
export const AreaRight = styled.View`
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  width: 15%;
  height: 90%;
`;

export const Image = styled.Image`
  width: 25px;
  height: 25px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(17)}px;
  color: ${({ theme }) => theme.colors.purple_dark};
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
`;
export const Line = styled.View`
  margin: 0 13px;
  background-color: ${({ theme }) => theme.colors.purple_dark};
  border-radius: 10px;
  width: 0.9px;
  height: 90%;
`;
export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.purple_dark};
`;
export const SubMenu = styled.View`
  flex-direction: column;
`;

export const TitleH3 = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.primary_light1};
`;
