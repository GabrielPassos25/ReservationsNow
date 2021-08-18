import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

export const InfoContainer = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_light};

  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 155px;
  padding: 15px 10px;
`;

export const InfoImage = styled.View`
  width: 20%;
  padding-horizontal: 1px;
`;

export const Image = styled.Image`
  width: ${RFValue(65)}px;
  height: ${RFValue(65)}px;
`;

export const InfoText = styled.View`
  width: 60%;
  padding-left: 10px;
`;
export const Title = styled.Text`
  font-size: ${RFValue(13)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.gray_dark};
`;
export const Description = styled.Text`
  overflow: hidden;
  max-height: 50%;
  text-align: justify;
  font-size: ${RFValue(9)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.black};
`;

export const InfoPrice = styled.View`
  align-self: flex-end;
  width: 20%;
`;
export const PriceLabel = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary_light1};
  text-align: right;
`;
export const Price = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.primary_light2};
  text-align: right;
`;
