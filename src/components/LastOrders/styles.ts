import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const InfoContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_light};
  flex-direction: row;
  justify-content: space-around;
  padding: 10px 5px;
`;

export const InfoText = styled.View`
  flex-direction: column;
`;
export const Title = styled.Text`
  text-align: center;
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.gray_dark};
`;

export const TitleValue = styled.Text`
  text-align: center;
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.purple_dark};
`;

export const InfoIcon = styled.View`
  justify-content: center;
  align-items: center;
`;
export const IconBackground = styled.View`
  padding:5px;
  background-color: ${({ theme }) => theme.colors.purple_dark};
  border-radius: 5px;
`;
export const DescriptionContainer = styled.View`
  flex-direction: row;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_dark};
  height: 0.5px;
`;
