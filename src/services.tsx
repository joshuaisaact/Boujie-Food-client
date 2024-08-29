const baseURL: string = 'http://localhost:3000';

export const fetchFoods = async () => {
  try {
    const response = await fetch(`${baseURL}/items`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching food items", error);
  }
}