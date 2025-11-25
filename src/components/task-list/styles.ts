import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  textContainer: {
    marginLeft: 12,
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  taskTitleDone: {
    textDecorationLine: "line-through",
    opacity: 0.5,
  },
  taskDescription: {
    fontSize: 12,
    color: "#666",
    marginTop: 2,
  },
});