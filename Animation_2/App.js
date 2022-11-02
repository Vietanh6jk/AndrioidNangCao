import { StatusBar } from 'expo-status-bar';
import { useRef } from 'react';
import { Animated, Button, PanResponder, StyleSheet, Text, View ,TouchableOpacity} from 'react-native';
export default function App(){
  const ballAnimatedValue = useRef(new Animated.Value(0)).current;

  const moveBall = () => {
    Animated.timing(ballAnimatedValue, {
      toValue: { x: 0, y: 0 },
        velocity: 3,
        friction: 8,
      useNativeDriver: true, 
    }).start();
    
  };

  const xVal = ballAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 250],
  });

  const yVal = ballAnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 350],
  });

  const animStyle = {
    transform: [
      {
        translateY: yVal,
        translateX: xVal,
      },
    ],
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={moveBall}> 
        <Animated.View style={[styles.box, animStyle]}>
          <Text style={styles.text}>+</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: "#61dafb",
    width: 80,
    height: 80,
    borderRadius: 4,
  },
});
