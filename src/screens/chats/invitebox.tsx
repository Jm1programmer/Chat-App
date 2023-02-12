


import { useState, useEffect, JSXElementConstructor } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Alert, Image} from "react-native";
import { COLORS } from "../../colors";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore';
import Icon from 'react-native-vector-icons/Foundation'
import { Colors } from "react-native/Libraries/NewAppScreen";
import moment from 'moment'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";

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
    type: string,

    GroupName: string,
    GroupImage: string,
  };

export default function InviteBox({userName, user_id, text, date, id, nameUrl, avatar, type, GroupImage, GroupName}: MessagesProps) {
    const docUrl = `chats/${nameUrl }/chat`
    const [user_uid, setUser_uid] = useState<String>()
    const [deleteIcon, setdeleteIcon] = useState<boolean>(true)
    const [MessageDate, setMessageDate] = useState<Date>(new Date(date))
    const [AvatarimageUrl, setAvatarImageUrl] = useState<string | undefined>(undefined);
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined)
    const navigation = useNavigation<propsStack>()
   

  
  
    useEffect(() => {
        const userUID = auth().currentUser?.uid;
        setUser_uid(userUID)
        setAvatarImageUrl(avatar)
        setImageUrl(GroupImage)
    }, [])
 
    
   
 

    return <>
    <View style={[styles.TextBox, { justifyContent:  user_id === user_uid ? 'flex-end' : 'flex-start'}]} >
   
        <TouchableOpacity style={styles.avatar}>
        { AvatarimageUrl !== '' ?  <Image style={styles.avatarImg} source={{uri: AvatarimageUrl}} resizeMode="cover"  /> : null}
        </TouchableOpacity>
     
        <TouchableOpacity onPress={() => {
             navigation.navigate('JoinGroup' as never, {name: GroupName, Image: GroupImage, InvitedByUserName: userName} as never, )
        }} onLongPress={() => {
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
                                .doc(id)
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

               
               
                

           
        }}   style={user_id === user_uid ? styles.SendTextBox : styles.ReceivedTextBox} >
            <Text style={[styles.userName, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{userName}</Text>
            <Image style={styles.GroupImage} source={{uri: imageUrl}} />
            <View style={styles.groupInfoView}>
            <Text style={[styles.GroupName, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{GroupName}</Text>
            <Text style={[styles.GroupInfo, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{'group chat invite'}</Text>
            </View>
          
            <View style={{   borderColor: COLORS.background.black,
          borderWidth: 1,
       borderRadius: 5,}}/>
            <View style={styles.seeChat}>
            

<Text style={[styles.button, {color: user_id === user_uid ? COLORS.background.white : COLORS.background.black}]}>{'See Chat'}</Text>
            </View>
            
                    
                
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
        maxWidth: 300,
     
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
        paddingHorizontal: 5,
        paddingVertical: 5,
        alignSelf: 'flex-end',
        color: COLORS.background.white
    },
    GroupName: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
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
    },
    GroupImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginTop: 10,
    },

    groupInfoView: {
    
      padding: 5,
     borderRadius: 5,
     marginTop: 5,  
     width: '100%',
     height: 50,
     justifyContent: 'center'
    },

    GroupInfo: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 13,
        color: COLORS.background.black,
       
    },
    seeChat: {
        
        height: 40,
        justifyContent: 'center'
    },
    button: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 19,
        color: COLORS.background.white,
        alignSelf: 'center'
    }
})