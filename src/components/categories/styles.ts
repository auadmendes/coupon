import { Platform, StyleSheet } from "react-native";

import { colors, fontFamily } from "@/styles/theme"


const containerStyles = {
    marginTop: Platform.OS === "ios" ? 40 : 34,
};

export const s = StyleSheet.create({
    container: {
        maxHeight: 36,
        position: "absolute",
        zIndex: 1,
        ...containerStyles,
    },
    content: {
        gap: 8,
        paddingHorizontal: 24,
        zIndex: 100,
        elevation: 5,
    }
})