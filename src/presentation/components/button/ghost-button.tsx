import * as Button from './composed';

type PrimaryButtonProps = Button.RootProps & Button.TextProps & {
}
export function Ghost({ title, ...rest}: PrimaryButtonProps) {
    return (
        <Button.Ghost {...rest}>
            <Button.TextGhost title={title} />
        </Button.Ghost>
    )
}