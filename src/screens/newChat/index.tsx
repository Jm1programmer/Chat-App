import { Text, StyleSheet, Dimensions, KeyboardAvoidingView, View, Platform  } from "react-native";

import Header from "./header";
import Form from "./form";


import { useRoute } from "@react-navigation/native";

import type { RouteProp } from '@react-navigation/native';
type ParamList = {
    Detail: {
        urls: string,
    };
  };


export default function NewChat(){
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
   
    

    
    return <>
    <KeyboardAvoidingView style={styles.chat}
        
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         >
            <Header />
            <View style={styles.chat} >
             <Form urls={route.params.urls}  />  
        
            </View>
            
         </KeyboardAvoidingView>
        
    </>
};

const styles = StyleSheet.create({
    chat: {
        flex: 1,
     
        
    }
})

