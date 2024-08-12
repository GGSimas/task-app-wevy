import { signInMock } from "@/__tests__/mocks";

import { SignupService } from './signup-service';


const signupService = new SignupService()
describe('signup service', () => {
    it('should be able to make signup in the api', async () => {
        jest.spyOn(signupService, "handleSignup").mockResolvedValue({
            status: 201,
        });

        const response = await signupService.handleSignup({name: 'user test', email: 'usertest@email.com', password: '123456'});
       
        expect(response.status).toEqual(201)
    });

    it('should not be able to make signup passing the same information twice', async () => {
        const errorResponse = { response: { status: 409, data: { message: "E-mail já registrado" } } };
        jest.spyOn(signupService, "handleSignup").mockRejectedValue(errorResponse);

        try {
            await signupService.handleSignup({name: 'user test', email: 'usertest@email.com', password: '123456'});
        } catch (error) {
            expect(error).toEqual(errorResponse)
        }
       
    });
})