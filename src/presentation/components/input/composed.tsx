import { Pressable, TextInput } from 'react-native';
import * as S from './styles';

export type RootProps = React.PropsWithChildren & S.RootStyledProps;

export function Root({ children, isInvalid = false }: RootProps) {
    return <S.Root isInvalid={isInvalid} testID='root'>{children}</S.Root>;
}

export type InputProps = React.ComponentProps<typeof TextInput>;

export function Input({ ...rest }: InputProps) {
    return <S.Input {...rest} />
}

export type IconWrapperProps = React.ComponentProps<typeof Pressable> & React.PropsWithChildren;

export function IconWrapper({ children, ...rest }: IconWrapperProps) {
    return <S.IconWrapper {...rest}>{children}</S.IconWrapper>;
}

type ErrorMessageProps = {
    message: string;
}
export function ErrorMessage({ message }: ErrorMessageProps) {
    return <S.ErrorMessage>{message}</S.ErrorMessage>
}

export function FormControll({ children }: React.PropsWithChildren) {
    return <S.FormControl>{children}</S.FormControl>
}