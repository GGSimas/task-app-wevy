import { axiosClient } from '@/infra/lib/axios-client';
import { SignUpParams } from '@/domain/models/signup';

export class SignupService {
    async handleSignup({ name, email, password }: SignUpParams) {
         await axiosClient.post('user', {
            name,
            email,
            password,
        });
        
    }
}