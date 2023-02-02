import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";
import AIcon from 'react-native-vector-icons/AntDesign'
import EIcon from 'react-native-vector-icons/Entypo'
export default function Header() {
    return <>

    <View style={styles.Header}>
        <TouchableOpacity>
            <AIcon name={'arrowleft'} size={25} color={COLORS.background.black} />
        </TouchableOpacity>
    
    <TouchableOpacity style={styles.ContactBox}>
        <View style={styles.profilePicture}></View>
        <View style={styles.info}>
            <Text style={styles.name}>Global Chat</Text>
           
        </View>
        </TouchableOpacity>

        <TouchableOpacity>
        <EIcon name={'dots-three-vertical'} size={20} color={COLORS.background.black} />

        </TouchableOpacity>

    

    </View>


    <View style={{   borderColor: COLORS.TextBoxGray,
          borderWidth: 1,
       borderRadius: 5,}}/>
       
    </>
}

const styles = StyleSheet.create({
        Header: {
            width: '100%',
            height: 90,
           
       flexDirection: 'row',
       alignItems: 'center',
       justifyContent: 'space-between',
       padding: 10,
        },
    ContactBox: {
    
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
        fontFamily: 'Montserrat-Regular'
    },

    
})