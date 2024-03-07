import { Alert, ScrollView } from "react-native"
import { Ingredient } from "@/components/Ingredient"
import { styles } from "./styles"
import React, { useEffect, useState } from "react"
import Selected from "@/components/Selected"
import { router } from "expo-router"
import { services } from "@/services"

export function ListIngredients() {
  const [selected, setSelected] = useState<string[]>([])
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])

  const handleToggleSelected = (value: string) => {
    if (selected.includes(value))
      return setSelected((state) => state.filter((item) => item !== value))

    setSelected((state) => [...state, value])
  }

  const handleClearSelected = () => {
    Alert.alert("Limpar", "Deseja limpar tudo?",
      [
        { text: "Não", style: "cancel", },
        { text: "Sim", onPress: () => setSelected([]) }
      ]
    )
  }

  const handleSearch = () => {
    router.navigate("/recipes/" + selected)
  }

  useEffect(() => {
    services.ingredients.findAll()
    .then(setIngredients)
    .catch((error: any) => { throw error })
  }, [])

  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.container}>
        {
          ingredients.map((item) => (<Ingredient
            key={item.id}
            name={item.name}
            image={`${services.storage.imagePath}/${item.image}`}
            selected={selected.includes(String(item.id))}
            onPress={() => handleToggleSelected(String(item.id))}
          />))
        }
      </ScrollView>

      {
        selected.length > 0 && (
          <Selected
            quantity={selected.length}
            onClear={handleClearSelected}
            onSearch={handleSearch}
          />
        )}
    </>
  )
}
