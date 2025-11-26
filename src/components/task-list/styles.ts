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

  taskMenuWrapper: {
    marginLeft: 8,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  taskMenuButton: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  taskMenuIcon: {
    fontSize: 18,
  },
  taskMenu: {
    marginTop: 4,
    backgroundColor: "#FFFFFF",
    borderRadius: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  taskMenuItem: {
    paddingVertical: 4,
    fontSize: 14,
    color: "#111",
  },
  taskMenuItemDelete: {
    paddingVertical: 4,
    fontSize: 14,
    color: "#D11A2A",
  },
  taskRowActive: {
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
    elevation: 2,
  },
  swipeDelete: {
    flex: 1,                      
    backgroundColor: "#ff3b30",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingHorizontal: 24,
    marginBottom: 12,
    borderRadius: 16,
  },

  swipeDeleteText: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});