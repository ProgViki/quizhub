import { Stack } from 'expo-router';

export default function QuizStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0a0a0a' },
        headerTintColor: 'orange',
      }}
    />
  );
}
