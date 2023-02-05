

import React, {useEffect, useState, useRef } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import AvatarCard from "./avatar";


import firestore from '@react-native-firebase/firestore';



export default function AvatarFlatList() {
  
    const [chats, setChats] = useState<any>([]);
        const getChats = async() => {
           await firestore()
           
            .collection('avatar')
          
            .onSnapshot(querySnapshot => {
                let doc: Array<Object>= [];
                 querySnapshot.docs.map(documentSnapshot => {
                 
                   const categories = {
                 
                       image: documentSnapshot.get('image'),
                  
                      
                      
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
        renderItem={({ item }) =>  <AvatarCard image={''} {...(item as object)}  />  }
        ref={flatlistRef}
        keyExtractor={({image}) => image}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        
         />

        
    </>
}

