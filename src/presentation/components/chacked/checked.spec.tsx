import { screen } from '@testing-library/react-native';
import { customRender } from '@/__tests__/providers';
import { CheckBox } from '.';

describe('checked', () => {
    it('should render component without checked', () => {
        customRender(<CheckBox />);
        const checked = screen.queryByTestId('checked');

        expect(checked).toBeNull()
    })

    it('should render component with checked', () => {
        customRender(<CheckBox checked />);
        const checked = screen.getAllByTestId('checked');
        expect(checked).toBeTruthy()
    })
});