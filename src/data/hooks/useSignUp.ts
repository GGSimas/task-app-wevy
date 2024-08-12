import { useMutation } from '@tanstack/react-query';
import { SignupService } from '../services/signup-service';
import { SignUpParams } from '@/domain/models/signup';

const signUpService = new SignupService();

export function useSingUp() {
    return useMutation({
        mutationFn: (params: SignUpParams) => signUpService.handleSignup(params)
    })
}