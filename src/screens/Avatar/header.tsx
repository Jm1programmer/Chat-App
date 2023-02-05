import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import AIcon from 'react-native-vector-icons/AntDesign'
import EIcon from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";


export default function Header() {
    const navigation = useNavigation<propsStack>()
    return <>

    <View style={styles.Header}>
        <TouchableOpacity onPress={() => {
            navigation.goBack()
        }}>
            <AIcon name={'arrowleft'} size={25} color={COLORS.background.black} />
        </TouchableOpacity>
    
    <View style={styles.ContactBox}>
      
        <View style={styles.info}>
            <Text style={styles.Title}>Choose avatar</Text>
          
           
        </View>
        </View>

       

    

    </View>


    
    </>
}

const styles = StyleSheet.create({
        Header: {
            width: '100%',
            height: 90,
           
       flexDirection: 'row',
       alignItems: 'center',
       
       padding: 10,
        },
    ContactBox: {
    
        flexDirection: 'row',
  
    },
    
    info: {
        paddingLeft: 30,
      
    },
    Title: {
        fontSize: 22,
        fontFamily: 'Montserrat-SemiBold'
    },
    subTitle: {
        fontSize: 15,
        fontFamily: 'Montserrat-Regular'
    },

    
})