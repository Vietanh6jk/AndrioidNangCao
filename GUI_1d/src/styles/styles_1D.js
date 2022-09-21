import { StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const styles_1D = StyleSheet.create({ 
    container_header:{
        width:73,
        height:29,
        top:-180,
        left:160,

    },
    image_background:{
        flex:1,
        width:'100%',
        justifyContent:'center'
    },
    text_header:{
        fontWeight:'bold',
        fontSize:25,
        lineHeight:29.3,
        textAlign:'center',
    },
    container_email:{
        width:330,
        height:54,
        borderWidth:1,
        top:-100,
        left:20
    },
    text_email:{
        fontSize:20,
        top:10,
        left:5
    },
    text_password:{
        fontSize:20,
        top:10,
        left:5
    },
    container_password:{
        width:330,
        height:54,
        borderWidth:1,
        top:-64,
        left:20
    },
    container_btn:{
        width:330,
        height:45,
        top:-14,
        backgroundColor:'#E53935', 
        left:20       
    },
    text_btn:{

        fontWeight:'bold',
        color:'#FFFFFF',
        textAlign:'center',
        top:10,
        
    },
    container_text:{
        left:30,
        marginBottom:20,
        alignItems:'center'
        
    },
    text_link:{
        color:'#5D25FA',

    },
    image_pass:{
        top:-20,
        left:280,
        resizeMode: 'stretch',
    },
    container_icon:{
       top:40, 
       flexDirection:'row',
       left:30
    },
    image_connect3:{
        width:110,
        height:45,
        backgroundColor:'#0F8EE0',
        justifyContent:'center',
        alignItems:'center'
    },
    image_connect2:{
        width:100,
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#0680F1'

    },
    image_connect1:{
        width:100,
        height:45,
        backgroundColor:'#25479B',
        justifyContent:'center',
        alignItems:'center'
    }
});
export default styles_1D;