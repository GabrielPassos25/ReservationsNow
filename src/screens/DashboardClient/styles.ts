import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.primary};

   
`;
export const HeaderArea = styled.View`
    flex-direction: column;
    align-items: center;
   
    margin-top: 50px;

  
`;
export const HeaderTitle = styled.Text`
    width: 225px;
    font-size: ${RFValue(17)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    line-height: 30px;
    margin-top: 15px;
    text-align: center;

    color: #FFFFFF;

`;
export const HeaderSubTitle = styled.Text`
    width: 225px;
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    line-height: 30px;
  text-align: center;

    color: #FFFFFF;

`;

export const SearchArea = styled.View`
    display: flex;
    flex-direction: column;
    flex: 1;
    align-items: center;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 20px;
    padding: 0 15px;
  
`;
export const ViewRow = styled.View`
    flex-direction: row;

    margin-bottom: 35px;

`;

export const OptionButton = styled.View`
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
  
`;

export const SubtitleButton = styled.Text`
    font-size: ${RFValue(11)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    line-height: 30px;

    margin-top: 3px;

    color: #FFFFFF;
  
`;

export const StatusBarAndroid = styled.StatusBar.attrs({
    backgroundColor: '#1F3955',
})`
`;