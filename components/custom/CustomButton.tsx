import {
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";
// import CustomText from "./custom/CustomText";
import { Feather } from "@expo/vector-icons";

type Props = {
  label: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
  type?: "filled " | "outline";
  icon?: any;
  iconSize?: number;
};

export default function CustomButton({
  label,
  onPress,
  loading = false,
  disabled = false,
  type,
  icon,
  iconSize,
}: Props) {
  return (
    <TouchableOpacity
      disabled={loading || disabled}
      style={[
        styles.button,
        (loading || disabled) && styles.disabled,
        type === "outline" && styles.outline,
      ]}
      onPress={onPress}
    >
      {icon && (
        <Feather
          name={icon}
          size={iconSize ?? 16}
          color={type === "outline" ? "#0A96CC" : "#fff"}
        />
      )}
      {loading ? (
        <ActivityIndicator color="#fff" />
      ) : (
        <Text
        //   bold
          style={[styles.label, type === "outline" && styles.labelOutlined]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#0A96CC",
    borderRadius: 75,
    paddingVertical: 10,
    paddingHorizontal: 40,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },

  label: {
    color: "#FFFFFF",
    textAlign: "center",
    fontWeight: 600,
    fontSize: 16,
  },

  labelOutlined: {
    color: "#0A96CC",
  },

  outline: {
    backgroundColor: "#FFFFFF",
    borderColor: "#0A96CC",
    borderWidth: 1,
  },

  disabled: { opacity: 0.5 },
});