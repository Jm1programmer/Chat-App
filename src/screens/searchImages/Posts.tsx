import { Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from "react-native"
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
type MessagesProps = {
    urls: any,
  };

export default function PostsImages({urls} : MessagesProps){
  
    const navigation = useNavigation<propsStack>()
    return <>
    <TouchableOpacity onPress={() => {
       navigation.navigate('NewChat' as never, {urls: urls.regular} as never)
    }}>
        { urls.regular == undefined ?  <ActivityIndicator /> : <Image source={  {uri: `${urls.regular}.png`}} resizeMode="cover" style={styles.Image} />}
    </TouchableOpacity>

  
    </>
}

const styles = StyleSheet.create({
    Image: {
        width: 180,
        height: 180,
        margin: 5

    }
})