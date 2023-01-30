import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import Icon from 'react-native-vector-icons/Ionicons'
import AIcon from 'react-native-vector-icons/AntDesign'
import EIcon from 'react-native-vector-icons/Entypo'
import auth from '@react-native-firebase/auth';
export default function DownMenu() {
    return <>
        <View style={styles.DownMenu}>
            <TouchableOpacity style={styles.button}>
            <Icon name="chatbubble-ellipses-outline" size={30} color={COLORS.background.white} />
            <Text style={styles.text}>Messages</Text>
            </TouchableOpacity>
        
        <TouchableOpacity>
            <AIcon name="pluscircleo" size={40} color={'#fff'} />
        </TouchableOpacity>
        

        <TouchableOpacity onPress={() => {
            auth()
            .signOut()
        }} style={styles.button}>
        <EIcon name="cog" size={30} color={'#fff'} />
        </TouchableOpacity>
        
        </View>
    </>
}

const styles = StyleSheet.create({
    text: {
        color: COLORS.background.white,
        marginLeft: 5,
    },
    DownMenu: {
        width: '100%',
        height: 80,
        backgroundColor: COLORS.blue,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    button: {
       minWidth: 120,
       height: 40,
       alignItems: 'center',
       justifyContent: 'center', 
      
       borderColor: COLORS.background.white,
       borderWidth: 2,
       borderRadius: 10,
       flexDirection: 'row'
    }
})