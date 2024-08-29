import { useState, useEffect } from "react";
import { fetchFoods } from "./services";

interface Food {
  id: number;
  Name: string;
  Boujie: number;
  notBoujie: number;
};

export default function FoodItem() {
  const [foods, setFoods] = useState<Food[]>([]);

  useEffect(() => {
    const loadFoods = async () => {
      try {
        const data = await fetchFoods();
        setFoods(data);
      } catch (error) {
        console.error('Error loading foods:', error);
      }
    }

    loadFoods();
  })

  return (
      <ul>
      {foods.map((food, index) => {
        return (
          <li
          key={index}
          >{food.Name}</li>
        )
      })
      }
      </ul>
  )
}
