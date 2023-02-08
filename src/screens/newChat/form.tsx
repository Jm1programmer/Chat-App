import React, {useState, useEffect} from "react";
import { Text, Dimensions, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, Image } from "react-native";
import { COLORS } from "../../colors";


import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm  } from "react-hook-form";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/Entypo'
import AIcon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
const schema = yup.object({
   
    ChatName: yup.string().required().max(25),
    DescName: yup.string().required().max(200),
 })

 type Data = { 
    ChatName: string ; 
    DescName: string;
  }

  type MessageData = {
    urls: string
  }

 
 

export default function Form({urls} : MessageData) {

    const [imageUrl, setImageUrl] = useState<string | undefined>(undefined);
    
    const navigation = useNavigation<propsStack>()

    

    const { control, handleSubmit, resetField,  formState: {errors}} = useForm<Data>({
        resolver: yupResolver(schema),
        
        
})

    useEffect(() => {
        setImageUrl(urls)
    }, [urls])

function handleSignIn(data: Data) {

    //generates random id;
let guid = () => {
    let s4 = () => {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    }
    //return id of format 'aaaaaaaa'-'aaaa'-'aaaa'-'aaaa'-'aaaaaaaaaaaa'
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
}


     
    const id = guid();
   const Date_ = new Date
    firestore()
      .collection('chats')
      .doc(data.ChatName)
      
      .set({
        desc: data.DescName,
        name: data.ChatName,
        createdAt: firestore.FieldValue.serverTimestamp(),
        id: id,
        image: urls,

      })
      .then(( )=> {
       
        firestore()
        .collection(`chats/${data.ChatName}/chat`)
        .doc('created')
        .set({
         can: 1
        })
        navigation.navigate('Chat' as never, {name: data.ChatName, Image: urls} as never,)
      });
}   

        return <>
        <View style={styles.form}>

            

            <TouchableOpacity style={styles.ChatPictureView} onPress={() => {
                navigation.navigate('SearchImages')
            }}>
            <Icon name={'camera'} size={25} color={COLORS.TextBoxGray} />
           { imageUrl == undefined ? <View></View> : <Image source={{uri: imageUrl}} style={styles.ChatPicture} /> } 
            </TouchableOpacity>

            <Controller control={control} name="ChatName"
                render={({ field: { onChange, onBlur, value}}) => (
                    
                    <View  style={[styles.NameInput, {
                    
                        
                    }]}>
                    <TextInput style={styles.InputText}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Enter chat name..."
                        placeholderTextColor={COLORS.gray} 
                        selectionColor={COLORS.gray}
                  
                     
                        
                    />

                  

                    

          

                    

                   
< View style={{   borderColor: COLORS.blue,
                 borderWidth: 1,
       borderRadius: 5,
  
       }}/>

                </View>
                    
                )}/> 
        </View>

        <View style={{   borderColor: COLORS.TextBoxGray,
          borderWidth: 1,
       borderRadius: 5,}}/>

         <View style={styles.form}>

            

         

            <Controller control={control} name="DescName"
                render={({ field: { onChange, onBlur, value}}) => (
                    
                    <View  style={[styles.DescInput, {
                    
                        
                    }]}>
                    <TextInput style={styles.InputText}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Enter chat description..."
                        placeholderTextColor={COLORS.gray} 
                        selectionColor={COLORS.gray}
                        multiline
                  
                     
                        
                    />

                  

                    

          

                    

                   
< View style={{   borderColor: COLORS.blue,
                 borderWidth: 1,
       borderRadius: 5,}}/>

                </View>
                    
                )}/> 
        </View>

        <View style={{   borderColor: COLORS.TextBoxGray,
          borderWidth: 1,
       borderRadius: 5,}}/>

<TouchableOpacity style={styles.Add} onPress={(e) => {
                        const submit = () => {
                            {;handleSubmit(handleSignIn)(e);}
                        }

                     
                        
                        submit()
                        
                    }}>
            <AIcon name={'checkcircleo'} size={40} color={COLORS.background.white} />
            </TouchableOpacity>

        </>
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    form: {
      justifyContent: 'center',
      alignItems: 'center',
        paddingVertical: 20,
        marginBottom: 15,
        flexDirection: 'row',
       
  
    },
    NameInput: {
        width: '85%',
       
    
        minHeight: height / 22,
    
       
        marginVertical: 15,
      
     
    
       borderRadius: 60,
      
        overflow: 'hidden',
        
        paddingHorizontal: 25,
       
        
    },

    DescInput: {
        width: '100%',
       
    
        minHeight: height / 22,
    
       
        marginVertical: 15,
      
     
    
       borderRadius: 60,
      
        overflow: 'hidden',
        
        paddingHorizontal: 25,
       
        
    },

    InputText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: COLORS.gray,
       width: '100%',
      
       paddingVertical: 5,

    
     
    },

    ChatPictureView: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: COLORS.gray,
        alignItems: 'center',
        justifyContent: 'center'
    },

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
    },

    ChatPicture: {
        width: 50,
        height: 50,
        borderRadius: 60,
        position: 'absolute',
    },
})