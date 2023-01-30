import { Text, View, StyleSheet, KeyboardAvoidingView, Platform, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import Form from "./form";
import Icon from 'react-native-vector-icons/AntDesign'

import { useNavigation, } from "@react-navigation/native";
import { propsStack } from "../Stack/models";

export default function SignUp() {
    const navigation = useNavigation<propsStack>()
    return <>
        <KeyboardAvoidingView 
         style={styles.SignIn}
        behavior="padding"
         >
           
            
            <View style={styles.SignUpBox}>
            <TouchableOpacity style={styles.goback} onPress={() => {
                navigation.goBack()
            }}>
                    <Icon name={'left'} size={30} color={COLORS.background.white} />
                </TouchableOpacity>
            
            <View style={styles.info}>
            <Text style={styles.Title}>SignOut</Text>
             <Text style={styles.subTitle}>Enter your username, email and password to register below</Text>
             </View>
             <Form />
             </View>
        </KeyboardAvoidingView>
    </>
}

const styles = StyleSheet.create({
    SignIn: {
      
        paddingHorizontal: 10,
        flex: 1,
        backgroundColor: COLORS.blue,
        
       
    },

    SignUpBox: {
      flex: 1,
        justifyContent: 'flex-end',
        marginBottom: '32%',
    },
    info: {
       
        paddingVertical: 20,
    },
    Title: {
        fontSize: 30,
        color: COLORS.background.white,
        fontFamily: 'Montserrat-SemiBold',
       
        
    },
    subTitle: {
        fontSize: 12,
        color: COLORS.background.white,
        fontFamily: 'Montserrat-Regular', 
        paddingVertical: 10,
       
    },
    goback: {
     
        
        marginBottom: '32%',
       
    }
})