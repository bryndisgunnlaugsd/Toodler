import { Board } from "@/src/types/board";
import { Image,View, Text, Pressable, TouchableOpacity } from "react-native";
import styles from "./styles";

interface BoardThumbnailProps{
    board: Board;
    onPress?: () => void;

    menuOpen: boolean;
    onToggleMenu: () => void;
    onEdit: () => void;
    onDelete: () => void;
}

export function BoardThumbnail({ board, onPress, menuOpen, onToggleMenu, onEdit, onDelete }: BoardThumbnailProps) {
    return (
        <View style={styles.shadowWrapper}>
            <Pressable onPress={onPress} style={styles.card}>
                <Image
                    resizeMode="cover"
                    source={{ uri: board.thumbnailPhoto }}
                    style={styles.image}
                />
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{board.name}</Text>
                    <Text style={styles.description}>{board.description}</Text>
                </View>

                {/* Menu wrapper */}
                <View style={styles.menuWrapper}>
                <TouchableOpacity onPress={onToggleMenu} style={styles.menuButton}>
                    <Text style={styles.menuIcon}>⋮</Text>
                </TouchableOpacity>

                {menuOpen && (
                    <View style={styles.menuDropdown}>
                    <TouchableOpacity onPress={onEdit}>
                        <Text style={styles.menuItem}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onDelete}>
                        <Text style={styles.menuItemDelete}>Delete</Text>
                    </TouchableOpacity>
                    </View>
                )}
                </View>
            </Pressable>
        </View>
    );
}