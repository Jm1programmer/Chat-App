

import React, {useEffect, useState, useRef } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import TextBox from "./textbox";
import InviteBox from "./invitebox";
import Form from "./form";
import { useRoute } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'
import { getIn } from "yup/lib/util/reach";

type MessagesProps = {
  nameUrl: string,
  

};

export default function MessagesFlatList({nameUrl, } : MessagesProps) {

  const Global = 'Global-chat'

  
 
  
    const [messages, setMessages] = useState<any>([]);
        const getMessages = async() => {
           firestore()

            .collection(`chats/${nameUrl}/chat`)
            .orderBy('createdAt')
            .onSnapshot(querySnapshot => {
              let doc: Array<Object> = [];
              querySnapshot.docs.map(documentSnapshot => {

                const categories = {
                  id: documentSnapshot.get('id'),
                  user_id: documentSnapshot.get('user_id'),
                  userName: documentSnapshot.get('userName'),
                  text: documentSnapshot.get('text'),
                  date: documentSnapshot.get('date'),
                  createdAt: documentSnapshot.get('createdAt'),
                  avatar: documentSnapshot.get('avatar'),
                  type: documentSnapshot.get('type'),
                  GroupImage: documentSnapshot.get('GroupImage'),
                  GroupName: documentSnapshot.get('GroupName')
                };
                doc.push(categories);
              });

              setMessages(doc);
            })
           
    }
    const flatlistRef = useRef<FlatList>(null);
    useEffect(() => {
    
      flatlistRef.current?.scrollToOffset({ animated: true, offset: 0 })
       getMessages()
    }, [nameUrl]);
   
  
    
  
return <>
        <FlatList 
        data={[...messages].reverse()}
        renderItem={({ item }) =>  {

          if (item.type == 'text') {
            return <TextBox nameUrl={nameUrl} type={''}  avatar={''} idUrl={''} user_id={""} userName={""} text={""} date={""} id={""} createdAt={{}}  {...(item as object)}  /> 
           } else {
              return <InviteBox GroupName={""} GroupImage={""} nameUrl={nameUrl} type={''} avatar={''} idUrl={''} user_id={""} userName={""} text={""} date={""} id={""} createdAt={{}} {...(item as object)} />
           }
        
      } }
        ref={flatlistRef}
        keyExtractor={({date, user_id, id}) => user_id + date + id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        inverted
     
        
         />

         <Form  nameUrl={nameUrl}  idUrl={''} flatlistRef={flatlistRef} />
    </>
}

