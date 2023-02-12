import { Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator,  } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import { useState, useEffect } from "react";
type MessagesProps = {
    urls: any,
  };

export default function PostsImages({urls} : MessagesProps){
  
    const navigation = useNavigation<propsStack>()
    const [image, setImage] = useState<string | undefined>(undefined)

    useEffect(() => {
        setImage(urls.regular)
    }, [])
    return <>
    <TouchableOpacity style={styles.Post} onPress={() => {
       navigation.navigate('NewChat' as never, {urls: urls.regular} as never)
    }}> 
        <ActivityIndicator style={styles.ActivityIndicator} />
        { image == undefined ?  <ActivityIndicator /> : <Image source={  {uri: `${image}.png`}} resizeMode="cover" style={styles.Image} />}
    </TouchableOpacity>

  
    </>
}

const styles = StyleSheet.create({
    Post: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Image: {
        width: 180,
        height: 180,
        margin: 5

    },
    ActivityIndicator: {
        position: 'absolute',
    }
})