import { LucideIcon } from 'lucide-react-native';
import * as Input from './composed';

type IconInputProps = Input.InputProps & Input.IconWrapperProps & {
    icon: LucideIcon;
    isInvalid: boolean;
    error: string
};
export function Icon({isInvalid = false, error, icon, onPress, ...rest }: IconInputProps) {
    const Icon = icon;
    return (
        <Input.FormControll>
            <Input.Root isInvalid={isInvalid}>
                <Input.Input {...rest}/>
                <Input.IconWrapper onPress={onPress}>
                    <Icon />
                </Input.IconWrapper>
            </Input.Root>
            {isInvalid && <Input.ErrorMessage message={error} />}
        </Input.FormControll>
    )
}