import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";

import { router, useLocalSearchParams } from "expo-router";
import { FlatList, StatusBar, Text, View } from "react-native";
import { Recipe } from "@/components/Recipe";
import { useEffect, useState } from "react";
import { services } from "@/services";
import { Ingredients } from "@/components/Ingredients";

export default function Recipes() {
  const [ingredients, setIngredients] = useState<IngredientResponse[]>([])
  const [recipes, setRecipes] = useState<RecipeResponse[]>([])

  const params = useLocalSearchParams<{ ingredientsIds: string }>()
  const seachIngredientsIds = params.ingredientsIds.split(',')

  useEffect(() => {
    services.ingredients
      .findByIds(seachIngredientsIds)
      .then(setIngredients)
  }, [])

  useEffect(() => {
    services.recipes
      .findByIngredientsIds(seachIngredientsIds)
      .then(setRecipes)
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"dark-content"} translucent={true} />

      <View style={styles.header}>
        <MaterialIcons
          name="arrow-back"
          size={32}
          onPress={() => router.back()}
        />

        <Text style={styles.title}>Ingredientes</Text>

        <Ingredients ingredients={ingredients} />

        <FlatList
          data={recipes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Recipe recipe={item} onPressOut={() => router.navigate('/recipe/' + item.id)} />}
          style={styles.recipes}
          contentContainerStyle={styles.recipesContent}
          showsVerticalScrollIndicator={false}
          columnWrapperStyle={{ gap: 16 }}
          numColumns={2}
        />
      </View>
    </View>
  )
}