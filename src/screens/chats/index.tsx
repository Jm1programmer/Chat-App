import { Text, StyleSheet, Dimensions, KeyboardAvoidingView, View  } from "react-native";
import { COLORS } from "../../colors";
import Header from "./header";
import MessagesFlatList from "./chatFlatlist";


export default function Chat(){
    return <>
    <KeyboardAvoidingView style={styles.chat}
        
        behavior="padding"
         >
            <Header />
            <View style={styles.chat} >
                <MessagesFlatList />
            </View>
            
         </KeyboardAvoidingView>
        
    </>
};

const styles = StyleSheet.create({
    chat: {
        flex: 1,
     
        
    }
})

