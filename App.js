// NativeBase
import { NativeBaseProvider } from "native-base";

// React navigation
import { NavigationContainer } from '@react-navigation/native';

// Stacks
import AppNavigation from './src/navigation/AppNavigation';

export default function App() {
  return (
    <NavigationContainer>
        <NativeBaseProvider>
          <AppNavigation />
        </NativeBaseProvider>
    </NavigationContainer>
  );
}
