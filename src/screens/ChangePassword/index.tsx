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
    password: string;
    confirmPasword: string;
}

const schema = Yup.object().shape({
    password: Yup.string().matches(/\w*[A-Z]\w*/, 'A senha deve conter uma letra maiúscula!').matches(/\d/, 'Senha deve conter um número!').min(8, ({ min }) => `Senha deve conter no mínimo ${min} caractéres!`).required('Senha é obrigatória!'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password')], 'As senhas são diferentes!').required('Confirme a sua senha!')
});

interface Props {
    navigation: any;
}

export function ChangePassword({navigation} : Props) {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    function handleRegister(form: FormData) {
        const data = {
            password: form.password
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
                <Title>Nova Senha</Title>
                <Forms>
                    <FormField control={control} name="password" error={errors.password && errors.password.message} type="password" title="Senha" />
                    <FormField control={control} name="confirmPassword" error={errors.confirmPassword && errors.confirmPassword.message} type="password" title="Repita a Senha" />
                </Forms>
                <ButtonInitialContainer>
                    <ButtonInitial title="Confirmar" onPress={handleSubmit(handleRegister)} />
                </ButtonInitialContainer>
            </KeyboardAwareScrollView>
        </Container>
    );
}
