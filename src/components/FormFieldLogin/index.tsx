import React, { useState } from 'react';
import { TextInputProps } from 'react-native'
import { Container, Titulo, Forms, Icon, Error, Input } from './styles';
import { Control, Controller } from 'react-hook-form';

const icons = {
    email: "email-outline",
    password: "key-outline",
    name: "account-outline"
}

interface Props extends TextInputProps {
    control: Control;
    name: string;
    error: string;
    title: string,
    type: 'email' | 'password' | 'name';
}


export function FormFieldLogin({ control, name, error, title, type, ...rest }: Props) {

    return (
        <Container>
            <Controller control={control} render={({ field: { onChange, value } }) => (
                <>
                    <Titulo isFilled={!!value} >
                        {title}
                    </Titulo>
                    <Forms isFilled={!!value}>
                        <Icon name={icons[type]} type={type} isFilled={!!value} />
                        <Input placeholder={title} onChangeText={onChange} placeholderTextColor='gray' secureTextEntry={type === 'password' ? true : false} value={value} />
                    </Forms>
                </>
            )} name={name} />
            {error && <Error>{error}</Error>}
        </Container >
    );
}