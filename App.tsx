import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Timer from "./components/Timer";
import Definition from "./components/Definition";
import About from "./components/About";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

const INITIAL_TIME = 3600;

export default function App() {
  const [time, setTime] = useState<number>(INITIAL_TIME);

  const handlerSetTime = (number: number) => setTime(number * 60);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Set Up" screenOptions={{}}>
        <Stack.Screen name="Set Up">
          {(props) => <Definition {...props} handlerSetTime={handlerSetTime} />}
        </Stack.Screen>

        <Stack.Screen name="Timer">
          {(props) => <Timer {...props} time={time} />}
        </Stack.Screen>
        <Stack.Screen name="About">
          {(props) => <About {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
