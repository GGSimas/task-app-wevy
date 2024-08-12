import { createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Signin } from '../screens/signin';
import { Signup } from '../screens/signup';

type PublicRoutesProps = {
    signin: undefined;
    signup: undefined;
    task: undefined;
}


export type PublicRoutesNavigationsProps = NativeStackNavigationProp<PublicRoutesProps>;

const { Navigator, Screen } = createNativeStackNavigator<PublicRoutesProps>();

const publicScreens: Array<{name: keyof PublicRoutesProps, component: React.JSX.Element}> = [
    { name: 'signin', component: Signin },
    { name: 'signup', component: Signup },

]
export function PublicRoutes() {
    return (
        <Navigator screenOptions={{
            headerShown: false
        }}>
            {publicScreens.map(({ name, component: Component}) => (
                <Screen key={name} name={name} component={Component} />
            ))}
        </Navigator>
    )
}