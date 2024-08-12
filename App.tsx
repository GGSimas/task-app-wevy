import { ActivityIndicator, StatusBar } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts } from 'expo-font';
import { Inter_400Regular, Inter_700Bold} from '@expo-google-fonts/inter';
import theme from '@/presentation/styles/theme';
import { Router } from '@/presentation/routes';
import { AuthContextProvider } from '@/presentation/context/auth-context';
import { RQClientProvider } from '@/infra/lib/react-query';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />
      <RQClientProvider>
        <AuthContextProvider>
          {fontsLoaded 
            ? <Router />
            : <ActivityIndicator />
          }
        </AuthContextProvider>
      </RQClientProvider>
    </ThemeProvider>
  );
}


