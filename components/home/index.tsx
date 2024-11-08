import {
  Pressable,
  View,
  Text,
  NativeSyntheticEvent,
  NativeTouchEvent,
} from "react-native";
import { setStatusBarStyle, StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { makeStyles } from "./styles";
import { getRandomColor } from "@/utilize/getRandomColor";
import { isDarkColor } from "@/utilize/isDarkColor";

const HomeScreen = () => {
  const [color, setColor] = useState<string>(() => getRandomColor());
  const styles = makeStyles(color, isDarkColor(color));

  useEffect(() => {
    setStatusBarStyle(isDarkColor(color) ? "light" : "dark");
  }, [color]);

  const rippleX = useSharedValue(0);
  const rippleY = useSharedValue(0);
  const rippleScale = useSharedValue(0);
  const rippleOpacity = useSharedValue(0);

  const handleColorChange = (event: NativeSyntheticEvent<NativeTouchEvent>) => {
    const newColor = getRandomColor();
    setColor(newColor);

    const { locationX, locationY } = event.nativeEvent;
    rippleX.value = locationX;
    rippleY.value = locationY;

    rippleOpacity.value = 1;
    rippleScale.value = 0;
    rippleScale.value = withTiming(3, { duration: 500 });
    rippleOpacity.value = withTiming(0, { duration: 500 });
  };

  const rippleStyle = useAnimatedStyle(() => ({
    position: "absolute",
    top: rippleY.value - 50,
    left: rippleX.value - 50,
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: "#ffffff4d",
    transform: [{ scale: rippleScale.value }],
    opacity: rippleOpacity.value,
  }));

  return (
    <Pressable style={styles.container} onPress={handleColorChange}>
      <StatusBar />
      <Animated.View style={rippleStyle} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Hello there</Text>
      </View>
    </Pressable>
  );
};

export default HomeScreen;
