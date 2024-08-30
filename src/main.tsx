import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
// import App from './App.tsx'
import './index.css'
import Root, {loader as rootLoader} from './routes/Root.tsx'
import FoodItem from './routes/FoodItem.tsx';
import './App.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
  },
  {
    path: "food/:name",
    element: <FoodItem />
  }
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </StrictMode>,
)
