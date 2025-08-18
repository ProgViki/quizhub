import { Feather } from "@expo/vector-icons";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
// import CustomText from "./custom/CustomText";

type Props = {
  label: string;
  isRequired?: boolean;
  fontSize?: number;
};

const CustomLabel = (props: Props) => {
  return (
    <View style={styles.container}>
      {/* <CustomText style={[styles.label, { fontSize: props.fontSize ?? 12 }]}> */}
      <Text>
        {props.label}
      </Text>
      {/* </CustomText> */}
      {props.isRequired && <Text style={styles.required}>*</Text>}
    </View>
  );
};

export default CustomLabel;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 2,
  },

  label: {
    fontSize: 12,
    color: "gray",
  },

  required: {
    color: "red",
  },
});