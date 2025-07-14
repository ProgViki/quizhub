import { useLocalSearchParams, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Result() {
  const { score, total } = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quiz Completed!</Text>
      <Text style={styles.score}>You scored {score} out of {total}</Text>

      <TouchableOpacity onPress={() => router.replace('./index')} style={styles.button}>
        <Text style={styles.btnText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#0a0a0a', flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { color: 'orange', fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  score: { color: '#fff', fontSize: 20, marginBottom: 40 },
  button: { backgroundColor: 'orange', padding: 16, borderRadius: 8 },
  btnText: { color: '#0a0a0a', fontWeight: 'bold', fontSize: 16 },
});
