import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  
  return (
  <GestureHandlerRootView>
    
    <Stack
      screenOptions={{
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: "bold"
        }
      }}>
      <Stack.Screen 
      name="index"
      options={{
        title: "Toodler",
      }}/>
    </Stack>;

  </GestureHandlerRootView>
  );
 
}
