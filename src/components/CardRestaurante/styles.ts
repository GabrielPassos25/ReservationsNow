import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: ${Dimensions.get("screen").width}px;
    height: 110px;
    paddingVertical: 20px;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    background-color: ${({ theme }) => theme.colors.white};
`;

export const Image = styled.Image`
    height: ${RFValue(80)}px;
    width: ${RFValue(80)}px;
    border-radius: 12px;
`;

export const InfosArea = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 65%;
    margin-left: 5px;
    height: 60%;
  
`;
export const TitleRestaurante = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.black};
`;

export const DetailsRestaurante = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.gray_dark};
    padding-bottom: 10px;
    opacity: 0.9;
`;

export const RateRestaurante = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 45px;
    height: 25px;
`;


export const RateText = styled.Text`
    padding: 3px 0 0 3px;
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium};
    color: ${({theme}) => theme.colors.gray_dark}
`;