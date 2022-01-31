import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola, Coder! 😄 </Text>
      <Text style={styles.red}>¡Soy José! </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
    textDecorationColor: "#fff"
  },
  text: {
    color: '#41cdf4',
  },
  red:{
    color: "red",
  },
});
