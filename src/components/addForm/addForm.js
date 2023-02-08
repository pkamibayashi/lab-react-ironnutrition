import { Divider, Input } from 'antd';
import { useState } from 'react';
import FoodBox from '../foodBox/foodBox';

// Iteration 4
function AddFoodForm(prop) {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: '',
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [food, setFood] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setFood([...food, form]);
    setForm({
      name: '',
      image: '',
      calories: '',
      servings: '',
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>

        <label htmlFor="name">Name</label>
        <Input
          id="name"
          value={form.name}
          type="text"
          onChange={handleChange}
          name="name"
        />

        <label htmlFor="image">Image</label>
        <Input
          id="image"
          value={form.image}
          type="text"
          onChange={handleChange}
          name="image"
        />

        <label htmlFor="calories">Calories</label>
        <Input
          id="calories"
          value={form.calories}
          type="text"
          onChange={handleChange}
          name="calories"
        />

        <label htmlFor="servings">Servings</label>
        <Input
          id="servings"
          value={form.servings}
          type="text"
          onChange={handleChange}
          name="servings"
        />
        <button>Create</button>
      </form>

      {food.map((currentFood) => {
        return (
          <FoodBox
            name={currentFood.name}
            calories={currentFood.calories}
            image={currentFood.image}
            servings={currentFood.servings}
          />
        );
      })}
    </>
  );
}

export default AddFoodForm;
