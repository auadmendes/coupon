import { FlatList } from "react-native";
import { s } from "./styles";
import { Category } from "../category";

export type CategoriesProps = {
    name: string;
    id: string;
}[]

type Props = {
    data: CategoriesProps
    selected: string
    onSelect: (id: string) => void
}

export function Categories({ data, selected, onSelect }: Props) {
    
    async function handleSelectCategory(id: string) {
        //Alert.alert(`Selecting ${id}`)
        onSelect(id)
    }

    return (
        <FlatList 
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <Category 
                    name={item.name} 
                    iconId={item.id} 
                    //onPress={() => onSelect(item.id)}
                    onPress={() => handleSelectCategory(item.id)}
                    isSelected={item.id === selected}
                    
                />
            )}
            horizontal
            contentContainerStyle={s.content}
            showsHorizontalScrollIndicator={false}
            style={s.container}
        />
    )
}