import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../colors";
import AIcon from 'react-native-vector-icons/AntDesign'
import EIcon from 'react-native-vector-icons/Entypo'
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore'
import { propsStack } from "../Stack/models";
import { useState } from "react";

type MessagesProps = {
    nameUrl: string,
    imageUrl:string,
    
  };
export default function Header({nameUrl, imageUrl} : MessagesProps) {
    const navigation = useNavigation<propsStack>()
    const [usersArray, setUsersArray] = useState()

    firestore()
          .collection(`chats`)
          .doc(nameUrl)
          .onSnapshot(documentSnapshot => {
            const data = documentSnapshot.data();
            if (data) {
             
                setUsersArray(data.users)
            }
           
          })

             
                
              
    return <>

    <View style={styles.Header}>
        <TouchableOpacity onPress={() => {
            navigation.navigate('Home')
        }}>
            <AIcon name={'arrowleft'} size={25} color={COLORS.background.black} />
        </TouchableOpacity>
    
    <TouchableOpacity style={styles.ContactBox} onPress={() => {
        navigation.navigate('ChatsInformation' as never, {name: nameUrl, Image: imageUrl, usersArray: usersArray} as never, )
    }}>
        <View style={styles.profilePictureView}>
            <Image style={styles.profilePicture} source={{uri: imageUrl}} resizeMode="cover" />
        </View>
        <View style={styles.info} >
            <Text style={styles.name}>{nameUrl}</Text>
            <Text style={styles.InfoText}>Tap to view chat data...</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
           navigation.navigate('InviteGroups' as never, {name: nameUrl,  Image: imageUrl} as never,)

        }}>
        <AIcon name={'adduser'} size={30} color={COLORS.background.black} />

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
    InfoText: {
        fontSize: 12,
        fontFamily: 'Montserrat-Regular'
    }
    
})