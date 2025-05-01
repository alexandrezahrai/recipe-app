export async function fetchAllRecipes() {
  const response = await fetch("https://dummyjson.com/recipes");
  const recipes = await response.json();
  return recipes;
}
