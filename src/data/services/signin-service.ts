import { axiosClient } from '@/infra/lib/axios-client';
import { AuthParams, AuthReturn } from '@/domain/models/signin';

export class SigninService {
    async handleSignin({ email, password }: AuthParams) {
        const result = await axiosClient.post<AuthReturn>('user/session', {
            email,
            password,
        });
        
        return result;
        
    }
}