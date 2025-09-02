import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SplashScreen } from './src/Splash';
import { HomeScreen } from './src/screens/Home';
import { ProfileScreen } from './src/screens/Profile';

export type RootParamList = {
  Splash:undefined;
  Home:undefined;
  Profile:{userId : number,name:string};
};

const Stack = createNativeStackNavigator<RootParamList>();

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}} >
        <Stack.Screen name="Splash" component={SplashScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

