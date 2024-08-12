import { Trash2 } from 'lucide-react-native';
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.gray_400};
    height: 64px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 8px;
    border-radius: 8px;
    padding: ${({ theme }) => theme.paddind.md}px;
    gap: 8px;
`;

export const Description = styled.Text`
    ${({ theme }) => css`
        font-size: ${theme.font_size.md}px;
        font-family: ${theme.font_family.body};
        color: ${theme.colors.gray_100}
    `}
    
`;

export const ExcludeButton = styled.Pressable``;

export const ExcludeButtonIcon = styled(Trash2).attrs(({ theme }) => ({
    color: theme.colors.gray_200,
    size: 20,
}))``;