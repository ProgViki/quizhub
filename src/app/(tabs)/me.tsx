import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome, Feather } from '@expo/vector-icons';
import { COLORS } from '@/src/constants/Colors';
import { useRouter } from 'expo-router';
import { Alert } from 'react-native';

export default function ProfileScreen() {
  // User data
  const user = {
    name: 'John Doe',
    phone: '+234 812 3456 789',
    email: 'john.doe@example.com',
    balance: '₦45,820.50',
    level: 'Gold Member',
    avatar: require('@/assets/images/scanhubs.png'),
  };

  const router = useRouter();

   const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        {
          text: "Log Out", 
          onPress: () => {
            // Here you would typically clear user session/tokens
            // For example using your auth context or async storage
            
            // Then navigate to welcome page
            router.replace('../index.tsx');
          } 
        }
      ]
    );
  };

  // Account sections
  const accountSections = [
    {
      title: 'My Account',
      items: [
        { icon: 'person-outline', name: 'Personal Information', action: 'personal-info' },
        { icon: 'lock-closed-outline', name: 'Security', action: 'security' },
        { icon: 'card-outline', name: 'Linked Accounts', action: 'linked-accounts' },
      ],
    },
    {
      title: 'Transactions',
      items: [
        { icon: 'receipt-outline', name: 'Transaction History', action: 'transactions' },
        { icon: 'cash-outline', name: 'Payment Methods', action: 'payment-methods' },
      ],
    },
    {
      title: 'Support',
      items: [
        { icon: 'help-circle-outline', name: 'Help Center', action: 'help' },
        { icon: 'chatbubble-outline', name: 'Contact Us', action: 'contact' },
        { icon: 'information-circle-outline', name: 'About Zeepay', action: 'about' },
      ],
    },
  ];

  return (
    <ScrollView style={styles.container}>
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image source={user.avatar} style={styles.avatar} />
          <View style={styles.levelBadge}>
            <Text style={styles.levelText}>{user.level}</Text>
          </View>
        </View>
        
        <Text style={styles.userName}>{user.name}</Text>
        <Text style={styles.userInfo}>{user.phone}</Text>
        <Text style={styles.userInfo}>{user.email}</Text>
        
        <View style={styles.balanceContainer}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>{user.balance}</Text>
        </View>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <MaterialIcons name="payment" size={24} color={COLORS.primary} />
          </View>
          <Text style={styles.actionText}>Top Up</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <FontAwesome name="bank" size={20} color={COLORS.primary} />
          </View>
          <Text style={styles.actionText}>Withdraw</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.actionIcon}>
            <Feather name="share-2" size={20} color={COLORS.primary} />
          </View>
          <Text style={styles.actionText}>Transfer</Text>
        </TouchableOpacity>
      </View>

      {/* Account Sections */}
      {accountSections.map((section, sectionIndex) => (
        <View key={sectionIndex} style={styles.section}>
          <Text style={styles.sectionTitle}>{section.title}</Text>
          
          {section.items.map((item, itemIndex) => (
            <TouchableOpacity 
              key={itemIndex} 
              style={[
                styles.menuItem,
                itemIndex === section.items.length - 1 && styles.lastMenuItem
              ]}
              onPress={() => console.log(`Navigate to ${item.action}`)}
            >
              <View style={styles.menuItemLeft}>
                <Ionicons name={item.icon as any} size={22} color={COLORS.primary} />
                <Text style={styles.menuItemText}>{item.name}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color={COLORS.gray} />
            </TouchableOpacity>
          ))}
        </View>
      ))}

      {/* Logout Button */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText} onPress={handleLogout}>Log Out</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
  },
  profileHeader: {
    backgroundColor: COLORS.primary,
    padding: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  levelBadge: {
    position: 'absolute',
    bottom: -5,
    right: -5,
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  levelText: {
    color: COLORS.primary,
    fontSize: 12,
    fontWeight: 'bold',
  },
  userName: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  userInfo: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: 3,
  },
  balanceContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    marginBottom: 5,
  },
  balanceAmount: {
    color: COLORS.white,
    fontSize: 24,
    fontWeight: 'bold',
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
    padding: 15,
    margin: 15,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  actionButton: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    backgroundColor: COLORS.secondary,
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    color: COLORS.black,
    fontWeight: '500',
  },
  section: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    marginHorizontal: 15,
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.black,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.lightGray,
  },
  lastMenuItem: {
    borderBottomWidth: 0,
  },
  menuItemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuItemText: {
    fontSize: 15,
    color: COLORS.black,
    marginLeft: 15,
  },
  logoutButton: {
    backgroundColor: COLORS.white,
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  logoutText: {
    // color: COLORS.danger,
    fontSize: 16,
    fontWeight: '500',
  },
});