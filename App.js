import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import TextScreen from './src/screens/TextScreen';
import FlatScreen from './src/screens/FlatScreen';
import LabTask1Screen from './src/screens/LabTask1Screen';
import ColorScreen from './src/screens/ColorScreen';
import Assignment1Screen from './src/screens/Assignment1Screen';
import ColorChanger from './src/screens/ColorChanger';
import SquareColor from './src/screens/SquareColor';
import SearchScreen from './src/screens/SearchScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Image" component={ImageScreen} />
                <Stack.Screen name="Counter" component={CounterScreen} />
                <Stack.Screen name="Text" component={TextScreen} />
                <Stack.Screen name="Flat" component={FlatScreen} />
                <Stack.Screen name="LabTask1" component={LabTask1Screen} />
                <Stack.Screen name="Color" component={ColorScreen} />
                <Stack.Screen name="Assignment1" component={Assignment1Screen} />
                <Stack.Screen name="ColorChanger" component={ColorChanger} />
                <Stack.Screen name="SquareColor" component={SquareColor} />
                <Stack.Screen name="SearchScreen" component={SearchScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
