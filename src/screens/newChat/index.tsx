import { Text, StyleSheet, Dimensions, KeyboardAvoidingView, View  } from "react-native";

import Header from "./header";
import Form from "./form";


import { useRoute } from "@react-navigation/native";

import type { RouteProp } from '@react-navigation/native';
type ParamList = {
    Detail: {
        name: string,
    };
  };

export default function NewChat(){
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
   
  
    
    return <>
    <KeyboardAvoidingView style={styles.chat}
        
        behavior="padding"
         >
            <Header />
            <View style={styles.chat} >
             <Form />
        
            </View>
            
         </KeyboardAvoidingView>
        
    </>
};

const styles = StyleSheet.create({
    chat: {
        flex: 1,
     
        
    }
})

