import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { COLORS } from '@/constants/colors';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function CheckinService() {
  const [checkedInToday, setCheckedInToday] = useState(false);
  const [streakDays, setStreakDays] = useState(3);
  const [totalPoints, setTotalPoints] = useState(450);

  const handleCheckin = () => {
    if (!checkedInToday) {
      setCheckedInToday(true);
      setStreakDays(streakDays + 1);
      setTotalPoints(totalPoints + 10);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Check-in</Text>
      
      <View style={styles.checkinCard}>
        <Image 
          source={require('@/assets/images/checkin-reward.png')} 
          style={styles.checkinImage}
        />
        
        <Text style={styles.checkinTitle}>
          {checkedInToday ? 'Checked In Today!' : 'Check-in to Earn Points'}
        </Text>
        
        <Text style={styles.checkinText}>
          {checkedInToday 
            ? 'You earned 10 points today!'
            : 'Check-in daily to earn points and increase your streak'}
        </Text>
        
        <TouchableOpacity 
          style={[
            styles.checkinButton,
            checkedInToday && styles.checkedInButton
          ]}
          onPress={handleCheckin}
          disabled={checkedInToday}
        >
          <Text style={styles.checkinButtonText}>
            {checkedInToday ? 'Checked In' : 'Check-in Now'}
          </Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{streakDays}</Text>
          <Text style={styles.statLabel}>Day Streak</Text>
        </View>
        
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{totalPoints}</Text>
          <Text style={styles.statLabel}>Total Points</Text>
        </View>
      </View>
      
      <View style={styles.rewardsContainer}>
        <Text style={styles.sectionTitle}>Check-in Rewards</Text>
        
        <View style={styles.rewardsGrid}>
          {[1, 2, 3, 4, 5, 6, 7].map((day) => (
            <View key={day} style={styles.rewardDay}>
              <View style={[
                styles.rewardCircle,
                day <= streakDays % 7 && styles.rewardCircleActive
              ]}>
                {day <= streakDays % 7 && (
                  <Ionicons name="checkmark" size={16} color={COLORS.white} />
                )}
              </View>
              <Text style={styles.rewardDayText}>Day {day}</Text>
              <Text style={styles.rewardPoints}>+{day * 5} pts</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: COLORS.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: COLORS.black,
  },
  checkinCard: {
    backgroundColor: COLORS.secondary,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  checkinImage: {
    width: 120,
    height: 120,
    marginBottom: 15,
  },
  checkinTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color: COLORS.black,
  },
  checkinText: {
    fontSize: 14,
    color: COLORS.black,
    marginBottom: 20,
    textAlign: 'center',
  },
  checkinButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 8,
    padding: 15,
    width: '100%',
    alignItems: 'center',
  },
  checkedInButton: {
    backgroundColor: COLORS.gray,
  },
  checkinButtonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    width: '48%',
    backgroundColor: COLORS.secondary,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.primary,
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: COLORS.gray,
  },
  rewardsContainer: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 15,
    color: COLORS.black,
  },
  rewardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  rewardDay: {
    width: '30%',
    alignItems: 'center',
    marginBottom: 15,
  },
  rewardCircle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.lightGray,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  rewardCircleActive: {
    backgroundColor: COLORS.primary,
  },
  rewardDayText: {
    fontSize: 12,
    color: COLORS.black,
    marginBottom: 3,
  },
  rewardPoints: {
    fontSize: 10,
    color: COLORS.primary,
    fontWeight: '500',
  },
});