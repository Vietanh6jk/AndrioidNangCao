import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    text_Top:{
        fontFamily:'Roboto',
        fontWeight: "bold",
        fontSize:60,
        textAlign:'center',
        color:'#000000'
    },
    header:{
        position:'absolute',
        width:154,
        height:70,
        top:-193,
        left:80,
        flex:1,
        justifyContent:'center'
    },
    text_Verification:{
        fontFamily:'Roboto',
        fontWeight: "bold",
        fontSize:20,
        textAlign:'center',
        color:'#000000'
    },
    div_Verification:{
        position:'absolute',
        width:302,
        height:53,
        top:-50,
        left:12,
        flex:1
    },
    input_code:{
        borderWidth:1,
        borderColor:'#000000',
        width:50,
        height:50,
        fontSize:30,
        textAlign:'center',
        
    },
    input_container:{
        top:30,
        padding:15,
        flexDirection:'row',
        
    },
    Text_p:{
        fontWeight: "bold",
       fontSize:15,
       lineHeight:18,
       textAlign:'center'
    },
    p_container:{
       top:40, 
       padding:40
    },
    btn:{
      elevation: 8,
      backgroundColor:'#E3C000',
      color:'black',
      width: 339,
      height: 50,
      paddingVertical: 10,
      paddingHorizontal: 12,
      top:40
    },
    text_btn:{
        fontSize: 18,
        color: "#000000",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
});
export default styles;