import React, { useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Text,
} from "react-native";
import Button from "./Button";
import Square from "./Square";

const Definition = ({ navigation, handlerSetTime }) => {
  const [time, setTime] = useState<string | undefined>();

  const myOnPress = () => {
    if (time != "" && time != undefined) {
      handlerSetTime(time);
      setTime("");
      navigation.navigate("Timer");
    }
  };

  const aboutPress = () => {
    navigation.navigate("About")
  }

  return (
    <View style={styles.container}>
      <Square>
        <TextInput
          style={styles.textInputStyle}
          onChangeText={setTime}
          value={time}
          placeholder="Number of minutes to set the timer"
          keyboardType="numeric"
        />

        <Button onPress={myOnPress} width="22%">
          <Text style={styles.buttonText}>SET TIME</Text>
        </Button>
      </Square>

      <Button onPress={aboutPress} width="22%">
        <Text style={styles.buttonText}>About...</Text>
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    justifyContent: 'space-between',
    alignItems: "center",
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
