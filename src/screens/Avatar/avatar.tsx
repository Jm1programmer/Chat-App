import { useState, useEffect, } from "react";
import { ActivityIndicator, Image, StyleSheet, Touchable, TouchableOpacity, Vibration, View } from "react-native";
import { COLORS } from "../../colors";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
type MessagesProps = {
    image: string,
    category: string,
  };

export default function AvatarCard({ image, category}: MessagesProps) {
    const navigation = useNavigation<propsStack>()
    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true)
    
    useEffect( () => {
        
      setImageUrl(image)
      setLoading(false)
       
      }, []);

      if (loading) {return <ActivityIndicator /> } else {
        return <>
        <View style={styles.Avatar}>
        <TouchableOpacity style={[styles.AvatarView, {}]} onPress={() => {
            navigation.navigate('SignUp' as never, {avatarImg: image} as never)}
        }> 
            { imageUrl !== '' ?  <Image style={styles.AvatarImg} source={{uri: imageUrl}} resizeMode="cover"  /> : null}
           
        </TouchableOpacity>
        </View>
         
        </>
      }
   
}

const styles = StyleSheet.create({
    Avatar: {
        paddingHorizontal: 4,
        paddingVertical: 10,
       
    },
    AvatarImg: {
        width: 90,
        height: 90,
       },
       AvatarView: {
        width: 100,
        height: 100,
        backgroundColor: COLORS.TextBoxGray,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
       }
})