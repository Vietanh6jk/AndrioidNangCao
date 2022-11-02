import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';

const FadeInView = (props) =>{
  const fadeAnim= useRef(new Animated.Value(0)).current

  useEffect(() =>{
    Animated.timing(
      fadeAnim,{
        toValue:1,
        duration:2000,
        useNativeDriver:true,
      }
    ).start();
  },[fadeAnim])

  return(
    <Animated.View
      style={{
        ...props.style,
        opacity:fadeAnim,
      }}
      >
        {props.children}
      </Animated.View>
  );
}

export default function App() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 150, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Wellcome to Animation React Naitve</Text>
      </FadeInView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
