import './App.css';
import { Routes, Router } from 'react-router-dom';
import food from './foods.json';
import FoodBox from './components/foodBox/foodBox';
import AddFoodForm from './components/addForm/addForm';

function App() {
  let foodArr = food;

  return (
    <div className="App">
      <div>
        <AddFoodForm />
      </div>
      {foodArr.map((food) => {
        return (
          <div key={food.name}>
            <FoodBox
              name={food.name}
              calories={food.calories}
              image={food.image}
              servings={food.servings}
            />
          </div>
        );
      })}
    </div>
  );
}

export default App;
