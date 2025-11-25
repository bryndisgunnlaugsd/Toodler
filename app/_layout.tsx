import { Stack } from "expo-router";
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function RootLayout() {
  
  return (
  <GestureHandlerRootView>
    
    <Stack
      screenOptions={{
        headerShown: true,
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: "bold"
        }
        
      }}>
      <Stack.Screen 
      name="index"
      options={{
        headerShown: false,
        title: "Toodler",
      }}/>

      <Stack.Screen 
      name="boards"
      options={{
        title: "My Boards",
      }}/>

      <Stack.Screen 
      name="lists"
      options={{
        title: "My Lists",
      }}/>

      <Stack.Screen 
      name="tasks"
      options={{
        title: "My Tasks",
      }}/>

      <Stack.Screen
      name="create-list"
      options={{ 
        title: "Create List" 
      }}/>

    </Stack>;

  </GestureHandlerRootView>
  );
 
}
