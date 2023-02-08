import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../colors";
import AIcon from 'react-native-vector-icons/AntDesign'
import EIcon from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";

type MessagesProps = {
    nameUrl: string,
    imageUrl:string,
    
  };
export default function Header({nameUrl, imageUrl} : MessagesProps) {
    const navigation = useNavigation<propsStack>()
    return <>

    <View style={styles.Header}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
        }}>
            <AIcon name={'arrowleft'} size={25} color={COLORS.background.black} />
        </TouchableOpacity>
    
    <TouchableOpacity style={styles.ContactBox}>
        <View style={styles.profilePictureView}>
            <Image style={styles.profilePicture} source={{uri: imageUrl}} resizeMode="cover" />
        </View>
        <View style={styles.info}>
            <Text style={styles.name}>{nameUrl}</Text>
           
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

    profilePictureView: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center'
    },
    profilePicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
       
    },
    info: {
        paddingLeft: 10,
    },
    name: {
        fontSize: 17,
        fontFamily: 'Montserrat-Regular'
    },

    
})