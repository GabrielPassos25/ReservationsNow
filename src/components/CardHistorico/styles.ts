import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    flex-direction: column;
    justify-content: flex-start;
    width: ${Dimensions.get("screen").width * 0.95}px;
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 2px 5px 2px rgba(177, 177, 177, 0.25);
    elevation: 7;
    border-radius: 15px;
    margin-bottom: ${RFValue(20)}px;
`;

export const InfosArea = styled.View`
    flex-direction: row;
    margin: 0 15px;
    align-items: center;
    justify-content: space-between;
`;
  
export const TextImageArea = styled.View`
    flex-direction: row;
    align-items: center;
`;

export const Image = styled.Image`
    height: ${RFValue(40)}px;
    width: ${RFValue(40)}px;
    border-radius: 20px;
`;

export const TitleRestaurante = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium };
    color: ${({theme}) => theme.colors.gray_dark};
    padding-top: 5px;
`;

export const Data = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.medium };
    color: ${({theme}) => theme.colors.gray_dark};
    padding-top: 5px;
`;

export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_dark};
  height: 0.5px;
  width: 90%;
  align-self: center;
`;

export const OrderDetails = styled.View`
    padding: 5px;
    margin: 2px 0 0 15px;
`;
export const AtendimentoID = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({theme}) => theme.fonts.regular };
    color: ${({theme}) => theme.colors.gray_dark};
`;

export const ReservaDetails = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.gray_dark};
`;

export const Evaluation = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 10px 0 ;
`;

export const EvaluationText = styled.Text`
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.gray_dark};
`;



export const Menu = styled.View`
    display: flex;
    color: ${({theme}) => theme.colors.primary};
    `;
    
export const MenuButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    background-color: ${({theme}) => theme.colors.primary};
    padding: 10px 5px;
    border-bottom-start-radius: 10px;
    border-bottom-end-radius: 10px;
`;

export const MenuText = styled.Text`
    color: ${({theme}) => theme.colors.white};
`;