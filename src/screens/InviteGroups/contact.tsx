import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import AIcon from 'react-native-vector-icons/AntDesign'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

type MessagesProps = {
    name: string;
    desc: string;
    id: string;
    image: string,
    nameUrl: string,
    ImageUrl: string,
  };

  

  
export default function Contact({name, desc, id, image, nameUrl, ImageUrl}: MessagesProps) {
    
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [select, setSelect] = useState<boolean>(false)

    const [user_name, setUser_name] = useState<string>()
const [user_avatar, setUser_avatar] = useState<string>()
    const docUrl = `chats/${name}/chat`
    useEffect( () => {
        
        setImageUrl(image)
        getUserData()
         
        }, []);

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
            setUser_name(userData.name )
            setUser_avatar(userData.avatar)
         }
         
        }
      });
        
        }
    const navigation = useNavigation<propsStack>()
    return <>
        <TouchableOpacity style={styles.ContactBox} onPress={() => {

let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}

     
    const id = guid();
           setSelect(!select)
           const userUID = auth().currentUser?.uid;
           firestore()
           .collection(docUrl)
           .doc(id)
           .set({
           
           GroupName: nameUrl,
            GroupImage: ImageUrl,
            user_id: userUID,
            createdAt: firestore.FieldValue.serverTimestamp(),
            avatar: user_avatar,
            userName: user_name,
            id: id,
     
           }).then(()=> {
            navigation.navigate('Chat' as never, {name: name, idUrl: id, Image: image} as never,)
           })
           
        }}>
        <View style={styles.profilePictureView} >
            <Image style={styles.profilePicture} source={{uri: imageUrl}} resizeMode="cover"/>
           { select == true ? <View style={styles.Check}>
            <AIcon name={'checkcircleo'} size={20} color={COLORS.background.white} />
            </View> : <View /> }
        </View>
        <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{desc}</Text>
        </View>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
   
    ContactBox: {
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    profilePictureView: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
        
    },
    info: {
        paddingLeft: 10,
        
    },
    name: {
        fontSize: 17,
        fontFamily: 'Montserrat-Regular',
        color: COLORS.background.black
    },

    desc: {
        fontSize: 13,
        fontFamily: 'Montserrat-Regular',
        color: COLORS.background.black
    },
    Check: {
        width: 20,
        height: 20,
        backgroundColor: COLORS.blue,
        position: 'absolute',
        borderRadius: 100,
        bottom: 0,
        right: 0,
    }
})