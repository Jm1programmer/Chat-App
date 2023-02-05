import React, {useState} from "react";
import { TextInput, View, Text, StyleSheet, Dimensions, TouchableOpacity, } from "react-native";
import { COLORS } from "../../colors";

import { useNavigation, } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
type Data = { 
    Email: string ; 
    Password: string
  }


  
import auth from '@react-native-firebase/auth'

import { Controller, useForm  } from "react-hook-form";
import { ActivityIndicator } from "react-native";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";



import Icon from 'react-native-vector-icons/Feather'

const schema = yup.object({
    Email: yup.string().email('Invalid email').required('Enter your email'),
     Password:  yup.string().min(6).required()
 })

export default function Form() {
    const [HideText, sethideText] = useState<boolean>(false)
    const navigation = useNavigation<propsStack>()
   
    const { control, handleSubmit,  formState: {errors}} = useForm<Data>({
        resolver: yupResolver(schema)
})

function handleSignIn(data: Data) {
    auth().signInWithEmailAndPassword(
        data.Email, 
        data.Password
       
        )
       
}
    return <>
    
    <Controller control={control} name="Email"
            render={({ field: { onChange, onBlur, value}}) => (
                
                <View  style={[styles.Input, {
                    borderColor: errors.Email?  'red' : COLORS.lowOpacityWhite,
                    
                }]}>
                <TextInput style={styles.InputText}
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    placeholder="Email"
                    placeholderTextColor={COLORS.background.white} 
                    selectionColor={COLORS.background.white}
                    
                />
        

            </View>
             
            )}/> 
        {errors.Email && <Text style={styles.errorsText}>{errors.Email?.message}</Text>   }

<Controller control={control} name="Password"
            render={({ field: { onChange, onBlur, value}}) => (
                
                <View  style={[styles.Input, {
                    borderColor: errors.Password?  'red' : COLORS.lowOpacityWhite,
                    
                }]}>
              <TextInput style={styles.InputText}
                    
                    placeholder="Password"
                    placeholderTextColor={COLORS.background.white} 
                    onChangeText={onChange}
                    onBlur={onBlur}
                    value={value}
                    selectionColor={COLORS.background.white}
                    secureTextEntry={HideText}
                />

            <TouchableOpacity onPress={() => { sethideText(!HideText) }}>
                    <Icon name={ HideText? "eye-off" : "eye"} size={25} color={COLORS.lowOpacityWhite} />
            </TouchableOpacity>
        

            </View>
             
            )}/> 
      {errors.Password && <Text style={styles.errorsText}>{errors.Password?.message}</Text>   }
          
      
            <TouchableOpacity style={[styles.button]} onPress={handleSubmit(handleSignIn)}>
                <Text style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity>

            <View style={styles.accountInfo}>
                

                <TouchableOpacity>
                     <Text style={styles.accountInfoText} onPress={() => {navigation.navigate('SignUp' as never, {avatarImg: 'https://i.imgur.com/aK5j36w.png'} as never)}}>Create a New Account</Text>
                     
                </TouchableOpacity>
                
            </View>
    </>
}

const height = Dimensions.get('window').height;


const styles = StyleSheet.create({
   


    Input: {
        width: '95%',
       
        flexDirection: 'row',
        height: height / 16,
       
        marginVertical: 15,
        alignItems: 'center',
       justifyContent: 'space-between',
     
       borderColor: COLORS.lowOpacityWhite,
       borderWidth: 2,
       borderRadius: 5,
       
        paddingHorizontal: 25,
       
        
    },

    InputText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: COLORS.background.white,
       width: '80%',
       height: '110%',

    
     
    },

    
    errorsText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#E81C23',
 

    },
    button: {
        marginTop: 20,
        width: '95%',
        height: height / 15,
        backgroundColor: COLORS.background.white,
        borderRadius: 60,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        
    },
    buttonText: {
        color: COLORS.blue,
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        
    },

    accountInfo: {
        alignItems: 'center',
        marginTop: 10,
    },
    accountInfoText: {
        color: COLORS.background.white,
        fontFamily: 'Montserrat-Regular',
        marginTop: 5,
    }
  
})