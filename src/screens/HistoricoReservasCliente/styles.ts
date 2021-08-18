import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 100%;
    justify-content: space-between;
    align-items: center;
    background: ${({ theme }) => theme.colors.gray_light};

`;
