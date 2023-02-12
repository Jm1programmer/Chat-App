import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import Header from "./header";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import AIcon from 'react-native-vector-icons/AntDesign'

import type { RouteProp } from '@react-navigation/native';
type ParamList = {
    Detail: {
        name: string,
        idUrl: string,
        Image: string,
        InvitedByUserName: string,
        usersArray: string
    };
  };


export default function ChatsInformation() {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
    const navigation = useNavigation<propsStack>()
    const [users, SetUsers] = useState<any>()
  console.log(route.params.usersArray)
  
       
  
  
    return <>
        <Header />
        <View style={styles.JoinGroup}>
        <Image style={styles.GroupImage} source={{uri: route.params.Image}} />
        <Text style={styles.GroupName}>{route.params.name}</Text>
     
       <TouchableOpacity style={styles.button}>
          <AIcon name={'logout'} size={25} color={COLORS.background.black} />
          <Text>Sair do grupo</Text>
       </TouchableOpacity>
        </View>
    
        
    </>
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 
    JoinGroup: {
        alignItems: 'center',
   
       
    },
    GroupImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginTop: 10,
    },
    GroupName: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: COLORS.background.black,
        marginTop: 10,
    },

    invitedBy: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        color: COLORS.background.black,
       
    },

    button: {
        flexDirection: 'row',
       
        
    },
    buttonText: {
        color: COLORS.background.white,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        
    },
})