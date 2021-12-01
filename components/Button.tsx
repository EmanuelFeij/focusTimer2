import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ onPress, children, width}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.button, width: width}}>
      {children}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "black",
    alignItems: "center",
  },
});
