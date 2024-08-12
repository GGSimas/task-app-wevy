import styled, { css } from "styled-components/native";

export const Root = styled.Pressable`
    width: 100%;
    height: 48px;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.blue_dark};
    border-radius: 8px;
`;

export const Ghost = styled.Pressable`
    background-color: ${({ theme }) => theme.colors.transparent};
    width: 100%;
    height: 48px;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.gray_100};
        font-size: ${theme.font_size.md}px;
        font-family: ${theme.font_family.heding};
    `}
`;

export const TextGhost = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.purple};
        font-size: ${theme.font_size.md}px;
        font-family: ${theme.font_family.heding};
    `}
`;

export const Spinner = styled.ActivityIndicator.attrs(({ theme }) => ({
    color: theme.colors.gray_100,
    size: "small",
}))``;