

import React, {useEffect, useState, useRef } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import TextBox from "./textbox";
import Form from "./form";
import { useRoute } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import firestore from '@react-native-firebase/firestore';

type MessagesProps = {
  nameUrl: string,
  

};

export default function MessagesFlatList({nameUrl, } : MessagesProps) {

  const Global = 'Global-chat'

  
 
  
    const [messages, setMessages] = useState<any>([]);
        const getMessages = async() => {
           await firestore()
           
            .collection(`chats/${nameUrl}/chat`)
            .orderBy('createdAt')
            .onSnapshot(querySnapshot => {
                let doc: Array<Object>= [];
                 querySnapshot.docs.map(documentSnapshot => {
                 
                   const categories = {
                    id: documentSnapshot.get('id'),
                       user_id: documentSnapshot.get('user_id'),
                       userName: documentSnapshot.get('userName'),
                       text: documentSnapshot.get('text'),
                       date: documentSnapshot.get('date'),
                       createdAt: documentSnapshot.get('createdAt'),
                       avatar: documentSnapshot.get('avatar'),
                      
                      
                   }
                   doc.push(categories);
                 });
              
                 setMessages(doc)
               })
           
    }
   
    useEffect(() => {
     
       getMessages()
    }, []);
    const flatlistRef = useRef<FlatList>(null);
  
    
  
return <>
        <FlatList 
        data={[...messages]}
        renderItem={({ item }) =>  <TextBox nameUrl={nameUrl}   avatar={''} idUrl={''} user_id={""} userName={""} text={""} date={""} id={""} createdAt={{}}  {...(item as object)}  />  }
        ref={flatlistRef}
        keyExtractor={({date, user_id, id}) => user_id + date + id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
       
     
        
         />

         <Form  nameUrl={nameUrl}  idUrl={''} flatlistRef={flatlistRef} />
    </>
}

