import { StyleSheet, Text, View } from 'react-native';


const StylesHome = StyleSheet.create({ 
    contaier_view1:{
        flex:3,
        
    },
    contaier_view2:{
        flex:2,
       
    },
    contaier_view3:{
        flex:1,
    
    },
    Image_phoneXanh:{
        width:285,
        height:319,
        top:60,
    },
    view_row:{
        flexDirection:'row',
        paddingTop:15
    },
    text_1:{
        fontSize:17,
        textAlign:'center'
    },
    text_gia1:{
        fontSize:18,
        fontWeight:'bold'
    },
   text_gia2:{
        top:2,
        left:30,
        fontSize:15,
        fontWeight:'bold',
        color:'gray',
        textDecorationLine:'line-through',
   },
   text_3:{
        fontSize:15,
        fontWeight:'bold',
        color:'#FA0000'   
    },
    btn_chonMau:{
        borderWidth:1,
        borderRadius:8,
        width:332,
        height:44,
        top:15,
        justifyContent:'center',
        alignItems:'center'
    },
    btn_chonMua:{
        borderRadius:8,
        width:332,
        height:54,
        top:15,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#EE0A0A',
        top:40
    },
    text_chonMua:{
       fontWeight:'bold',
       color:'#F9F2F2',
       fontSize:20,
    },

});
export default StylesHome;