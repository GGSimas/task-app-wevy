import { ActivityIndicator, Pressable } from 'react-native';
import * as S from './styles';

export type RootProps = React.PropsWithChildren & React.ComponentProps<typeof Pressable>;

export function Root({ children, ...rest }: RootProps) {
    return <S.Root {...rest}>{children}</S.Root>
}

export function Ghost({ children, ...rest }: RootProps) {
    return <S.Ghost {...rest}>{children}</S.Ghost>
}
export type TextProps = {
    title: string;
}
export function Text({ title }: TextProps) {
    return <S.Text>{title}</S.Text>
}
export function TextGhost({ title }: TextProps) {
    return <S.TextGhost>{title}</S.TextGhost>
}

export function Spinner() {
    return <S.Spinner testID="spinner" />
}