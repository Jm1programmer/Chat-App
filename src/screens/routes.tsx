import React from "react";

import { SafeAreaView, useColorScheme } from "react-native";

import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import Home from "./home";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default  function Routes() {
  const scheme = useColorScheme()
  
  
  

return (
  <>

    <NavigationContainer  >
    <Stack.Navigator 
      screenOptions={{
    headerShown: false,
  }}
    
  >
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
        
   
    
 
 

}
