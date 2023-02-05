import { Text, StyleSheet, Dimensions, KeyboardAvoidingView, View, Platform  } from "react-native";

import Header from "./header";
import MessagesFlatList from "./chatFlatlist";
import { useRoute } from "@react-navigation/native";

import type { RouteProp } from '@react-navigation/native';
type ParamList = {
    Detail: {
        name: string,
        idUrl: string,
    };
  };

export default function Chat(){
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
   
  
    
    return <>
    <KeyboardAvoidingView style={styles.chat}
        
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         >
            <Header nameUrl={ route.params.name} />
            <View style={styles.chat} >
                <MessagesFlatList nameUrl={ route.params.name}  />
            </View>
            
         </KeyboardAvoidingView>
        
    </>
};

const styles = StyleSheet.create({
    chat: {
        flex: 1,
     
        
    }
})

