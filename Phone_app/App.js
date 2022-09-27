import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeSreeen from './screen/HomeSreen';
import SelectColor from './screen/SelectColor';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeSreeen/> */}
      <SelectColor/>
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
