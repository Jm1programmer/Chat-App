import { useState, useEffect } from "react";
import { Text, View, StyleSheet} from "react-native";
import { COLORS } from "../../colors";
import auth from '@react-native-firebase/auth'
import { Colors } from "react-native/Libraries/NewAppScreen";

type MessagesProps = {
    user_id: string;
    userName: string;
    text: string;
    date: string;
  };

export default function TextBox({userName, user_id, text, date}: MessagesProps) {
    
    const [user_uid, setUser_uid] = useState<String>()
    console.log(user_uid)
    useEffect(() => {
        const userUID = auth().currentUser?.uid;
        setUser_uid(userUID)
        
    }, [])

    return <>
        <View style={user_id === user_uid ? styles.SendTextBox : styles.ReceivedTextBox}>
            <Text style={[styles.userName, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{userName}</Text>
            <Text style={[styles.Text, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{text}</Text>
            <Text style={[styles.date, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{`${date}`}</Text>
        </View>
    </>
}




const styles = StyleSheet.create({
    ReceivedTextBox: {
        marginHorizontal: 10,
        marginVertical: 10,
        minWidth: 110 ,
        maxWidth: 330,
     
        minHeight: 50,
       backgroundColor: COLORS.TextBoxGray,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-start',
        
    },

    SendTextBox: {
        marginHorizontal: 10,
        marginVertical: 10,
        minWidth: 110 ,
        maxWidth: 330,
     
        minHeight: 50,
       backgroundColor: COLORS.blue,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        alignSelf: 'flex-end',
        color: COLORS.background.white
    },
    Text: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 15,
        color: COLORS.background.black,
       
        
    },
    userName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: COLORS.background.black,
    },
    date: {
        alignSelf: 'flex-end',
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: COLORS.background.black,
    }
})