import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { getFoodByName, updateVote } from "../services";
import { Food } from './Root'


export default function FoodItem() {
  const { name } = useParams<{ name: string }>();
  const [food, setFood] = useState<Food | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function loadFood() {
      const foodName = name ?? 'Burrata'
      console.log(name)
      const fetchedFood = await getFoodByName(foodName);
      if (fetchedFood) {
        setFood(fetchedFood);
      } else {
        setFood(null);
      }
      setLoading(false);
    }

    loadFood();
  }, [name])

  const handleVote = async (type: "Boujie" | "notBoujie") => {
    if (food) {
      setFood((prevFood) =>
        prevFood ? { ...prevFood, [type]: prevFood[type] + 1 } : null
      );

      await updateVote(food.id, type);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!food) {
    return <h2>Food not found</h2>;
  }

  console.log(food)


  return (
    <div>
      <h2>{food.Name}</h2>
      <button onClick={() => handleVote("Boujie")}>Boujie</button>
      <button onClick={() => handleVote("notBoujie")}>Not Boujie</button>
      <p>Boujie: {food.Boujie} | Not Boujie: {food.notBoujie}</p>
    </div>
  );
}
