import { StyleSheet } from "react-native";

export const makeStyles = (color: string, isDarkColor: boolean) =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: color,
    },
    textContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: { fontSize: 48, color: isDarkColor ? "#FFFFFF" : "#000000" },
  });
