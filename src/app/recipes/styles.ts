import { theme } from "@/theme"
import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 42,
    marginBottom: 12,
  },
  title: {
    fontSize: theme.fonts.size.heading.md,
    fontFamily: theme.fonts.family.bold,
    marginTop: 22,
    marginBottom: 12,
    paddingHorizontal: 22,
  },
  recipes: {
    paddingVertical: 6,
    paddingHorizontal: 12
  },
  recipesContent: {
    gap: 16,
  },
})