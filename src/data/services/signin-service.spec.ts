import { signInMock } from "@/__tests__/mocks";

import { SigninService } from './signin-service';


const signinService = new SigninService()
describe('signin service', () => {
        it('should be able to make signin in the api', async () => {
            jest.spyOn(signinService, "handleSignin").mockResolvedValue({
                status: 200,
                data: signInMock,
            });

            const response = await signinService.handleSignin({email: 'usertest@email.com', password: '123456'});
            
            expect(response.data).toEqual(signInMock)
        });
        it('should not be able to make signin with invalid credentials', async () => {
            const errorResponse = { response: { status: 401, data: { message: 'Credenciais invalidas' } } };
            jest.spyOn(signinService, "handleSignin").mockRejectedValue(errorResponse);

            try {
                await signinService.handleSignin({email: 'invaliduser@email.com', password: '123456'});
            } catch(error) {
                expect(error).toEqual(errorResponse)
            }
        });
})