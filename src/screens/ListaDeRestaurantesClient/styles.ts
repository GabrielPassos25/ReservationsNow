import { Dimensions } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const StatusBarAndroid = styled.StatusBar.attrs({
    backgroundColor: "#1F3955",
})``;

export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    background: ${({ theme }) => theme.colors.white};
`;

export const SearchContainer = styled.View`
`;

export const HeaderView = styled.View`
    flex: 1;
`;

export const DestaqueText = styled.Text`
    padding: 20px 15px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.black};
`;

export const ListView = styled.View`
    flex: 1;
`;

export const ListText = styled.Text`
    padding: 20px 15px 20px 15px;
    margin-top: 30px;
    font-family: ${({ theme }) => theme.fonts.medium};
    font-size: ${RFValue(18)}px;
    color: ${({ theme }) => theme.colors.black};
`;


export const Separator = styled.View`
  background-color: ${({ theme }) => theme.colors.gray_dark};
  height: 0.5px;
`;
