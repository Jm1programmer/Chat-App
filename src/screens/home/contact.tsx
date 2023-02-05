import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type MessagesProps = {
    name: string;
    desc: string;
    id: string;
  };

  
export default function Contact({name, desc, id}: MessagesProps) {
    const navigation = useNavigation<propsStack>()
    return <>
        <TouchableOpacity style={styles.ContactBox} onPress={() => {
           navigation.navigate('Chat' as never, {name: name, idUrl: id} as never,)
        }}>
        <View style={styles.profilePicture}></View>
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
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.blue
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
})