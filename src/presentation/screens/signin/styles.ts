import styled, { css } from "styled-components/native";
import { Eye, EyeOff, ListTodo } from 'lucide-react-native'

export const Container = styled.ScrollView.attrs({
    contentContainerStyle: { flexGrow: 1},
    showsVerticalScrollIndicator: false,
})`
    background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const Header = styled.View`
    width: 100%;
    min-height: 173px;
    gap: 8px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.gray_700};
    padding-top: ${({ theme }) => theme.paddind.lg}px;
`;


export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.heding};
        font-size: ${theme.font_size.xlg}px;
        color: ${theme.colors.blue_dark};
    `}
`;

export const Label = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.body};
        font-size: ${theme.font_size.lg}px;
        color: ${theme.colors.gray_200};
    `}
`;

export const TodoIcon = styled(ListTodo).attrs(({ theme }) => ({
    size: 48,
    color: theme.colors.blue_dark,
}))``

export const Content = styled.View`
    flex: 1;
    padding: ${({ theme }) => theme.paddind.lg}px;
    justify-content: center;
    align-items: center;
    gap: 12px;
`; 
export const Footer = styled.View`
    padding: ${({ theme }) => theme.paddind.lg}px;
    margin-bottom: 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
`; 

export const EyeIcon = styled(Eye).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.gray_100,
}))``;

export const EyeOffIcon = styled(EyeOff).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.gray_100,
}))``;