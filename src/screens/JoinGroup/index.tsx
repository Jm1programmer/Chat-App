import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import Header from "./header";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

import type { RouteProp } from '@react-navigation/native';
type ParamList = {
    Detail: {
        name: string,
        idUrl: string,
        Image: string,
        InvitedByUserName: string
    };
  };


export default function JoinGroup() {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
    const navigation = useNavigation<propsStack>()
  
    return <>
        <Header />
        <View style={styles.JoinGroup}>
        <Image style={styles.GroupImage} source={{uri: route.params.Image}} />
        <Text style={styles.GroupName}>{route.params.name}</Text>
        <Text style={styles.invitedBy}>Invited by {`${route.params.InvitedByUserName}`}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {
           navigation.navigate('Chat' as never, {name: route.params.name,  Image: route.params.Image} as never,)

           async function getInfo() {
            const users =  firestore()
              .collection(`chats`)
              .doc(route.params.name)
              .onSnapshot(documentSnapshot => {
                 const data = documentSnapshot.data();
                 const userUID = auth().currentUser?.uid;
                 if (data) {
                  
                  const arrayUnion = firestore.FieldValue.arrayUnion(userUID)
          firestore()
          .collection('chats')
          .doc(route.params.name)
          .update({
            users: arrayUnion
          })
                 }
               
              });
         
          }
          getInfo()
        }}>
            <Text style={styles.buttonText}>Enter the chat</Text>
        </TouchableOpacity>
        </View>
    
        
    </>
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 
    JoinGroup: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height / 1.5,
    },
    GroupImage: {
        width: 200,
        height: 200,
        borderRadius: 100,
        marginTop: 10,
    },
    GroupName: {
        fontFamily: 'Montserrat-Bold',
        fontSize: 30,
        color: COLORS.background.black,
        marginTop: 10,
    },

    invitedBy: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: COLORS.background.black,
       
    },

    button: {
        marginTop: 50,
        width: '95%',
        height: height / 15,
        backgroundColor: COLORS.blue,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        
    },
    buttonText: {
        color: COLORS.background.white,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        
    },
})