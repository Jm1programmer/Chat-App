import { Text, View, StyleSheet } from "react-native";
import Contact from "./contact";
export default function ChatsList() {
    return <>
        <View style={styles.ChatList}>
            <Text style={[styles.text, {fontSize: 17}]}>Chats</Text>
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            <Contact />
            
        </View>
    </>
}

const styles = StyleSheet.create({
    text: {

    },
    ChatList: {
        paddingVertical: 10,
    }
})