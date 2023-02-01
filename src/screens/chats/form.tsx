import React, {useState, useEffect} from "react";
import { Text, Dimensions, View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity } from "react-native";
import { COLORS } from "../../colors";

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm  } from "react-hook-form";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'


const schema = yup.object({
   
    TextBox: yup.string().required(),
 })

 type Data = { 
    TextBox: string ; 
  }

 

export default function Form() {

    const { control, handleSubmit,  formState: {errors}} = useForm<Data>({
        resolver: yupResolver(schema)
})

const [user_uid, setUser_uid] = useState<string>()
const [user_name, setUser_name] = useState<string>()


    console.log(user_uid)
    useEffect(() => {
        const userUID = auth().currentUser?.uid;
        setUser_uid(userUID)
        getUsername()
        
    }, [])
 //#region GetUsername
    function getUsername() {

        const userUID = auth().currentUser?.uid;
        firestore()
  .collection('users')
  .doc(userUID)
  .get()
  .then(documentSnapshot => {
   

    if (documentSnapshot.exists) {
     const userData  = documentSnapshot.data();
     if (userData != undefined) {
        setUser_name(userData.name )
     }
     
    }
  });
    
    }
    //#endregion

   console.log(user_uid, user_name)

function handleSignIn(data: Data) {
   const Date_ = new Date
    firestore()
      .collection('chats')
      .doc(`${Math.random() * 100000}`)
      .set({
       text: data.TextBox,
       user_id: user_uid,
       date: `${Date_}`,
       userName: user_name,
       createdAt: firestore.FieldValue.serverTimestamp()



      })
}
        return <>
        <View style={styles.form}>
            <Controller control={control} name="TextBox"
                render={({ field: { onChange, onBlur, value}}) => (
                    
                    <View  style={[styles.Input, {
                    
                        
                    }]}>
                    <TextInput style={styles.InputText}
                        onChangeText={onChange}
                        onBlur={onBlur}
                        value={value}
                        placeholder="Send message"
                        placeholderTextColor={COLORS.gray} 
                        selectionColor={COLORS.gray}
                        multiline={true}
                        numberOfLines={1}
                     
                        
                    />
                    <TouchableOpacity style={styles.sendButton} onPress={handleSubmit(handleSignIn) } >

                    <Icon name={'send'} size={25} color={COLORS.TextBoxGray} />

                    </TouchableOpacity>
                 

                </View>
                
                )}/> 
        </View>


        </>
}

const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
    form: {
        alignItems: 'center',
        paddingVertical: 50,
  
    },
    Input: {
        width: '95%',
       
        flexDirection: 'row',
        minHeight: height / 16,
        maxHeight: height / 14,
       
        marginVertical: 15,
        alignItems: 'center',
       justifyContent: 'space-between',
     
       backgroundColor: COLORS.TextBoxGray,
       borderRadius: 60,
      
        overflow: 'hidden'
        
      
       
        
    },

    InputText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: COLORS.gray,
       width: '80%',
       paddingHorizontal: 25,

    
     
    },

    sendButton: {
        width: 50,
        height: 50,
        backgroundColor: COLORS.blue,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 60,
    }
})