import React, {useState, useEffect} from "react";
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type MessagesProps = {
    name: string;
    desc: string;
    id: string;
    image: string
  };

  

  
export default function Contact({name, desc, id, image}: MessagesProps) {
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
   const lenght = 47
    useEffect( () => {
        
        setImageUrl(image)
       
         
        }, []);
    const navigation = useNavigation<propsStack>()
    return <>
        <TouchableOpacity style={styles.ContactBox} onPress={() => {
           navigation.navigate('Chat' as never, {name: name, idUrl: id, Image: image} as never,)
        }}>
        <View style={styles.profilePictureView}>
            <Image style={styles.profilePicture} source={{uri: imageUrl}} resizeMode="cover"/>
        </View>
        <View style={styles.info}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.desc}>{desc.length > lenght? desc.substring(0, lenght - 3) + "..." : desc} </Text>
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
        color: COLORS.background.black,
       
    },
})