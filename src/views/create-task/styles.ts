import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 28,
    paddingTop: 80,
  },
  title: {
    fontSize: 26,
    fontWeight: "800",
    textAlign: "center",
    marginBottom: 40,
  },
  section: {
    marginBottom: 28,
  },
  label: {
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 10,
  },
  input: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    backgroundColor: "#F7F8FA",
    paddingHorizontal: 14,
    paddingVertical: 10,
    fontSize: 16,
  },
  colorsRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  colorSwatch: {
    width: 44,
    height: 44,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  colorSwatchSelected: {
    borderWidth: 2,
    borderColor: "#222",
  },
  check: {
    fontSize: 20,
  },
  buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },
  button: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    elevation: 4,
  },
  buttonLight: {
    backgroundColor: "#E9EDF5",
    marginRight: 10,
  },
  buttonGrey: {
    backgroundColor: "#E0E0E0",
    marginLeft: 10,
  },
  buttonTextDark: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
});