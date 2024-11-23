export default defineEventHandler(async (event) => {
  const { id } = event.context.params as Record<string, string>;

  try {
    const response = await fetch(`https://dummyjson.com/recipes/${id}`);

    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        statusMessage: "Failed to fetch recipe",
      });
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
