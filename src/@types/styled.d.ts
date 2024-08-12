import "styled-components";
import theme from '@/presentation/styles/theme';

declare module "styled-components/native" {
    type ThemeType = typeof theme;
    export interface DefaultTheme extends ThemeType {}
}