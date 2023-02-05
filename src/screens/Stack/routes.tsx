import React, {useState, useEffect} from "react";

import { SafeAreaView, useColorScheme } from "react-native";

import {NavigationContainer,} from '@react-navigation/native';

import Home from "../home";
import Chat from "../chats";
import Onbording from "../onboarding";
import NewChat from "../newChat";
import Avatar from "../Avatar";

import auth, {FirebaseAuthTypes, firebase} from '@react-native-firebase/auth'



import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIN from "../sign-in";
import SignUP from "../sign-Out";
import { propsNavigationStack } from "./models";
const {Navigator, Screen}= createNativeStackNavigator<propsNavigationStack>()

export default  function Routes() {
  const [initializing, setInitializing] = useState(true);

 
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  
  useEffect(() => {
    
   const unsubscribe =  auth().onAuthStateChanged((_user) => {
    setUser(_user)
  
    })
    return unsubscribe;
  }, [])
  

return (
  <>

    <NavigationContainer  >
    <Navigator 
      screenOptions={{
    headerShown: false,
  }}
    
  >
        {user == null ? (
          // User isn`t signed in
          <>
          <Screen name="SignIn" component={SignIN}  />
        <Screen name="SignUp" component={SignUP}  />  
        <Screen name="Avatar" component={Avatar} />
         <Screen name="Onboarding" component={Onbording}  />
          </>
          
         
        ) : (
          <>
            <Screen name="Home" component={Home}  />
          <Screen name="Chat" component={Chat}  />
          <Screen name="NewChat" component={NewChat}  />
        
          
      
   
          </>
          // User is signed in
  
        )}
       
        
      </Navigator>
    </NavigationContainer>
    </>
  );
        
   
    
 
 

}
