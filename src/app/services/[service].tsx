import AirtimeService from '@/src/components/services/AirtimeService';
import CheckinService from '@/src/components/services/CheckinService';
import DataService from '@/src/components/services/DataService';
import DefaultService from '@/src/components/services/DefaultService';
import ElectricityService from '@/src/components/services/ElectricityService';
import FinancialService from '@/src/components/services/FinancialService';
import ReferralService from '@/src/components/services/ReferralService';
import TVService from '@/src/components/services/TVService';
import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';


export default function ServiceScreen() {
  const { service } = useLocalSearchParams();

  const renderService = () => {
    switch(service) {
      case 'airtime':
        return <AirtimeService />;
      case 'data':
        return <DataService />;
      case 'tv':
        return <TVService />;
      case 'electricity':
        return <ElectricityService />;
      case 'refer':
        return <ReferralService />;
      case 'checkin':
        return <CheckinService />;
      case 'finance':
        return <FinancialService />;
      default:
        return <DefaultService />;
    }
  };

  return (
    <View style={styles.container}>
      {renderService()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
});