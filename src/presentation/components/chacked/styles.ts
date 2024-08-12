import styled from 'styled-components/native';
import { Check } from 'lucide-react-native';

export type CheckBoxStyledProps = {
    checked?: boolean;
}

export const CheckBox = styled.Pressable<CheckBoxStyledProps>`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    border-width: ${({ theme }) => theme.borderWidths[1]}px;
    border-color: ${({ theme, checked }) => checked ? theme.colors.blue_dark : theme.colors.blue };
    background-color: ${({ theme, checked }) => checked ? theme.colors.blue_dark : theme.colors.transparent };
    justify-content: center;
    align-items: center;
`;

export const CheckIcon = styled(Check).attrs(({ theme }) => ({
    color: theme.colors.gray_100,
    size: 12,
}))``;

