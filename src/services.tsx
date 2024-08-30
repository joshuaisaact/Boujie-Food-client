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

export async function getFoodByName(name: string) {
  try {
    const response = await fetch(`${baseURL}/items/${name}`);
    console.log(response)
    const data = await response.json();
    return data[0];
  } catch (error) {
    console.error("Error fetching food items", error);
  }
}

export async function updateVote(id: number, type: "Boujie" | "notBoujie") {
  const response = await fetch(`/api/foods/${id}/vote`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type }),
  });

  if (!response.ok) {
    throw new Error("Failed to update vote");
  }
}