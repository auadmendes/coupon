import { Text, TouchableWithoutFeedbackProps, View } from "react-native";
import { TouchableWithoutFeedback, TouchableOpacity } from '@gorhom/bottom-sheet'
import { s } from "./styles";
import { categoriesIcons } from "@/utils/categories-icons";
import { colors } from "@/styles/colors";

type Props = TouchableWithoutFeedbackProps & {
    name: string
    iconId: string
    isSelected?: boolean
}

export function Category({ name, iconId, isSelected = false, ...rest }: Props) {
    const Icon = categoriesIcons[iconId]

    return (
        <TouchableOpacity 
        style={[
            s.container, 
            isSelected && s.containerSelected
        ]}
        activeOpacity={0.8}
            {...rest}
        >
            <View style={{flexDirection: "row",  gap: 4}}>
                <Icon color={colors.gray[isSelected ? 100 : 400]} size={16} />
                <Text style={[s.name, isSelected && s.nameSelected]}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}