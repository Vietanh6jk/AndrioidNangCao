import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Layout_1D from './src/layout/Layout_1D';
export default function App() {
  return (
    <View style={styles.container}>
      <Layout_1D />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column',
    flexWrap:'wrap'
  },
});
