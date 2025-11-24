import { Stack } from "expo-router";
<<<<<<< HEAD

export default function RootLayout() {
  return <Stack />;
=======
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

    </Stack>;

  </GestureHandlerRootView>
  );
 
>>>>>>> origin/Dev
}
