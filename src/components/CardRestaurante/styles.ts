import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
  
    width: 100%;
    height: 150px;
    margin-top: 20px;

    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 1px 3px 4px rgba(177, 177, 177, 0.25);
    border-radius: 15px;
  
`;
export const Image = styled.Image`
    height: ${RFValue(125)}px;
    width: ${RFValue(125)}px;
`;
export const InfosArea = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 65%;
    margin-left: 5px;
    height: 60%;
  
`;
export const TitleRestaurante = styled.Text`
    font-size: ${RFValue(14)}px;
    font-weight: 700;

    line-height: 21px;
    color: #666666;
  
`;

export const SubtitleRestaurante = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    margin-top: 15px;
    font-weight: 500;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.9;
`;