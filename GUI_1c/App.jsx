import { StyleSheet, Text, View } from 'react-native';
import Layout1C from './src/layout/Layout1c';
export default function App() {
  return (
    <View style={styles.container}>
      <Layout1C/>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    position:'relative',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});