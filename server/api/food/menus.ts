export default defineEventHandler(async (event) => {
  const response = await fetch("https://dummyjson.com/recipes");

  if (!response.ok) {
    throw createError({
      statusCode: response.status,
      statusMessage: "Failed to fetch recipes",
    });
  }

  const data = await response.json();
  return data.recipes;
});
