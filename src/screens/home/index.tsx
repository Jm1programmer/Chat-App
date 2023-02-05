import { Text, StyleSheet, View, TouchableOpacity, Image  } from "react-native";
import { COLORS } from "../../colors";
import ChatsList from "./chatsFlatlist";
import Add from "./Add";
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { useState, useEffect } from "react";

export default function Home(){
   

    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
  
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
                auth()
                .signOut()
            }} style={styles.profilePicture}>
                <Image style={styles.AvatarImg} source={{uri: imageUrl}} resizeMode="cover"  />
            </TouchableOpacity>
         
        </View>
      
       <ChatsList />
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
        backgroundColor: COLORS.blue
    },

    AvatarImg: {
        width: 50,
        height: 50,
        borderRadius: 60,
      
    }
})