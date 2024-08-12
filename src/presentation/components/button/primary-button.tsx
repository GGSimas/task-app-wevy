import * as Button from './composed';

type PrimaryButtonProps = Button.RootProps & Button.TextProps & {
    isLoading?: boolean;
}
export function Primary({isLoading = false, title, ...rest}: PrimaryButtonProps) {
    return (
        <Button.Root disabled={isLoading} {...rest}>
            {isLoading ? <Button.Spinner /> : <Button.Text title={title} />}
        </Button.Root>
    )
}