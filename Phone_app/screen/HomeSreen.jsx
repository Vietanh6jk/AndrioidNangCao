import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image, ImageBackground } from 'react-native';
import React, { useContext, useState } from "react";
import StylesHome from '../src/styles/StylesHome';

const HomeSreeen = () =>{
    return(
    <View>
        <View style={StylesHome.contaier_view1}>
            <Image source={require('../src/image/phone_xanh.png')} style={StylesHome.Image_phoneXanh}/>
        </View>
        <View style={StylesHome.contaier_view2}>
            <Text style={StylesHome.text_1}>Điện thoạt Vsmart Joy3-Hàng Chính Hãng</Text>
            <View style={StylesHome.view_row}>
                <Image source={require('../src/image/Star.png')}/>
                <Image source={require('../src/image/Star.png')}/>
                <Image source={require('../src/image/Star.png')}/>
                <Image source={require('../src/image/Star.png')}/>
                <Image source={require('../src/image/Star.png')}/>
                <Text style={{left:60}}>(Xem 828 đánh giá)</Text>
            </View>
            <View style={StylesHome.view_row}>
                <Text style={StylesHome.text_gia1}>1.790.000 đ</Text>
                <Text style={StylesHome.text_gia2}>1.790.000 đ</Text>
            </View>
            <View style={StylesHome.view_row}>
                <Text style={StylesHome.text_3} >Ở ĐÂU RẺ HƠN HOÀN TIỀN </Text>
                <Image source={require('../src/image/Hoi.png')}/>
            </View>
           <TouchableOpacity style={StylesHome.btn_chonMau}>
                <Text style={{fontSize:15}}>4 MÀU-CHỌN MÀU</Text>
           </TouchableOpacity>
        </View>
        <View style={StylesHome.contaier_view3}>
            <TouchableOpacity style={StylesHome.btn_chonMua}>
                <Text style={StylesHome.text_chonMua} >CHỌN MUA</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

export default HomeSreeen;