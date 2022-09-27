import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image, ImageBackground } from 'react-native';
import React, { useContext, useState } from "react";
import StylesSelectColor from '../src/styles/StylesSelectColor';



const SelectColor = () =>{
    const phones=[
        {
            color:'Bạc',
            uri: require('../src/image/phone_bac.png')
        },
        {
            color:'Đỏ',
            uri: require('../src/image/phone_red.png')
        },
        {
            color:'Đen',
            uri: require('../src/image/phone_den.png')
        },
        {
            color:'Xanh',
            uri: require('../src/image/phone_xanh.png')
        }
    ]
    const [image, setImage] = useState(phones[0].uri)
    const [color, setColor] = useState(phones[0].color)
    const handleClick = (id) => {
        setImage(phones[id].uri)
        setColor(phones[id].color)
    }
    return(
    <View>
        <View style={StylesSelectColor.contaier_view1}>
            <Image source={image} style={StylesSelectColor.image_header}/>
            <View style={StylesSelectColor.view_3}>
                <Text style={{fontSize:17}}>Điện thoại Vsmart Joy3</Text>
                <Text style={{fontSize:17}}>Hàng chính hãng</Text>
                <Text style={{fontSize:17}}>Màu:{color}</Text>
                <Text style={{fontSize:17}}>Cung cấp bởi Tiki Trading</Text>
                <Text style={{fontSize:17}}>1.790.000 đ</Text>
            </View>
            
        </View>
        <View style={StylesSelectColor.contaier_view2}>
            <Text style={{fontSize:18,left:20,top:10}}>Chọn một màu bên dưới:</Text>
            <TouchableOpacity style={StylesSelectColor.btn_Bac} onPress={() => handleClick(0)}>
            </TouchableOpacity>
            <TouchableOpacity style={StylesSelectColor.btn_Do} onPress={() => handleClick(1)}>
            </TouchableOpacity>
            <TouchableOpacity style={StylesSelectColor.btn_Den} onPress={() =>handleClick(2)}>    
            </TouchableOpacity>
            <TouchableOpacity style={StylesSelectColor.btn_Xanh} onPress={() =>handleClick(3)}>   
            </TouchableOpacity>

            <TouchableOpacity style={StylesSelectColor.btn_Xong}>
                <Text style={StylesSelectColor.text_Xong}>XONG</Text>   
            </TouchableOpacity>
        </View>
    </View>
   )
}
export default SelectColor;