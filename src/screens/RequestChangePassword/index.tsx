import React from 'react';
import { Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { ButtonInitial } from '../../components/ButtonInitial';
import { FormField } from '../../components/FormField';
import { Container, BackButton, Icon, BackText, Title, Forms, ButtonInitialContainer, StatusBarAndroid, StatusBarIOS } from './styles';

interface FormData {
    email: string;
}

const schema = Yup.object().shape({
    email: Yup.string().email('Email inválido').required('Email é obrigatório!')
});

interface Props {
    navigation: any;
}

export function RequestChangePassword({navigation} : Props) {
    const [visible, setVisible] = React.useState(false);
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleRegister(form: FormData) {
        const data = {
            email: form.email
        }
        console.log(data)
    }

    return (
        <Container>
            <StatusBarAndroid />
            {
                Platform.OS === 'ios' ? < StatusBarIOS /> : <></>
            }
            <KeyboardAwareScrollView automaticallyAdjustContentInsets={false}>
                <BackButton onPress={() => navigation.push('Login')}>
                    <Icon name="arrow-left" size={24} color="white" />
                    <BackText>Voltar</BackText>
                </BackButton>
                <Title>Redefinição de Senha</Title>
                <Forms>
                    <FormField control={control} name="email" error={errors.email && errors.email.message} type="email" title="Email" />
                </Forms>
                <ButtonInitialContainer>
                    <ButtonInitial title="Redefinir" onPress={handleSubmit(handleRegister)} />
                </ButtonInitialContainer>
            </KeyboardAwareScrollView>
        </Container>
    );
}
