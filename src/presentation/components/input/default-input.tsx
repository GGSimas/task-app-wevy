
import { View } from 'react-native';
import * as Input from './composed';

type DefaultButtonProps = Input.InputProps & {
    isInvalid?: boolean
    error?: string;
};

export function Default({isInvalid = false, error = '', ...rest }: DefaultButtonProps) {
    return (
        <Input.FormControll>
        <Input.Root isInvalid={isInvalid}>
            <Input.Input {...rest}/>
        </Input.Root>
        {isInvalid && <Input.ErrorMessage message={error} />}
        </Input.FormControll>
    )
}