import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import CountDown from "react-native-countdown-component";
import { Audio } from "expo-av";

const Timer = ({navigation,  time }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [reset, setReset] = useState<boolean>(false)

  const onReset = () => {
    setReset(true);
    navigation.navigate('Set Up')
  }

  const playSound = async () => {
    console.log("playing sound")
    await sound.playAsync();

  };

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/dong.wav")
    );
    setSound(sound);
  }

  useEffect(() => {
    console.log('loadSound')
    loadSound()

    return () => {
      console.log("unload Sound");
      sound.unloadAsync();
      
    };
  }, [reset]);

  return (
    <View>
      <CountDown
        until={time}
        onFinish={() => playSound()}
        onPress={() => setIsRunning(!isRunning)}
        size={30}
        digitStyle={{ backgroundColor: "cyan" }}
        timeToShow={["H", "M", "S"]}
        timeLabelStyle={{ color: "black", fontWeight: "bold" }}
        running={isRunning}
      />

      <TouchableOpacity onPress={onReset}>
        <Text> RESET</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '80%',
    backgroundColor: "blue",
  },
});

export default Timer;
