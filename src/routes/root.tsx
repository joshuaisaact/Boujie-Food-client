import { Link , useLoaderData } from "react-router-dom"
import { fetchFoods } from "../services"

interface Food {
  id: number;
  Name: string;
  Boujie: number;
  notBoujie: number;
};

export default function Root() {
  const {foods} = useLoaderData();

  return (
    <div className="text-center">
    <h1>Boujie Food</h1>
    <Link to={`/food`}>Start</Link>
    <ul>
      {foods.map((food, index) => {
        return (
          <li
          key={index}
          >
            <Link to={`food/${food.Name}`}>{food.Name}</Link>
          </li>
        )
      })
      }
      </ul>
    </div>
  )
}

export async function loader() {
  const foods: Food[] = await fetchFoods();
  return {foods};
}
