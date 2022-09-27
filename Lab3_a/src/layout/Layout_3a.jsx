import { StyleSheet, Text, View,TextInput,TouchableOpacity,Image, ImageBackground } from 'react-native';
import Styles_3a from '../styles/Styles_3a';
import React, { useContext, useState } from "react";

const Layout_3a = () =>{
    const [price, setPrice] = useState(148800)
    const [count, setCount] = useState(1)
    const handleClickCountIncrease = () => {
        const tong= count+1;
        setCount(tong)
        setPrice(148800*tong)
        
    }
    const handleClickCountDecrease = () => {
        const tong= count -1;
        if(count>1){
        setCount(tong)
        setPrice(148800*tong)
        }
    }   
    return(
    <View >
     <View style={Styles_3a.view_header} >
        <Image source={require('../image/book.png')} style={Styles_3a.image_header}/>  
        <Text style={Styles_3a.text_header1}>Nguyên Hàm tích phân và ứng dụng</Text>
        <Text style={Styles_3a.text_header2}>Cung cấp bởi Tiki</Text>
        <Text style={Styles_3a.text_gia1}>{price} đ</Text>
        <Text style={Styles_3a.text_gia2}>141.000 đ</Text>
        <View style={Styles_3a.container_view}>
        <TouchableOpacity onPress={handleClickCountDecrease} style={Styles_3a.text_tru}>
            <Text >-</Text>
        </TouchableOpacity>
        <Text  style={Styles_3a.text_soSP}>{count}</Text>
        <TouchableOpacity onPress={handleClickCountIncrease} style={Styles_3a.text_cong} >
            <Text >+</Text>
        </TouchableOpacity>
        <Text style={Styles_3a.text_muaSau} >Mua sau</Text>
        </View>
        <View style={Styles_3a.container_row}>
        <Text style={Styles_3a.text_maGiam1}>Mã giảm giá đã lưu</Text>
        <Text style={Styles_3a.text_maGiam2}>Xem tại đây</Text>
        </View>
        <View style={Styles_3a.container_row1}>
            <View  style={Styles_3a.container_border_1}>
                <View style={Styles_3a.view_yellow}></View>
                <Text style={Styles_3a.text_maGiam3}>Mã giảm giá</Text>
            </View>
            <TouchableOpacity style={Styles_3a.btn_ApDung} >
                <Text style={Styles_3a.text_ApDung} >Áp dụng</Text>
            </TouchableOpacity>
        </View>
     </View>
     <View style={Styles_3a.container_row2}>
        <Text style={Styles_3a.text_maGiam4}>Bạn có phiếu quà tặng Tiki/Got it/Urbox ?</Text>
        <Text style={Styles_3a.text_maGiam5}>Nhập tại đây?</Text>
     </View>
     <View style={Styles_3a.container_row3}>
        <Text style={Styles_3a.text_tamTinh}>Tạm tính</Text>
        <Text style={Styles_3a.text_tongTien1}>141.800 đ</Text>
     </View>
     <View  style={Styles_3a.container_col4}>
        <View style={Styles_3a.container_row4}>
                <Text style={Styles_3a.text_thanhTien}>Thành tiền</Text>
                <Text style={Styles_3a.text_tongTien2}>141.800 đ</Text>
            </View>
            <TouchableOpacity style={Styles_3a.btn_tienHanhDatHang}>
                <Text style={Styles_3a.text_tienHanhDatHang} >TIẾN HÀNH ĐẶT HÀNG</Text>
            </TouchableOpacity>

     </View>
        
    </View>
    );
};
export default Layout_3a;