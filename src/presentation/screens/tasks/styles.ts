import { ListTodo, LogOut } from "lucide-react-native";
import { RefreshControl } from 'react-native'
import styled, { css } from "styled-components/native";


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.gray_500};
`;

export const Row = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 40px;
`;
export const Header = styled.View`
    width: 100%;
    min-height: 173px;
    background-color: ${({ theme }) => theme.colors.gray_700};
    padding: ${({ theme }) => theme.paddind.lg}px;
    align-items: center;
    justify-content: space-between;
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.heding};
        font-size: ${theme.font_size.lg}px;
        color: ${theme.colors.blue_dark};
    `}
`;

export const TodoIcon = styled(ListTodo).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.blue_dark,
}))``;

export const BrandWrapper = styled.View`
    flex-direction: row;
    gap: 4px;
`;

export const LogoutButton = styled.Pressable``;

export const LogoutIcon = styled(LogOut).attrs(({ theme }) => ({
    size: 24,
    color: theme.colors.blue_dark,
}))``;

export const InputWrapper = styled.View`
    padding: 0 16px;
    flex-direction: row;
    gap: 4px;
`;

export const AddButtonWrapper = styled.View`
    width: 50px;
    height: 50px;
`;

export const Content = styled.View`
    flex: 1;
    margin-top: 32px;
    width: 100%;
`;

export const Spinner = styled.ActivityIndicator.attrs(({ theme }) => ({
    size: "small",
    color: theme.colors.blue,
}))``

export const RefreseControl = styled(RefreshControl).attrs(({ theme }) => ({
    tintColor: theme.colors.blue
}))``