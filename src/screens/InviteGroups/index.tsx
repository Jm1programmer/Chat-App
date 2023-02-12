import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from "react-native";
import Header from "./header";
import { useRoute } from "@react-navigation/native";
import { COLORS } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import ChatsFlatList from "./chatsFlatlist";
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


export default function InviteGroups() {
    const route = useRoute<RouteProp<ParamList, 'Detail'>>()
    const navigation = useNavigation<propsStack>()

    return <>
        <Header />
        <View style={styles.screen}>
        <ChatsFlatList nameUrl={route.params.name} ImageUrl={route.params.Image} />
        </View>
     
        
    </>
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({ 
   screen: {
    padding: 10,
   }
})