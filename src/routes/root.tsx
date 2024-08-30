import { Link , useLoaderData } from "react-router-dom"
import { fetchFoods } from "../services"

interface Food {
  id: number;
  Name: string;
  Boujie: number;
  notBoujie: number;
};

export default function Root() {
  const { foods } = useLoaderData<{ foods: Food[] }>();
  console.log(foods)


  return (
    <div className="text-center">
    <h1>Boujie Food</h1>
    <Link to={`/food`}>Start</Link>
    <ul>
      {foods.map((food) => {
        return (
          <li key={food.id}>
            <Link to={`food/${food.Name}`}>
            {food.Name}
            </Link>
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
  console.log(foods)
  return {foods};
}
