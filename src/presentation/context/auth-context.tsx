import { useContext, createContext, useState } from 'react';
import { save, removeItem, STORAGED_KEYS } from '@/infra/lib/secure-stored';
import { AuthParams } from '@/domain/models/signin';
import { SignUpParams } from '@/domain/models/signup';
import { User } from '@/domain/models/user';
import { useSingIn } from '@/data/hooks/useSignIn';
import { useSingUp } from '@/data/hooks/useSignUp';
import { Alert } from 'react-native';


type AuthContextType = {
    user: User;
    token: string;
    isLoading: boolean;
    handleSignIn(params: AuthParams): void;
    handleSignUp(params: SignUpParams): void;
    handleLogout(): void;
}

export const AuthContext = createContext<AuthContextType>({} as AuthContextType);



export function AuthContextProvider({ children }: React.PropsWithChildren) {
    const [user, setUser] = useState<User>({} as User);
    const [isLoading, setIsLoading] = useState(false);

    const [token, setToken] = useState('');
    const signIn = useSingIn();
    const singUp = useSingUp();

    async function handleSignIn({ email, password }: AuthParams) {
        try {
            setIsLoading(true);
            const response =  await signIn.mutateAsync({email, password});

            setUser(response.data.user);
            setToken(response.data.token);
            await save(STORAGED_KEYS.token, response.data.token);
        } catch (error) {
            Alert.alert((error as Error).message);
        } finally {
            setIsLoading(false)
        }
        
    }

    async function handleSignUp({ name, email, password }: SignUpParams) {
        try {
            setIsLoading(true);
            await singUp.mutateAsync({ name, email, password});
        } catch (error) {
            Alert.alert((error as Error).message);
        } finally {
            setIsLoading(false);
        }
    }

    function handleLogout() {
        setToken('');
        removeItem(STORAGED_KEYS.token);
    }

    return (
        <AuthContext.Provider value={{
            handleSignIn,
            handleSignUp,
            handleLogout,
            user,
            token,
            isLoading
        }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const authContext = useContext(AuthContext);

    return authContext;
}