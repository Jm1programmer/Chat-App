import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";

export default function Add(){
    const navigation = useNavigation<propsStack>()
    const urls = 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/640px-HD_transparent_picture.png'
    return <>
    
    
            <TouchableOpacity style={styles.Add} onPress={() => {
                navigation.navigate('NewChat'  as never, {urls: urls} as never)
            }}>
            <Icon name={'pluscircleo'} size={40} color={COLORS.background.white} />
            </TouchableOpacity>
         
    </>
}

const styles = StyleSheet.create({
  
 
    
    Add: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        bottom: 50,
        right: 30,
        alignSelf: 'flex-end',
    }
})