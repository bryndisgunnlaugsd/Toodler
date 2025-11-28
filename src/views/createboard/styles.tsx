import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        color: "black",
        flexGrow: 1,
        paddingHorizontal:28,
        paddingTop:40,
        backgroundColor: "white"
    },

    iconLayout: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },

    title: {
        fontSize:26,
        fontWeight:"800",
        textAlign:"center",
        marginBottom:40,
    },

    section:{
        marginBottom:28,
    },

    label: {
        fontSize:16,
        fontWeight:"700",
        marginBottom:10,
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

    buttonsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    marginBottom: 60,
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

    cameraContainer: {
      width: "100%",
      height: 350,
      marginTop: 20,
      borderRadius: 12,
      overflow: "hidden",
      position: "relative",
  },
  photoInputText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#000",
    marginLeft: 10,
    },

  camera: {
      flex: 1,
  },

  closeCamera: {
      position: "absolute",
      top: 10,
      right: 10,
      backgroundColor: "rgba(0,0,0,0.6)",
      padding: 8,
      borderRadius: 20,
  },

  cameraIcon: {
    fontSize: 24,
    marginVertical: 10,
    marginRight:15,
  },

  shutterButton: {
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    backgroundColor: "white",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  photoPreviewContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  photoPreview: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginTop: 10,
  },

  photoLibrary: {
    fontSize: 24,
    marginVertical: 10,
    marginRight:15,
  }

});