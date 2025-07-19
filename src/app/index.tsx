import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { COLORS } from '@/src/constants/Colors';
import { AntDesign } from '@expo/vector-icons';

export default function WelcomeScreen() {
  const router = useRouter();

  return (
    <LinearGradient
      colors={[COLORS.primary, '#4285F4']}
      style={styles.container}
    >
      {/* Logo and App Name */}
      <View style={styles.header}>
        {/* <Animated.Image
          entering={FadeInUp.duration(1000).springify()}
          source={require('@/assets/images/scanhubs.png')}
          style={styles.logo}
        /> */}
        <AntDesign name="pay-circle-o1" size={36} color="white" />
        <Animated.Text 
          entering={FadeInUp.delay(200).duration(1000).springify()}
          style={styles.appName}
        >
          ZeePay
        </Animated.Text>
      </View>

      {/* Hero Image */}
      <Animated.View 
        entering={FadeIn.delay(400).duration(1000)}
        style={styles.heroContainer}
      >
        <Image
          source={require('@/assets/images/scanhubs.png')}
          style={styles.heroImage}
        />
      </Animated.View>

      {/* Welcome Text */}
      <Animated.View 
        entering={FadeInDown.delay(600).duration(1000).springify()}
        style={styles.textContainer}
      >
        <Text style={styles.title}>Fast & Secure Payments</Text>
        <Text style={styles.subtitle}>
          Send and receive money, pay bills, and buy airtime all in one place
        </Text>
      </Animated.View>

      {/* Get Started Button */}
      <Animated.View 
        entering={FadeInDown.delay(800).duration(1000).springify()}
        style={styles.buttonContainer}
      >
        <TouchableOpacity 
          style={styles.button}
          onPress={() => router.replace('/(tabs)/home')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </Animated.View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginBottom: 20,
    // marginLeft: 10,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: COLORS.white,
    // marginTop: 10,
  },
  heroContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heroImage: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
    opacity: 0.8,
    maxWidth: 300,
  },
  buttonContainer: {
    width: '100%',
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },
});