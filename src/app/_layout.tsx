import { Slot, Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

// import { COLORS } from '@/src/constants/colors';

export default function RootLayout() {
  return (
     <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
}