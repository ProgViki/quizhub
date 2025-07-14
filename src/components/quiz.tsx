import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

export default function QuizScreen() {
  const features = [
    { icon: <MaterialIcons name="quiz" size={20} color="orange" />, label: 'Monthly & Quarterly Quizzes' },
    { icon: <FontAwesome5 name="lock" size={20} color="orange" />, label: 'ISMS & Cybersecurity Awareness' },
    { icon: <FontAwesome5 name="check-circle" size={20} color="orange" />, label: 'QMS & Company Policies' },
    { icon: <MaterialIcons name="insights" size={20} color="orange" />, label: 'SaaS Product Familiarization' },
    { icon: <Ionicons name="stats-chart" size={20} color="orange" />, label: 'Score & Progress Tracking' },
    { icon: <MaterialIcons name="admin-panel-settings" size={20} color="orange" />, label: 'Admin Management (coming soon)' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Welcome to the Employee Quiz App</Text>
      {features.map((item, index) => (
        <View key={index} style={styles.featureRow}>
          {item.icon}
          <Text style={styles.featureText}>{item.label}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0a0a0a',
    padding: 24,
    flexGrow: 1,
  },
  heading: {
    color: 'orange',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  featureText: {
    color: '#ccc',
    fontSize: 16,
    marginLeft: 10,
  },
});
