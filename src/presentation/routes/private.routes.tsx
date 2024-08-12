import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Task } from '../screens/tasks';

type PrivateRouteProps = {
    task: undefined;
}

const { Navigator, Screen } = createNativeStackNavigator<PrivateRouteProps>();

export function PrivateRoutes() {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="task" component={Task} />
        </Navigator>
    )
}