import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Root from "./Root";
import FoodItem from "./FoodItem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/items/:name" element={<FoodItem />} />
      </Routes>
    </Router>
  );
}

export default App;