import * as yup from 'yup';
import { useState } from "react";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useNavigation } from "@react-navigation/native"

import { PublicRoutesNavigationsProps } from "@/presentation/routes/public.routes"
import { useAuthContext } from "@/presentation/context/auth-context";
import { SignUpParams } from "@/domain/models/signup";


export type SignUpViewModelReturn = ReturnType<typeof useSignUpViewModel>;

type FormData = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const singUpSchema = yup.object({
    name: yup.string().required('Informe o nome.'),
    email: yup.string().email('Informe um e-mail valido.').required('Informe o e-mail.'),
    password: yup.string().required('Informe sua senha.').min(6, 'A senha deve ter no minimo 6 digitos.'),
    confirmPassword: yup.string().required('confirme a senha.').oneOf([
        yup.ref("password"), ''
    ], 'as senhas devem ser iguais'),
});


export function useSignUpViewModel() {
    const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(singUpSchema),
    })
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { handleSignUp, isLoading } = useAuthContext();

    const navigation = useNavigation<PublicRoutesNavigationsProps>()

    function handleNavigationGoBack() {
        navigation.goBack();
    }

    function handleShowPassword() {
        setIsPasswordVisible(visible => !visible);
    }

    function onSubmitingSingUp({ name, email, password }: SignUpParams) {
        handleSignUp({name, email, password});
        handleNavigationGoBack();
    }
    return {
        control,
        handleSubmit,
        errors,
        isPasswordVisible,
        isLoading,
        handleShowPassword,
        handleNavigationGoBack,
        onSubmitingSingUp,
    }
}