import * as yup from 'yup';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from "@react-navigation/native"

import { PublicRoutesNavigationsProps } from "@/presentation/routes/public.routes"
import { useAuthContext } from "@/presentation/context/auth-context";

export type SigninViewModelReturn = ReturnType<typeof useSignInViewModel>;

type FormData = {
    email: string;
    password: string;
}

const singInSchema = yup.object({
    email: yup.string().email('Informe um e-mail valido.').required('Informe o e-mail.'),
    password: yup.string().required('Informe sua senha.'), 
});

export function useSignInViewModel() {
    const {control, handleSubmit, formState: { errors }} = useForm<FormData>({
        resolver: yupResolver(singInSchema),
    });

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const { handleSignIn, isLoading } = useAuthContext();

    const navigation = useNavigation<PublicRoutesNavigationsProps>()

    function handleNavigationToSingUp() {
        navigation.navigate('signup');
    }

    function handleShowPassword() {
        setIsPasswordVisible(visible => !visible);
    }

    return {
        control,
        errors,
        isPasswordVisible,
        handleShowPassword,
        handleNavigationToSingUp,
        handleSignIn,
        handleSubmit,
        isLoading
    }
}