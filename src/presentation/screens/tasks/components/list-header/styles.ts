import styled, { css } from "styled-components/native";



export const Wrapper = styled.View`
    flex-direction: row;
    gap: 4px
`;

export const TaskListHeader = styled.View`
    padding: ${({theme}) => theme.paddind.lg}px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CreateTaskLabel = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.heding};
        font-size: ${theme.font_size.md}px;
        color: ${theme.colors.blue};
    `}
`;

export const DoneTaskLabel = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.font_family.heding};
        font-size: ${theme.font_size.md}px;
        color: ${theme.colors.purple};
    `}
`;

export const TaskBadge = styled.View`
    width: 25px;
    height: 19px;
    border-radius: 20px;
    background-color: ${({ theme }) => theme.colors.gray_400};
    justify-content: center;
    align-items: center;
`;

export const TaskBadgeLabel = styled.Text`
     ${({ theme }) => css`
        font-family: ${theme.font_family.heding};
        font-size: ${theme.font_size.sm}px;
        color: ${theme.colors.gray_100};
    `}
`;
