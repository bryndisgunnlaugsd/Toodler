import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Main() {
    const router = useRouter();
    return (
    <View style={styles.container}>
        <Image style={styles.image} source={require("../../../assets/images/react-logo.png")} />
        <Text style={styles.paragraph}>
        Get More Done!!
        </Text>
        <TouchableOpacity
        onPress={() => router.push("/boards")}
        style={styles.button}
        accessibilityLabel="Go to My Boards"
        accessibilityRole="button">
            <Text style={styles.buttonText}>
                My Boards
            </Text>
        </TouchableOpacity>
    </View>
    
  );

}