import React, {useState, useContext} from 'react';
import { Modal, KeyboardAvoidingView, Platform, Keyboard, TouchableWithoutFeedback} from 'react-native';
import { FormFieldLogin } from '../FormFieldLogin';
import {ModalContainer, Content, Title, Description, Space, Buttons, ButtonOption, Divider, ButtonText} from './styles'
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {api} from '../../utils/api';
import { RestauranteContext } from "../../components/Contexts/RestauranteContext";
import { useNavigation } from "@react-navigation/native";
interface ModalProps{
    cancel: () => void;
    exit: () => void;
}

export function ModalPayment({cancel, exit} : ModalProps) {
    const { comandaAtual } = useContext(RestauranteContext);
    const [modalVisible, setModalVisible] = useState(true);
    const navigation = useNavigation();
    const schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório!'),
        password: Yup.string().required('Senha é obrigatória!'),
    });
    const {
        control,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: yupResolver(schema)
    });
    async function handleEncerrar(){
        await api.patch('/comanda/' + comandaAtual.id);
        setModalVisible(false); 
        exit();
        navigation.navigate("AdminRoutes", { screen: "Início"});
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            >
                <ModalContainer>
                    <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={Platform.OS === 'ios' ? 80 : 20}>
                    <Content>
                        <Title>Encerrar Mesa</Title>
                        <Description>Deseja encerrar a mesa XX?</Description>
                        <Space/>
                        <FormFieldLogin control={control} type='name' title='Nome' error={errors.name && errors.name.message} name="name"/>
                        <Space/>
                        <FormFieldLogin control={control}  name="password" type='password' title='Senha' error={errors.password && errors.password.message}/>
                        <Buttons>
                            <ButtonOption onPress ={() => {setModalVisible(false); cancel()} }>
                                <ButtonText>Cancelar</ButtonText>
                            </ButtonOption>
                            <Divider>|</Divider>
                            <ButtonOption onPress ={handleEncerrar}>
                                <ButtonText>Encerrar</ButtonText>
                            </ButtonOption>
                        </Buttons>
                    </Content>
                    </KeyboardAvoidingView>
                </ModalContainer>
            </Modal>
        </TouchableWithoutFeedback>
    );
}
