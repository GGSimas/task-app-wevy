

import { Keyboard, KeyboardAvoidingView, Platform, TouchableWithoutFeedback } from 'react-native';

import * as Input from '@/presentation/components/input';
import * as Button from '@/presentation/components/button';

import { SignUpViewModelReturn } from './signup.model';
import * as S from './styles';
import { Controller } from 'react-hook-form';

type SingUpViewProps = SignUpViewModelReturn;

export function SignUpView({
    control,
    errors,
    handleSubmit,
    isPasswordVisible,
    isLoading,
    handleNavigationGoBack,
    handleShowPassword,
    onSubmitingSingUp,
}: SingUpViewProps) {
    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <S.Container>
                <S.Header>
                    <S.TodoIcon />
                    <S.Title>TODO</S.Title>
                </S.Header>

                <S.Content>
                        <S.Label>Crie sua conta</S.Label>
                        <Controller
                            control={control}
                            name="name"
                            render={({ field: { value, onChange } }) => (
                                <Input.Default
                                    placeholder='Nome'
                                    value={value}
                                    onChangeText={onChange}
                                    isInvalid={!!errors.name?.message}
                                    error={!!errors.name?.message ? errors.name.message : ''}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="email"
                            render={({ field: { value, onChange } }) => (
                                <Input.Default 
                                    placeholder='E-mail'
                                    value={value}
                                    onChangeText={onChange}
                                    isInvalid={!!errors.email?.message}
                                    error={!!errors.email?.message ? errors.email.message : ''}
                                    keyboardType="email-address" 
                                    autoCapitalize="none"
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            render={({ field: { value, onChange } }) => (
                                <Input.Icon 
                                    placeholder='Senha'
                                    value={value}
                                    onChangeText={onChange}
                                    isInvalid={!!errors.password?.message}
                                    error={!!errors.password?.message ? errors.password.message : ''}
                                    icon={isPasswordVisible ? S.EyeOffIcon : S.EyeIcon} 
                                    onPress={handleShowPassword}
                                    secureTextEntry={isPasswordVisible} 
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="confirmPassword"
                            render={({ field: { value, onChange } }) => (
                                <Input.Icon 
                                    placeholder='Confirmar a senha'
                                    value={value}
                                    onChangeText={onChange}
                                    isInvalid={!!errors.confirmPassword?.message}
                                    error={!!errors.confirmPassword?.message ? errors.confirmPassword.message : ''}
                                    icon={isPasswordVisible ? S.EyeOffIcon : S.EyeIcon} 
                                    onPress={handleShowPassword}
                                    secureTextEntry={isPasswordVisible}
                                />
                            )}
                        />
                        <Button.Primary onPress={handleSubmit(onSubmitingSingUp)} title="Criar sua conta" isLoading={isLoading} />
                </S.Content>

                <S.Footer>
                    <S.Label>Já possui uma conta?</S.Label>
                    <Button.Ghost onPress={handleNavigationGoBack} title="Voltar para o login" />
                </S.Footer>
            </S.Container>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}