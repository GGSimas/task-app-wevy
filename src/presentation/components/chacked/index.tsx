import { Pressable } from 'react-native';
import * as S from './styles';

type CheckBoxProps = React.ComponentProps<typeof Pressable> & S.CheckBoxStyledProps;

export function CheckBox({checked = false, ...rest}: CheckBoxProps) {
    return (
        <S.CheckBox checked={checked} {...rest}>
            {checked && <S.CheckIcon testID='checked'/>}
        </S.CheckBox>
    )
}