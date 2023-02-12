

import React, {useEffect, useState } from "react";
import { FlatList, Text, StyleSheet, Dimensions, ActivityIndicator, TouchableOpacity, View, TextInput,} from "react-native";
import PostsImages from "./Posts";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Controller, useForm  } from "react-hook-form";
import { COLORS } from "../../colors";

import api from "../../services/api";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../Stack/models";
import AIcon from 'react-native-vector-icons/AntDesign'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const schema = yup.object({
   
   search: yup.string().required()
 
 })

 type Data = { 
    search: string ; 
   
  }
export default function ImagesFlatList() {
    const per_page = 1;
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    
    const [search, setSearch] = useState<string | undefined>(undefined)


    const { control, handleSubmit, resetField,  formState: {errors}} = useForm<Data>({
        resolver: yupResolver(schema),
        
        
})


async function GetContent() {
  
  
  const baseUrl = 'https://api.unsplash.com';
    try {
        const resultado =  await api.get(`${baseUrl}/search/photos?page=${1}&query=${search}&client_id=Lw440DK-Zi8xsaGq-34RIEuJngDcCIgkH0Scy3syCsM`)
        return resultado.data

    }
    
    catch (error) {
        console.log(error)
        return {}
    }
}

   
    const [lista, setLista] = useState<any>([]);
        
    const getContent = async () => {
        const resultado = await GetContent()
   
        setLista((prev: any) =>[...resultado.results])
        setPage(page + per_page)
        
        setLoading(false)
       
     }
    
   
    
     useEffect(() => {
        if (loading) return;
       
        setLoading(true)
        getContent()

     
     }, [search] )

     function handleSignIn(data: Data) {
            setSearch(data.search)
            console.log(search)
            getContent()
            
     }
    
     
 
     const navigation = useNavigation<propsStack>()

     if (lista == undefined) { 
            return <>
            <Text>Loading...</Text>
            </>
     } else {
        return <>

<View style={styles.Header}>
<TouchableOpacity  onPress={() => {
            navigation.goBack()
        }}>
            <AIcon name={'arrowleft'} size={25} color={COLORS.background.black} />
        </TouchableOpacity>
    
    <View style={styles.ContactBox}>

        
      
        <View style={styles.info}>
        <View style={styles.form}>

            



<Controller control={control} name="search"
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



        </View>
        
        </View>

       

       
        <TouchableOpacity onPress={handleSubmit(handleSignIn)}>
    <Icon name={'send'} size={25} color={COLORS.blue} />
    </TouchableOpacity>
    </View>
   




                <FlatList style={styles.FlatList}
                data={lista}
                renderItem={({ item }) =>  <PostsImages   urls={undefined} {...(item as object)}  />  }
                keyExtractor={({urls} : any) => urls.small}
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                numColumns={2}
              
               
                onEndReached={getContent}
                onEndReachedThreshold={0.1}
                 />
        
                 
            </>
        
            
            
        }
        
        }

        const height = Dimensions.get('window').height;
const styles = StyleSheet.create({
    FlatList: {
        flexBasis: 0,
    },
    Title: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: COLORS.background.black,
        zIndex: 99,
    },

    Header: {
        width: '100%',
        height: 90,
      
   flexDirection: 'row',
   alignItems: 'center',
        justifyContent: 'space-between',
   
   padding: 20,
    },
ContactBox: {

    flexDirection: 'row',
    

},

info: {
    paddingLeft: 30,
  
},

subTitle: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular'
},

form: {
    justifyContent: 'center',
    alignItems: 'center',
      
      marginBottom: 15,
      flexDirection: 'row',
     

  },
  NameInput: {
      width: '88%',
     
  
      minHeight: height / 22,
  
     
   
    
   
  
     borderRadius: 60,
    
      overflow: 'hidden',
      
     
     
      
  },

  

  InputText: {
      fontFamily: 'Montserrat-Regular',
      fontSize: 16,
      color: COLORS.gray,
     width: '100%',
    
     paddingVertical: 5,

  
   
  },

  

 
})