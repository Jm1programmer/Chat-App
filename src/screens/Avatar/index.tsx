import { Text, StyleSheet, View, TouchableOpacity, ScrollView } from "react-native";
import { COLORS } from "../../colors";
import Header from "./header";
import AvatarFlatList from "./AvatarFlatlist";

export default function Avatar(){
    return <>
    <View style={styles.screen}>
        <Header />
        <ScrollView
         showsHorizontalScrollIndicator={false}
         showsVerticalScrollIndicator={false}>
        <AvatarFlatList category={'Popular'} />
        <AvatarFlatList category={'Emoji'} />
        <AvatarFlatList category={'New'} />
        
        <AvatarFlatList  category={'Classic'}/>
        <AvatarFlatList  category={'Human'}/>
        </ScrollView>
       
  
    </View>
  
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
        color: COLORS.background.black
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.blue
    }
})