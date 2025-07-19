import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/Colors';

const services = [
  { icon: 'phone-portrait-outline', label: 'Airtime', screen: 'airtime' },
  { icon: 'wifi-outline', label: 'Data', screen: 'data' },
  { icon: 'tv-outline', label: 'TV', screen: 'tv' },
  { icon: 'bulb-outline', label: 'Electricity', screen: 'electricity' },
  { icon: 'gift-outline', label: 'Refer & Earn', screen: 'refer' },
  { icon: 'location-outline', label: 'Check-in', screen: 'checkin' },
  { icon: 'grid-outline', label: 'More', screen: 'more' },
];

export default function ServicesGrid() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Other Payments</Text>
      <FlatList
        data={services}
        numColumns={4}
        scrollEnabled={false}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.serviceItem}
            onPress={() => console.log('Navigate to', item.screen)}
          >
            <View style={styles.iconContainer}>
              <Ionicons 
                name={(item.icon) as any} 
                size={24} 
                color={COLORS.primary} 
              />
            </View>
            <Text style={styles.label}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: 16,
  },
  serviceItem: {
    flex: 1,
    alignItems: 'center',
    marginBottom: 16,
    minWidth: '25%',
    maxWidth: '25%',
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
    textAlign: 'center',
    fontWeight: '500',
  },
});