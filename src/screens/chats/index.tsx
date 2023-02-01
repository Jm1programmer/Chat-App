import { Text, StyleSheet, Dimensions, KeyboardAvoidingView, View  } from "react-native";
import { COLORS } from "../../colors";
import Form from "./form";
import MessagesFlatList from "./chatFlatlist";


export default function Chat(){
    return <>
    <KeyboardAvoidingView style={styles.chat}
        
        behavior="padding"
         >
            
            <View style={styles.chat} >
                <MessagesFlatList />
            </View>
            <Form />
         </KeyboardAvoidingView>
        
    </>
};

const styles = StyleSheet.create({
    chat: {
        flex: 1,
     
        
    }
})

