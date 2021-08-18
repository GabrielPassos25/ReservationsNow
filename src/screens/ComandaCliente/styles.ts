import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray_light};
`;
export const AreaFlatList = styled.View`
    width: 100%;
    margin-top: 20px;
`;
export const StatusBarAndroid = styled.StatusBar.attrs({
    backgroundColor: '#1F3955',
})`
`;

export const StatusBarIOS = styled.View`
    height: ${getStatusBarHeight() + 10}px ;
    background-color: ${({ theme }) => theme.colors.primary};
 `;