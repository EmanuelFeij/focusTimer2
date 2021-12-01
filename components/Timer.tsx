import React, { useState, useEffect, useRef } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import CountDown from "react-native-countdown-component";
import { Audio } from "expo-av";
import Button from "./Button";
import Square from "./Square";

const Timer = ({ navigation, time }) => {
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [sound, setSound] = useState<Audio.Sound>();
  const [reset, setReset] = useState<boolean>(false);

  const fadeAnim = useRef(new Animated.Value(1)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 3 seconds
    if (isRunning) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start(({}) => {
        fadeOut();
      });
    }
  };

  const fadeOut = () => {
    if (isRunning) {
      // Will change fadeAnim value to 0 in 3 seconds
      Animated.timing(fadeAnim, {
        toValue: 0.5,
        duration: 3000,
        useNativeDriver: true,
      }).start(({}) => {
        fadeIn();
      });
    }
  };

  const onReset = () => {
    setReset(true);
    navigation.navigate("Set Up");
  };

  const playSound = async () => {
    console.log("playing sound");
    await sound.playAsync();
  };

  async function loadSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/sound/dong.wav")
    );
    setSound(sound);
  }

  useEffect(() => {
    console.log("loadSound");
    loadSound();

    return () => {
      console.log("unload Sound");
      sound.unloadAsync();
    };
  }, [reset]);

  return (
    <View>
      <Square>
        <Text>Time to focus</Text>
        <Animated.View
          style={{
            // Bind opacity to animated value

            opacity: fadeAnim,
          }}
        >
          <CountDown
            until={time}
            onFinish={() => {
              playSound();
            }}
            onPress={() => {
              setIsRunning(!isRunning);
              fadeOut();
            }}
            size={30}
            digitStyle={{ backgroundColor: "black" }}
            digitTxtStyle={{ color: "white" }}
            timeToShow={["H", "M", "S"]}
            running={isRunning}
            timeLabels={{ m: null, s: null }}
          />
        </Animated.View>
        <Button
          onPress={() => {
            setIsRunning(!isRunning);
          }}
          width="17%"
        >
          <Text style={styles.button}> {isRunning ? "Pause" : "Start"}</Text>
        </Button>

        <Button onPress={onReset} width="17%">
          <Text style={styles.button}> Reset</Text>
        </Button>
      </Square>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderWidth: 3,
    borderRadius: 50,
    marginLeft: "5%",
    marginRight: "5%",
    marginTop: "20%",
    width: "90%",
    height: "80%",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    color: "white",
  },
});

export default Timer;
