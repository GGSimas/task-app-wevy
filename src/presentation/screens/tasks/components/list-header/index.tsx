import * as S from './styles';

type ListHeaderProps = {
    done?: number;
    open?: number;
}
export function ListHeader({open = 0, done = 0}: ListHeaderProps) {
    return (
        <S.TaskListHeader>
            <S.Wrapper>
                <S.CreateTaskLabel>Criadas</S.CreateTaskLabel>
                <S.TaskBadge>
                    <S.TaskBadgeLabel>{open}</S.TaskBadgeLabel>
                </S.TaskBadge>
            </S.Wrapper>
            <S.Wrapper>
                <S.DoneTaskLabel>Concluídas</S.DoneTaskLabel>
                <S.TaskBadge>
                    <S.TaskBadgeLabel>{done}</S.TaskBadgeLabel>
                </S.TaskBadge>
            </S.Wrapper>
        </S.TaskListHeader>
    )
}