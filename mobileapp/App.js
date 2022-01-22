import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        {/* const CSUlogo = () => (<Image source = {require('./assets/CSU_logo.jpg')}/>) */}
        <Text style={styles.sectionTitle}>Cleveand State Mobile Check-in App
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#69BE28',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
