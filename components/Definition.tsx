import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from "react-native";

const Definition = ({ navigation, handlerSetTime }) => {
  const [time, setTime] = useState<string | undefined>();

  const myOnPress = () => {
    if (time != "" && time != undefined) {
      handlerSetTime(time);
      setTime('');
      navigation.navigate('Timer')
    }
  };

  return (
    <View style={styles.mainContainer}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={setTime}
        value={time}
        placeholder="Number of minutes to set the timer"
        keyboardType="numeric"
      />

      <TouchableOpacity onPress={myOnPress} style={styles.button}>
        <Text style={styles.buttonText}> SET TIME</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
      height: '80%',
    justifyContent: "space-around",
    alignItems: "center",
  },
  button: {
    borderWidth: 1,
    borderColor: "cyan",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "cyan",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
  textInputStyle: {
    borderWidth: 1,
    borderColor: "lightgray",
    padding: 10,
    borderRadius: 10,
  },
});

export default Definition;
