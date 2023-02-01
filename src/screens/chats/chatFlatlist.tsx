

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import TextBox from "./textbox";



import firestore from '@react-native-firebase/firestore';



export default function MessagesFlatList() {
  
    const [messages, setMessages] = useState<any>([]);
        const getMessages = async() => {
           await firestore()
           
            .collection('chats')
            .orderBy('createdAt')
            .onSnapshot(querySnapshot => {
                let doc: Array<Object>= [];
                 querySnapshot.docs.map(documentSnapshot => {
                   
                   const categories = {
                       user_id: documentSnapshot.get('user_id'),
                       userName: documentSnapshot.get('userName'),
                       text: documentSnapshot.get('text'),
                       date: documentSnapshot.get('date'),
                      
                   }
                   doc.push(categories);
                 });
               
                 setMessages(doc)
               })
           
    }
   
    useEffect(() => {
    
       getMessages()
    }, []);
return <>
        <FlatList 
        data={messages}
        renderItem={({ item }) =>  <TextBox   user_id={""} userName={""} text={""} date={""} {...(item as object)}  />  }
        keyExtractor={({date, text, user_id}) => user_id + text + date}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />
    </>
}

