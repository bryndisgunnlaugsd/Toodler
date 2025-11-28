import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 32,
  },

  title: {
    fontSize: 28,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 32,
    color: "#000000",
  },

  formBlock: {
    marginBottom: 24,
  },

  label: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
    marginBottom: 8,
  },

  input: {
    height: 52,
    borderRadius: 18,
    paddingHorizontal: 16,
    backgroundColor: "#F3F4F6",
    borderWidth: 1,
    borderColor: "#E5E7EB",
    fontSize: 16,
  },

  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 16,
    marginTop: 28,
  },

  button: {
    flex: 1,
    height: 56,
    borderRadius: 18,
    justifyContent: "center",
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 8,
  },

  buttonLight: {
    backgroundColor: "#EEF3FF",
  },

  buttonGrey: {
    backgroundColor: "#E5E5EA",
  },

  buttonTextDark: {
    fontSize: 16,
    fontWeight: "600",
    color: "#111111",
  },

  listPickerButton: {
    marginTop: 8,
    borderRadius: 16,
    backgroundColor: "#f3f3f5",
    paddingVertical: 12,
    paddingHorizontal: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  listPickerButtonText: {
    fontSize: 16,
    textAlign: "center",
    color: "#111",
  },
  listPickerList: {
    backgroundColor: "#fff",
    borderRadius: 16,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 2,
  },
  listPicker: {
    marginTop: 8,
  },
  listPickerItem: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  listPickerItemText: {
    fontSize: 16,
    textAlign: "center",
    color: "#111",
  },
  listPickerItemTextActive: {
    fontWeight: "700",
  },

});
