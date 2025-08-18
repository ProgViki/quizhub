import React, { Fragment } from "react";
import {
  Control,
  Controller,
  FieldValues,
  RegisterOptions,
} from "react-hook-form";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from "react-native";
import CustomLabel from "./CustomLabel";

type Props = {
  control: Control<FieldValues, any>;
  name: string;
  label: string;
  placeholder: string;
  secureTextEntry?: boolean;
  rules?: Omit<
    RegisterOptions<FieldValues, string>,
    "disabled" | "valueAsNumber" | "valueAsDate" | "setValueAs"
  >;
  keyboardType?: KeyboardTypeOptions;
  isRequired?: boolean;
};

const CustomInput = ({
  isRequired,
  name,
  label,
  control,
  rules = {},
  placeholder,
  keyboardType,
  secureTextEntry = false,
}: Props) => {
  return (
    <View style={styles.container}>
      <CustomLabel isRequired={isRequired} label={label} fontSize={14} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field, fieldState }) => (
          <Fragment>
            <View
              style={[
                styles.inputContainer,
                { borderColor: fieldState.error ? "red" : "#e8e8e8" },
              ]}
            >
              <TextInput
                keyboardType={keyboardType}
                value={field.value}
                onChangeText={field.onChange}
                placeholder={placeholder}
                style={[styles.input]}
                secureTextEntry={secureTextEntry}
                placeholderTextColor={"#888"}
              />
            </View>
            {fieldState.error && (
              <Text style={{ color: "red", alignSelf: "stretch" }}>
                {fieldState.error.message || "Error"}
              </Text>
            )}
          </Fragment>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5,
  },

  label: {
    fontSize: 16,
    fontWeight: 400,
    color: "#444547",
  },

  inputContainer: {
    backgroundColor: "transparent",
    width: "100%",
    borderWidth: 1,
    borderRadius: 30,
    paddingHorizontal: 8,
    marginVertical: 2,
  },

  input: {
    padding: 10,
    borderRadius: 30,
    overflow: "hidden",
    fontFamily: "Regular",
  },
});

export default CustomInput;