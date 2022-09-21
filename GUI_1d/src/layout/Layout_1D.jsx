import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image, ImageBackground } from 'react-native';
import styles_1D from '../styles/styles_1D';

const Layout_1D = () =>{
    return (
        <>
        <View >
        <ImageBackground resizeMode='cover'  style={styles_1D.image_background}  source={require('./../image/background.png') }>
        <View style={styles_1D.container_header}>
            <Text style={styles_1D.text_header}>LOGIN</Text>
        </View>
        <View style={styles_1D.container_email}>
            <TextInput style={styles_1D.text_email} placeholder='Email'/>
        </View>
        <View style={styles_1D.container_password}>
        
            <TextInput style={styles_1D.text_password} placeholder='Password' />     
            <Image style={styles_1D.image_pass} source={require('./../image/eye_1.png')}/>
        </View>   
        
        <View style={styles_1D.container_btn}>
            <TouchableOpacity >
                <Text style={styles_1D.text_btn} >LOGIN</Text>
            </TouchableOpacity>
        </View> 
        <View style={styles_1D.container_text}>
            <Text>When you agree to terms and conditions</Text>
        </View>
        <View style={styles_1D.container_text}>
            <Text style={styles_1D.text_link}>For got your password</Text>
        </View>
        <View style={styles_1D.container_text}>
            <Text>Or login with</Text>
        </View>
        <View style={styles_1D.container_icon}>
        <View style={styles_1D.image_connect1}>
        <Image  source={require('./../image/facebook.png')}/>
        </View>
        <View style={styles_1D.image_connect3}>
        <Image  source={require('./../image/zalo.png')}/>
        </View>
        <View style={styles_1D.image_connect2}>
        <Image  source={require('./../image/google.png')}/>
        </View>
        </View>
        </ImageBackground>
        </View>
            </>
      );

};
export default Layout_1D;