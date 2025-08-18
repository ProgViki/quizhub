import { Stack } from 'expo-router';
import { useState } from 'react';

// Fake session logic (replace with Firebase later)
const useSession = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return { isLoggedIn, setIsLoggedIn };
};

export default function Layout() {
  // const { isLoggedIn } = useSession();
  // const router = useRouter();
  // const pathname = usePathname();

  // useEffect(() => {
  //   if (!isLoggedIn && pathname !== '/login') {
  //     router.replace('/login');
  //   }
  // }, [isLoggedIn, pathname]);

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}
