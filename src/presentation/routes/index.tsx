import { NavigationContainer } from '@react-navigation/native';
import { PublicRoutes } from './public.routes';
import { PrivateRoutes } from './private.routes';
import { useAuthContext } from '../context/auth-context';


export function Router() {
    const { token } = useAuthContext();
    return (
        <NavigationContainer>
            {token !== '' ? <PrivateRoutes /> : <PublicRoutes />}
        </NavigationContainer>
    )
}