import * as S from './styles';

export function EmptyList() {
    return (
        <S.Container>
            <S.EmptyList />
            <S.Title>Você ainda não tem tarefas cadastradas</S.Title>
            <S.Description>Crie tarefas e organize seus items a fazer</S.Description>
        </S.Container>
    )
}