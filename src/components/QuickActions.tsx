import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '../constants/Colors';

const actions = [
  { icon: 'arrow-redo', label: 'To Opay', screen: 'transfer/opay' },
  { icon: 'business', label: 'To Bank', screen: 'transfer/bank' },
  { icon: 'cash', label: 'Withdraw', screen: 'withdraw' },
];

export default function QuickActions() {
  return (
    <View style={styles.container}>
      {actions.map((action, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.actionItem}
          onPress={() => console.log('Navigate to', action.screen)}
        >
          <View style={styles.iconContainer}>
            <Ionicons 
              name={(action.icon) as any} 
              size={24} 
              color={COLORS.primary} 
            />
          </View>
          <Text style={styles.label}>{action.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  iconContainer: {
    backgroundColor: COLORS.secondary,
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '500',
  },
});