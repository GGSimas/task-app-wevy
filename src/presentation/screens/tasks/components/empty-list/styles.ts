import { ClipboardList } from "lucide-react-native";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const EmptyList = styled(ClipboardList).attrs(({ theme }) => ({
    size: 60,
    color: theme.colors.gray_100,
}))``;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.font_size.lg}px;
    color: ${({ theme }) => theme.colors.gray_200};
    font-family: ${({ theme }) => theme.font_family.heding};
`;
export const Description = styled.Text`
    font-size: ${({ theme }) => theme.font_size.md}px;
    color: ${({ theme }) => theme.colors.gray_200};
    font-family: ${({ theme }) => theme.font_family.body};
`;