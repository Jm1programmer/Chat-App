import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import Header from "./header";
import AvatarFlatList from "./AvatarFlatlist";

export default function Avatar(){
    return <>
    <View style={styles.screen}>
        <Header />
        <AvatarFlatList />
  
    </View>
  
    </>
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: COLORS.blue,
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
    }
})