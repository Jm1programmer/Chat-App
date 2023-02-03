

import React, {useEffect, useState, useRef } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import Contact from "./contact";


import firestore from '@react-native-firebase/firestore';



export default function ChatsFlatList() {
  
    const [chats, setChats] = useState<any>([]);
        const getChats = async() => {
           await firestore()
           
            .collection('chats')
            .orderBy('createdAt', 'desc')
            .onSnapshot(querySnapshot => {
                let doc: Array<Object>= [];
                 querySnapshot.docs.map(documentSnapshot => {
                 
                   const categories = {
                 
                       name: documentSnapshot.get('name'),
                       desc: documentSnapshot.get('desc'),
                        id: documentSnapshot.get('id'),
                      
                      
                   }
                   doc.push(categories);
                 });
              
                 setChats(doc)
               })
           
    }
   
    useEffect(() => {
    
       getChats()
    }, []);
    const flatlistRef = useRef<FlatList>(null);
    
  
return <>
        <FlatList 
        data={chats}
        renderItem={({ item }) =>  <Contact  name={""} desc={""} id={''} {...(item as object)}  />  }
        ref={flatlistRef}
        keyExtractor={({id}) => id}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        
         />

        
    </>
}

