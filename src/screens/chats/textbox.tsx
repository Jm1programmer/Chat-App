import { useState, useEffect, JSXElementConstructor } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image} from "react-native";
import { COLORS } from "../../colors";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Foundation'
import { Colors } from "react-native/Libraries/NewAppScreen";
import moment from 'moment'


type MessagesProps = {
    user_id: string;
    userName: string;
    text: string;
    date: string;
    id: string;
    nameUrl: string;
    idUrl: string;
    createdAt: any;
    avatar: string;
  };

export default function TextBox({userName, user_id, text, date, id, nameUrl, avatar}: MessagesProps) {
    const docUrl = `chats/${nameUrl}/chat`
    const [user_uid, setUser_uid] = useState<String>()
    const [deleteIcon, setdeleteIcon] = useState<boolean>(true)
    const [MessageDate, setMessageDate] = useState<Date>(new Date(date))
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);

   
  
  
  
    useEffect(() => {
        const userUID = auth().currentUser?.uid;
        setUser_uid(userUID)
        setImageUrl(avatar)
        
    }, [])
 
    
   
 

    return <>
    <View style={[styles.TextBox, { justifyContent:  user_id === user_uid ? 'flex-end' : 'flex-start'}]} >
   
        <TouchableOpacity style={styles.avatar}>
        { imageUrl !== '' ?  <Image style={styles.avatarImg} source={{uri: imageUrl}} resizeMode="cover"  /> : null}
        </TouchableOpacity>
     
        <TouchableOpacity onLongPress={() => {
           deleteMessage()
            function deleteMessage() {
                if (user_id === user_uid) {
                    Alert.alert(
                        'Do you want to delete the message?',
                        '',
                        [
                          {
                            text: 'No',
                           
                           
                          },
    
                          {
                            text: 'Yes',
                            onPress: () => {
                                firestore()
                                .collection(docUrl)
                                .doc(`${id}`)
                                .delete()
                                .then(() => {
                                    Alert.alert('Message deleted')
                                });
    
    
                            },
                          
                          },
                        ],
                        {
                          cancelable: true,
                          onDismiss: () =>
                            Alert.alert(
                              'This alert was dismissed by tapping outside of the alert dialog.',
                            ),
                        },
                      );
                }
            }

               
               
                

           
        }} style={user_id === user_uid ? styles.SendTextBox : styles.ReceivedTextBox}>
            <Text style={[styles.userName, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{userName}</Text>
            <Text style={[styles.Text, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{text}</Text>
            <Text style={[styles.date, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{`${moment(MessageDate).fromNow()}`}</Text>
            
                    
                
        </TouchableOpacity>


       
        

        </View>

        
        
    </>
}




const styles = StyleSheet.create({
    TextBox: {
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'flex-start'
    },
    ReceivedTextBox: {
        marginHorizontal: 10,
        marginVertical: 5,
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
        marginVertical: 5,
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
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 100,
      
        marginTop: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },

    avatarImg: {
        width: 30,
        height: 30,
    }
})