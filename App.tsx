import React from "react";

import { SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/screens/routes";
import Home from "./src/screens/home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
export default  function App() {
  
  

  

return (
  <>
  <SafeAreaView></SafeAreaView>
   <Routes />
    </>
  );
        
   
    
 
 

}
