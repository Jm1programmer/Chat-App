import { Text, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { COLORS } from "../../colors";
import Form from "./form";


export default function SignIN() {
    return <>
        <KeyboardAvoidingView 
         style={styles.SignIn}
         behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
         >
            <View style={styles.SignInBox}>
            <View style={styles.info}>
            <Text style={styles.Title}>Hey there!</Text>
             <Text style={styles.subTitle}>Enter your email and password to login below</Text>
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

    SignInBox: {
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
})