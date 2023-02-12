

import React, {useEffect, useState, useRef } from "react";
import { FlatList, Text, StyleSheet, Dimensions} from "react-native";
import AvatarCard from "./avatar";
import { COLORS } from "../../colors";
import { ActivityIndicator } from "react-native";

import firestore from '@react-native-firebase/firestore';

type MessagesProps = {
    category: string,
  };

export default function AvatarFlatList({category}: MessagesProps) {
  
    const [Avatar, setAvatar] = useState<any>(undefined);
        const getAvatars = async() => {
           firestore()

            .collection('avatar')
            .where("category", "array-contains", category)
            .onSnapshot(querySnapshot => {
              let doc: Array<Object> = [];
              querySnapshot.docs.map(documentSnapshot => {

                const categories = {
                  image: documentSnapshot.get('image'),
                };
                doc.push(categories);
              });

              setAvatar(doc);
            })
           
    }
   
    useEffect(() => {
    
       getAvatars()
    }, []);
    const flatlistRef = useRef<FlatList>(null);
    

    if (Avatar == undefined) { return <ActivityIndicator size={'large'} /> } else {
        return <>
        <Text style={{color: COLORS.background.black, fontSize: 25,  fontFamily: 'Montserrat-SemiBold'  }}>{category}</Text>
    
            <FlatList 
            data={Avatar}
            renderItem={({ item }) =>  <AvatarCard image={''} category={''} {...(item as object)}  />  }
            ref={flatlistRef}
            keyExtractor={({image}) => image}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
     
            
             />
    
            
        </>
    }

  

}

