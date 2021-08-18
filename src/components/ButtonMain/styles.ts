import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
   
  
`;
export const Button = styled.TouchableOpacity`
    width: 121px;
    height: 115px;
    background: #FFFFFF;
    border-radius: 15px;
    align-items: center;
    justify-content: center;
    padding: 0;
  
`;

export const SubTitle = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    line-height: 30px;
    margin-top: 3px;
    color: #FFFFFF;
  
`;
