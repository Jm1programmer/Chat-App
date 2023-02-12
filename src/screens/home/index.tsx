import { Text, StyleSheet, View, TouchableOpacity, Image  } from "react-native";
import { COLORS } from "../../colors";
import ChatsList from "./chatsFlatlist";
import Add from "./Add";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useState, useEffect } from "react";
import Icon from 'react-native-vector-icons/AntDesign'

export default function Home(){
   

    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [perfilOptions, setPerfilOptions] = useState<boolean>(false)
    useEffect( () => {
        getUserData()
    
       
      }, [imageUrl]);
    function getUserData() {

        const userUID = auth().currentUser?.uid;
        firestore()
  .collection('users')
  .doc(userUID)
  .get()
  .then(documentSnapshot => {
   

    if (documentSnapshot.exists) {
     const userData  = documentSnapshot.data();
     if (userData != undefined) {
    
        setImageUrl(userData.avatar)
     }
     
    }
  });
    
    }

    return <>
    <View style={styles.screen}>
        <View style={styles.title}>
            <Text style={[styles.text, {fontSize: 20, fontFamily: 'Montserrat-Regular' }]}>Messages</Text>
            <TouchableOpacity onPress={() => {
                setPerfilOptions(!perfilOptions)
            }} style={styles.profilePicture}>
                 { imageUrl !== '' ?  <Image style={styles.AvatarImg} source={{uri: imageUrl}} resizeMode="cover"  /> : null}
               
            </TouchableOpacity>
            
        </View>
        
      <View style={styles.Chats}>
     { perfilOptions?  <View style={styles.PerfilOptionsTab}>
        <TouchableOpacity style={styles.PerfilOptionTabButton} onPress={() => {
            auth()
            .signOut()
        }}>
        <Icon  name={'logout'} size={20} color={COLORS.background.black} />
        <Text style={styles.PerfilOptionTabText}>Log Out</Text>
        </TouchableOpacity>
     </View> : <View /> }
      <ChatsList  />
      </View>
     
       <Add />
    </View>
  
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.background.white,
        padding: 10,
    },
    title: {
        
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
     
    },
    text: {
        color: COLORS.background.black
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
      
    },

    AvatarImg: {
        width: 50,
        height: 50,
        borderRadius: 60,
      
    },

    Chats: {
        zIndex: 3, // works on ios
        elevation: 3, // works on android
    },
    PerfilOptionsTab: {
        width: 120,
        minheight: 1,
        backgroundColor: COLORS.background.white,
        position: 'absolute',
        padding: 10,
        top: -10,
        borderRadius: 5,
        alignSelf: 'flex-end',
        borderColor: COLORS.TextBoxGray,
        borderWidth: 1,
        zIndex: 2, // works on ios
      
    },

    PerfilOptionTabButton: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    PerfilOptionTabText: {
        fontSize: 15,
         fontFamily: 'Montserrat-Regular',
         marginHorizontal: 10,
    }
})