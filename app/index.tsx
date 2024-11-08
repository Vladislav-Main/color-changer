import { StyleSheet, View } from "react-native";
import React from "react";
import HomeScreen from "@/components/home";

const App = () => {
  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default App;
