// import CustomText from "@/src/components/custom/CustomText";
// import CustomButton from "@/src/components/CustomButton";
// import LoadingScreen from "@/src/components/LoadingScreen";
// import useSetAuthUser from "@/src/hooks/useSetAuthUser";
import CustomButton from "@/components/custom/CustomButton";
import { router } from "expo-router";
// import * as SecureStore from "expo-secure-store";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

export default function ProfilePage() {
//   const { userData: user, isLoading: loading } = useSetAuthUser();

//   if (loading) {
//     return <LoadingScreen />;
//   }

  const handleLogout = async () => {
    try {
    //   await SecureStore.deleteItemAsync("token");
      router.replace("./index");
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

//   const fullName = user?.staff?.name;

  // Function to generate initials from the full name
  const getInitials = (name: string) => {
    return name
      ?.split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <View style={styles.parentContainer}>
      <View style={styles.scrollContent}>
        <View style={styles.profileHeader}>
          <View style={styles.initialsContainer}>
            <Text style={styles.initialsText}>
              {getInitials("Victor Oluwaseun")}
              
            </Text>
          </View>
          <Text style={styles.username}>
            {/* {fullName} */}
            Victor Oluwaseun
          </Text>
          <Text style={styles.email}>
            {/* {user?.email} */}
            </Text>
        </View>

        <CustomButton
          icon="arrow-right-circle"
          type="outline"
          onPress={handleLogout}
          label="Logout"
        />
      </View>
    </View>
  );
}

const { height } = Dimensions.get("window");

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },

  scrollContent: {
    // flexGrow: 1,
    justifyContent: "space-between",
    paddingBlock: 120,
    paddingTop: 50,
    alignItems: "center",
    paddingInline: 12,
    height: "100%",
    borderRadius: 20,
    backgroundColor: "#fff",
    shadowColor: "lightgray",
    shadowOpacity: 1,
    shadowRadius: 110,
  },

  profileContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  profileHeader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 30,
  },

  initialsContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#DAEFF7",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },

  initialsText: {
    color: "#0A96CC",
    fontSize: 36,
  },
  username: {
    fontSize: 20,
    color: "#333",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  customer: {
    fontSize: 14,
    color: "#666",
  },
});