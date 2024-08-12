import { CirclePlus } from 'lucide-react-native';
import * as Button from '@/presentation/components/button/composed';
import { useTheme } from 'styled-components/native';

export function AddButton({ ...rest }: Button.RootProps) {
    const theme = useTheme();
    return (
        <Button.Root {...rest}>
            <CirclePlus color={theme.colors.gray_100} />
        </Button.Root>
    )
}