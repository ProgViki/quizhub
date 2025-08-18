import { Feather } from "@expo/vector-icons";
import React, { ReactNode, useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";

type Props = {
  placeholder?: string | undefined;
  handleSearch: (text: string) => void;
  searchValue?: string;
};

const Filters = (props: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <View>
      <View style={styles.searchWrapper}>
        <TextInput
          onFocus={() => setIsHovered(true)}
          onBlur={() => setIsHovered(false)}
          placeholder={props.placeholder ?? "Search..."}
          placeholderTextColor={"#888"}
          style={[styles.textInput, isHovered && styles.hovered]}
          onChange={(event) => props.handleSearch(event.nativeEvent.text)}
          keyboardType={"default"}
          value={props.searchValue}
        />
        <Feather
          style={[styles.searchIcon, { color: isHovered ? "#0a96cc" : "#888" }]}
          name="search"
        />
      </View>
    </View>
  );
};

export default Filters;

const styles = StyleSheet.create({
  searchWrapper: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  searchIcon: {
    position: "absolute",
    left: 10,
    color: "#777",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 50,
    paddingInline: 10,
    paddingLeft: 30,
    width: "100%",
    fontFamily: "Regular",
    color: "black",
    justifyContent: "center",
    alignItems: "center",
    fontSize: 12,
  },

  hovered: {
    borderColor: "#0a96cc",
  },
});