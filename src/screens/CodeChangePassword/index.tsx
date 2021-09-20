import React from 'react';
import { Alert, Platform } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { api } from "../../utils/api";
import { ButtonInitial } from '../../components/ButtonInitial';
import { FormField } from '../../components/FormField';
import { Container, BackButton, Icon, BackText, Title, Forms, ButtonInitialContainer, StatusBarAndroid, StatusBarIOS } from './styles';

interface FormData {
    code: string;
}

const schema = Yup.object().shape({
    code: Yup.string().required('Código é obrigatório!')
});

interface Props {
    navigation: any;
}


interface IQueryResponse {
    message: string,
    status: number,
    data?: any
  }

export function CodeChangePassword({navigation} : Props) {
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });

    async function handleCode(form: FormData) {
        const data = {
            codigo: form.code
        }
        let rota = "/reset"
        let response:IQueryResponse = (await api.post(rota, data)).data.response;
        if(response.status != 200){
            Alert.alert(
                "Erro",
                response.message,
                [
                {
                    text: 'ok',
                    onPress: () => {
                    //Do nothing
                    }
                }
                ]
            );
        }
        else{
            navigation.push("ChangePassword", {code: form.code});
        }
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
                <Title>Verificação de Código</Title>
                <Forms>
                    <FormField control={control} name="code" error={errors.code && errors.code.message} type="code" title="Código" />
                </Forms>
                <ButtonInitialContainer>
                    <ButtonInitial title="Validar" onPress={handleSubmit(handleCode)} />
                </ButtonInitialContainer>
            </KeyboardAwareScrollView>
        </Container>
    );
}
