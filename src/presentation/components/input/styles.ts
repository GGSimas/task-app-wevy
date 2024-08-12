import styled from "styled-components/native";

export type RootStyledProps = {
    isInvalid: boolean;
}
export const Root = styled.View<RootStyledProps>`
    flex-direction: row;
    border-width: ${({ theme }) => theme.borderWidths[2]}px;
    border-color: ${({ theme, isInvalid }) => isInvalid ? theme.colors.danger : theme.colors.purple_dark};
    background-color: ${({ theme }) => theme.colors.gray_400};
    border-radius: 8px;
    min-height: 50px;
`;

export const Input = styled.TextInput.attrs(({ theme }) => ({
    placeholderTextColor: theme.colors.gray_300,
}))`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.transparent};
    font-size: ${({ theme }) => theme.font_size.md}px;
    color: ${({ theme }) => theme.colors.gray_200};
    padding: ${({ theme }) => theme.paddind.xs}px;
`

export const IconWrapper = styled.Pressable`
    width: 48px;
    height: 48px;
    padding: ${({ theme }) => theme.paddind.xs}px;
    background-color: ${({ theme }) => theme.colors.transparent};
    justify-content: center;
    align-items: center;
`;

export const ErrorMessage = styled.Text`
    font-size: ${({ theme }) => theme.font_size.sm}px;
    color: ${({ theme }) => theme.colors.danger};
    font-family: ${({ theme }) => theme.font_family.body};
`;

export const FormControl = styled.View`
    justify-content: flex-start;
    width: 100%;
    gap: 1px;
`;