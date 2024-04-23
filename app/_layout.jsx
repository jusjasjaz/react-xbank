import { View, Text } from 'react-native'
import { Slot, Stack } from 'expo-router';
import { useEffect } from "react";
import { useFonts } from 'expo-font';
const RootLayout = () => {

  const [ fontsLoaded, error ] = useFonts({
    "Comfortaa-Regular": require('../assets/fonts/Comfortaa-Regular.ttf'),
    "Comfortaa-Bold": require('../assets/fonts/Comfortaa-Bold.ttf'),
    "Inter-Regular": require('../assets/fonts/Inter-Regular.ttf'),
    "Inter-Medium": require('../assets/fonts/Inter-Medium.ttf'),
    "Inter-SemiBold": require('../assets/fonts/Inter-SemiBold.ttf'),
    "Inter-Bold": require('../assets/fonts/Inter-Bold.ttf'),
    "Inter-ExtraBold": require('../assets/fonts/Inter-ExtraBold.ttf'),
  })
  useEffect(() => {
    if (error) throw error;

  }, [fontsLoaded, error]);

  if (!fontsLoaded) {
    return null;
  }

  if (!fontsLoaded && !error) {
    return null;
  }

  
  return (
   <Stack>
    <Stack.Screen name="index" options={{
      headerShown: false
    }}/>
    <Stack.Screen name="auth" options={{
      headerShown: false
    }}/>
    <Stack.Screen name="dashboard" options={{
      headerShown: false
    }}/>
   </Stack>
  )
}

export default RootLayout