

import React, {useEffect, useState, useRef } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import Contact from "./contact";


import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

type MessagesProps = {
  nameUrl: string;
  ImageUrl: string;

};

export default function ChatsFlatList({nameUrl, ImageUrl} : MessagesProps) {

  const [user_uid, setUser_uid] = useState<any>(auth().currentUser?.uid)

  useEffect(() => {
    const userUID = auth().currentUser?.uid;
    setUser_uid(userUID)

    
}, [])
  
    const [chats, setChats] = useState<any>([]);
        const getChats = async() => {
           firestore()

            .collection('chats')

            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
              let doc: Array<Object> = [];

              if (querySnapshot) {
                querySnapshot.docs.map(documentSnapshot => {
                  const users: Array<string> = documentSnapshot.get('users');

                  if (users.includes(user_uid)) {


                    const categories = {
                      name: documentSnapshot.get('name'),
                      desc: documentSnapshot.get('desc'),
                      id: documentSnapshot.get('id'),
                      image: documentSnapshot.get('image')
                    };
                    doc.push(categories);
                  }
                });
              }
              setChats(doc);
            })
              
           
    }
   
    useEffect(() => {
    
       getChats()
    }, []);
    const flatlistRef = useRef<FlatList>(null);
    
  
return <>
        <FlatList 
        data={chats}
        renderItem={({ item }) =>  <Contact nameUrl={nameUrl} ImageUrl={ImageUrl} image={""} name={""} desc={""} id={''} {...(item as object)}  />  }
        ref={flatlistRef}
        keyExtractor={({id}) => id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />

        
    </>
}

