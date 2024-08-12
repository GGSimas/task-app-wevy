

import * as Input from '@/presentation/components/input';
import * as Button from '@/presentation/components/button';

import * as S from './styles';
import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';
import { SigninViewModelReturn } from './signin.model';
import { Controller } from 'react-hook-form';

type SignInViewProps = SigninViewModelReturn;

export function SigninView({ 
    control,
    errors, 
    isPasswordVisible,
    isLoading,
    handleNavigationToSingUp, 
    handleShowPassword, 
    handleSubmit,
    handleSignIn,
}: SignInViewProps) {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <S.Container>
                <S.Header>
                    <S.TodoIcon />
                    <S.Title>TODO</S.Title>
                </S.Header>

                <S.Content>
                        <S.Label>Acesse sua conta</S.Label>
                        <Controller
                            control={control}
                            name="email"
                            render={({field: { value, onChange, }}) => (
                                <Input.Default 
                                    placeholder='E-mail' 
                                    value={value} 
                                    isInvalid={!!errors.email?.message}
                                    error={!!errors.email?.message ? errors.email.message : ''}
                                    onChangeText={onChange} 
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                />
                            )} />
                        
                            
                        <Controller
                            control={control}
                            name="password"
                            render={({field: { value, onChange }}) => (
                                <Input.Icon 
                                    placeholder='Senha' 
                                    value={value} 
                                    onChangeText={onChange}
                                    icon={isPasswordVisible ? S.EyeIcon : S.EyeOffIcon}
                                    secureTextEntry={!isPasswordVisible}
                                    onPress={handleShowPassword}
                                    isInvalid={!!errors.password?.message}
                                    error={!!errors.password?.message ? errors.password.message : ''}
                                />
                            )} />

                        <Button.Primary onPress={handleSubmit(handleSignIn)} title="Acessar sua conta" isLoading={isLoading} />
                </S.Content>

                <S.Footer>
                    <S.Label>Não possui conta?</S.Label>
                    <Button.Ghost onPress={handleNavigationToSingUp} title="Criar sua conta agora"/>
                </S.Footer>
            </S.Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}