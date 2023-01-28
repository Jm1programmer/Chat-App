import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
export default function Contact() {
    return <>
        <TouchableOpacity style={styles.ContactBox}>
        <View style={styles.profilePicture}></View>
        <View style={styles.info}>
            <Text style={styles.name}>João Marcos</Text>
            <Text style={styles.lastMessage}>Como q cria um whatzapp 2👍👍👍</Text>
        </View>
        </TouchableOpacity>
    </>
}

const styles = StyleSheet.create({
    text: {

    },
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
    },

    lastMessage: {
        fontSize: 13,
    },
})