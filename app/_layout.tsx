import { Stack } from "expo-router";
import { Image } from "react-native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ListStoreProvider } from "@/src/storage/list-storage";
import { BoardStoreProvider } from "@/src/storage/board-storage";
import { TaskStoreProvider } from "@/src/storage/task-storage";

export default function RootLayout() {
  
  return (
  <GestureHandlerRootView>
    <BoardStoreProvider> 
    <ListStoreProvider>
    <TaskStoreProvider>
    <Stack
      screenOptions={{
        headerShown: true,
        headerTintColor: 'black',
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 20,
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
        title: "",
        headerBackVisible: false,
        headerTitle: () => (
          <Image
            source={require("@/assets/images/toodler_logo.png")}
            style={{width: 184, height: 40}}
          />
        ),
        headerTitleAlign: "center",
        
      }}/>

      <Stack.Screen 
      name="lists"
      options={{
        title: "Lists",
        headerBackTitle: "",
      }}/>

      <Stack.Screen 
      name="tasks"
      options={{
        title: "Tasks",
      }}/>

      <Stack.Screen
      name="create-list"
      options={{ 
        title: "Create List" 
      }}/>

      <Stack.Screen
      name="create-task"
      options={{ 
        title: "Create Task" 
      }}/>

      <Stack.Screen
      name="create-board"
      options={{
        title: "Create Board",
      }}
    />

    </Stack>;
    </TaskStoreProvider>
    </ListStoreProvider>
    </BoardStoreProvider>
  </GestureHandlerRootView>
  );
 
}