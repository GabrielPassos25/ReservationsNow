import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    border-radius: 15px;
`;
export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 2px 5px 2px rgba(177, 177, 177, 0.25);
 
    width:  ${RFValue(92)}px;
    height: 110px;

    border-radius: 15px;
    align-items: center;
    justify-content: center;
    elevation: 4; 
`;
export const InfosArea = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    width: 65%;
    margin: 10px 0 5px 0;

  
`;
export const TitleRestaurante = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: 700;
    text-align: center;
    width: 100%;
    line-height: 15px;
    color: ${({ theme }) => theme.colors.primary};
    border-radius: 51px;
 
  
`;

export const SubtitleRestaurante = styled.Text`
    font-size: ${RFValue(10)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    
    margin-top: 5px;
    font-weight: 500;

    line-height: 15px;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.8;
  
`;