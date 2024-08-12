import { customRender } from '@/__tests__/providers';
import { screen } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import { Default } from './default-input';
import theme from '@/presentation/styles/theme';
describe('input', () => {
    it('should render a normal input when not passing isInvalid and error', () => {
        customRender(<Default />);
        const root = screen.getByTestId('root');

        expect(root).toHaveStyle({
            borderColor: theme.colors.purple_dark
        })
    })
    it('should render a invalid input styled when passing isInvalid and error', () => {
        customRender(<Default isInvalid error="Message Error Test" />);
    
        const root = screen.getByTestId('root');
        
        const messageError = screen.queryByText("Message Error Test");

        expect(root).toHaveStyle({
            borderColor: theme.colors.danger
        })
        expect(messageError).toBeTruthy()
    })
})