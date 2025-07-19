// Example: app/(tabs)/rewards/index.tsx
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '@/constants/colors';

export default function MeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rewards Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    color: COLORS.primary,
  },
});