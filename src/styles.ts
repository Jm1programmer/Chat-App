import {StyleSheet} from "react-native";
import { COLORS } from "./colors";
//Montserrat-Bold.ttf
//Montserrat-Regular.ttf
//Montserrat-SemiBold.ttf
//Montserrat-Thin.ttf
const Markdownstyles = StyleSheet.create({
    heading1: {
      fontSize: 32,
      backgroundColor: '#000000',
      
      fontFamily: 'Montserrat-Regular',
    },
    heading2: {
      fontSize: 24,
     
      fontFamily: 'Montserrat-Regular',
    },
    heading3: {
      fontSize: 18,
  
      fontFamily: 'Montserrat-Regular',
    },
    heading4: {
      fontSize: 16,
    
      fontFamily: 'Montserrat-Regular',
    },
    heading5: {
      fontSize: 13,
     
      fontFamily: 'Montserrat-Regular',
    },
    heading6: {
      fontSize: 11,
     
      fontFamily: 'Montserrat-Regular',
    },
    text: {
        
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
    },

    link: {
       
        fontSize: 15,
        fontFamily: 'Montserrat-SemiBold',
        color: COLORS.TextBoxGray
    },

    list_item: {
       
        fontFamily: 'Montserrat-SemiBold',
    },

    blockquote: {
       
    }
  });

  export default Markdownstyles;