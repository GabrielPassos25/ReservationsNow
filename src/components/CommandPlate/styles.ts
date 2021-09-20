import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    align-items: center;
    border-radius: 15px;
    margin-bottom: 20px;
    flex-direction: column;
    elevation: 4; 
`;
export const Button = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.white};
    box-shadow: 2px 10px 2px rgba(177, 177, 177, 0.25);
    width:  ${RFValue(100)}px;
    height: ${RFValue(110)}px;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.Text`
    margin-top: ${RFValue(10)}px;;
`;