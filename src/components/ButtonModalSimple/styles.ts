import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(TouchableOpacity)`
  flex-direction: row;
  width: ${RFValue(190)}px;
  height: ${RFValue(35)}px;
  margin-bottom: ${RFValue(5)}px;
  background-color: ${({ theme }) => theme.colors.purple_medium_opacity};

  border-radius: 38px;
  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.white};
`;
export const ImageButton = styled.Image`
  width: ${RFValue(10)}px;
  height: ${RFValue(18)}px;
`;
