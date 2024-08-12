
import { CheckBox } from '@/presentation/components/chacked';
import * as S from './styles';

type ListItemProps = {
    onDoneTask(): void;
    onDeleteTask(): void;
    description: string;
    checked: boolean;
}

export function ListItem({ checked, description, onDoneTask, onDeleteTask}: ListItemProps) {
    return (
        <S.Container>
                <CheckBox checked={checked} onPress={onDoneTask} />
            
            
                <S.Description  numberOfLines={3}>
                    {description}
                </S.Description>
          
                <S.ExcludeButton>
                    <S.ExcludeButtonIcon onPress={onDeleteTask}/>
                </S.ExcludeButton>
        </S.Container>
    )
}