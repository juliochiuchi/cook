import { Text, View } from "react-native"
import Animated, { SlideInDown, BounceOutDown, } from "react-native-reanimated"
import { Button } from "@/components/Button"
import { MaterialIcons } from "@expo/vector-icons"
import { styles } from "./styles"
import { theme } from "@/theme"

type SelectedProps = {
  quantity: number,
  onClear: () => void,
  onSearch: () => void,
}

export default function Selected({ quantity, onClear, onSearch }: SelectedProps) {
  return (
    <Animated.View
      entering={SlideInDown.duration(500)}
      exiting={BounceOutDown.duration(500)}
      style={styles.container}
    >
      <View style={styles.header}>
        <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
        <MaterialIcons name="close" size={24} onPress={onClear} color={theme.colors.gray_400} />
      </View>

      <Button title="Encontrar" onPress={onSearch} />
    </Animated.View>
  )
}