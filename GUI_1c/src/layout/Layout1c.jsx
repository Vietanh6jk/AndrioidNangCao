import { View, Text,Button,TextInput ,TouchableOpacity} from "react-native";
import React, { useState } from "react";
import { LinearGradient } from 'expo-linear-gradient';
import styles from "../styles/styles1_c";

const Layout1C = () => {
  const [input, setInput] = useState('')
  return (
    <View>
      <LinearGradient
        colors={["#C8EFF1", "#2AF5AE"]}
        style={styles.background}
      />
      <View style={styles.header}>
        <Text style={styles.text_Top}>CODE</Text>
      </View>
     <View style={styles.div_Verification}>
        <Text style={styles.text_Verification}>VERIFICATION</Text>
     </View>
     <View style={styles.p_container}>
     <Text style={styles.Text_p}>Enter ontime password sent on</Text>
     <Text style={styles.Text_p}>+849092605789</Text>
     </View>
     <View style={styles.input_container}>
      <TextInput maxLength={1} style={styles.input_code} />
      <TextInput maxLength={1} style={styles.input_code} />
      <TextInput maxLength={1} style={styles.input_code} />
      <TextInput maxLength={1} style={styles.input_code} />
      <TextInput maxLength={1} style={styles.input_code} />
      <TextInput maxLength={1} style={styles.input_code} />
     </View>
     <TouchableOpacity  style={styles.btn}>
        <Text style={styles.text_btn}>VERIFITY CODE</Text>
     </TouchableOpacity>
    </View>
    
  );
};

export default Layout1C;
