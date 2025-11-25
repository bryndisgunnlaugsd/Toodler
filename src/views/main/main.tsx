import { useRouter } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

export function Main() {
    const router = useRouter();
    
    const logoScale = useRef(new Animated.Value(0.5)).current;
    const logoOpacity = useRef(new Animated.Value(1)).current;
    const buttonOpacity = useRef(new Animated.Value(0)).current;
    const buttonScale = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.spring(logoScale, {
                toValue: 1,
                useNativeDriver: true,
            }),
            Animated.delay(300),
            Animated.timing(buttonOpacity, {
                toValue: 1,
                duration: 600,
                useNativeDriver: true,
            }),
        ]).start();
    }, []);

    const handlePress = () => {
        router.push("/boards");
    };

    const handlePressIn = () => {
        Animated.spring(buttonScale, {
            toValue: 0.95,
            useNativeDriver: true,
        }).start();
    };

    const handlePressOut = () => {
        Animated.spring(buttonScale, {
            toValue: 1,
            useNativeDriver: true,
        }).start();
    };

    return (
        <View style={styles.container}>
            <Animated.Image
                style={[
                    styles.image,
                    {
                        opacity: logoOpacity,
                        transform: [{ scale: logoScale }],
                    },
                ]}
                source={require("../../../assets/images/toodler_logo.png")}
            />
            
            <Animated.View style={{ opacity: buttonOpacity, transform: [{ scale: buttonScale }] }}>
                <TouchableOpacity
                    onPress={handlePress}
                    onPressIn={handlePressIn}
                    onPressOut={handlePressOut}
                    style={styles.button}
                    accessibilityLabel="Go to My Boards"
                    accessibilityRole="button"
                    activeOpacity={1}>
                    <Text style={styles.buttonText}>My Boards</Text>
                </TouchableOpacity>
            </Animated.View>
        </View>
    );
}