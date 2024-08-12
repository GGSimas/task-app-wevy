import { useMutation } from '@tanstack/react-query';
import { SigninService } from '../services/signin-service';
import { AuthParams } from '@/domain/models/signin';

const signInService = new SigninService();

export function useSingIn() {
    return useMutation({
        mutationFn: (params: AuthParams) => signInService.handleSignin(params),
        
    })
}