import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import ChatsList from "./chats";
import DownMenu from "./downmenu";

export default function Home(){
    return <>
    <View style={styles.screen}>
        <View style={styles.title}>
            <Text style={[styles.text, {fontSize: 20}]}>Messages</Text>
            <TouchableOpacity style={styles.profilePicture}></TouchableOpacity>
         
        </View>
      
       <ChatsList />
    </View>
    <DownMenu />
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
        
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.blue
    }
})