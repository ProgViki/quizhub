import { View, ScrollView, Text, StyleSheet } from 'react-native';
import BalanceCard from '@/src/components/BalanceCard';
import QuickActions from '@/src/components/QuickActions';
import ServicesGrid from '@/src/components/ServicesGrid';
import { COLORS } from '@/src/constants/Colors';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      {/* Balance Card */}
      <BalanceCard balance="₦25,000.00" />

      {/* Quick Actions */}
      <QuickActions />

      {/* Services Grid */}
      <ServicesGrid />

      {/* Transaction History */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transaction History</Text>
        {/* Transaction list would go here */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    padding: 16,
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.black,
  },
});