import { Stack } from 'expo-router';
// import { COLORS } from '@/src/constants/colors';

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }} 
      />
    </Stack>
  );
}