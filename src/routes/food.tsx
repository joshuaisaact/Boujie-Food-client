import { useLoaderData, useParams } from "react-router-dom"
import { Food } from './root'


export default function FoodItem() {

  const {name} = useParams<{name: string}>();
  // const {foods} = useLoaderData<{ foods: Food[]} >();

  // const food = foods.find(f => f.Name === name);


  return (
       <h2>{name}</h2>

  )
}
