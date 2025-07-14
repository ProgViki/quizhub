import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

const sections = ['isms', 'qms', 'policies', 'saas'];

export default function QuizTab() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Quiz Section</Text>
      {sections.map((sec) => (
        <TouchableOpacity
          key={sec}
          onPress={() => router.push(`/quiz/${sec}`)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>{sec.toUpperCase()}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0a0a0a', padding: 24 },
  title: { color: 'orange', fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  button: {
    backgroundColor: '#1a1a1a',
    padding: 16,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#333',
    alignItems: 'center',
  },
  buttonText: { color: '#ccc', fontSize: 16 },
});
