import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import App from './App.tsx'
import './index.css'
import Root, {loader as rootLoader} from './routes/root.tsx'
import FoodItem from './routes/food.tsx';
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader
  },
  {
    path: "food/:foodId",
    element: <FoodItem />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
