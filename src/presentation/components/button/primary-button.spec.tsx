import { customRender } from '@/__tests__/providers';
import { screen } from '@testing-library/react-native';

import { Primary } from './primary-button';

describe("primary button", () => {
    it('should not render spinner when isLoading is undefined', () => {
        customRender(<Primary  title="Test button" />)

        const spinner = screen.queryByTestId('spinner');

        expect(spinner).toBeNull()
    })

    it('should render spinner when isLoading is true', () => {
        customRender(<Primary  title="Test button" isLoading/>)
        const spinner = screen.getByTestId('spinner');

        expect(spinner).toBeTruthy()
    })
});