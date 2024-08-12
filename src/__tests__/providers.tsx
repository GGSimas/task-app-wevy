import theme from "@/presentation/styles/theme";
import { render, RenderOptions } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

export function WrapperTest({ children }: React.PropsWithChildren) {
    return (
        <ThemeProvider theme={theme}>
            {children}
        </ThemeProvider>
    );
}

export const customRender = (ui: React.ReactElement<unknown, string | React.JSXElementConstructor<any>>, options?: RenderOptions) => render(ui, { wrapper: WrapperTest, ...options } )