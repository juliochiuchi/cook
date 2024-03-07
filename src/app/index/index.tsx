import { View, Text, StatusBar } from "react-native"
import { styles } from "./styles"
import { ListIngredients } from "@/components/ListIngredients"
import React from "react"

export default function Index() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} translucent={true} />
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>Descubra receitas baseada nos produtos que você escolheu.</Text>

      <ListIngredients />
    </View >
  )
}
