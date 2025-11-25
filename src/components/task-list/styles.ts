import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },

  row: {
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    paddingVertical: 14,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },

  textContainer: {
    marginLeft: 14,
    flex: 1,
  },

  taskTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#222",
  },

  taskTitleDone: {
    textDecorationLine: "line-through",
    color: "#999",
  },

  taskDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 3,
    lineHeight: 20,
  },
  textPressable: {
   marginLeft: 14,
   flex: 1,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    color: "#888",
  },
});