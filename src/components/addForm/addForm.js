import { Divider, Input } from 'antd';
import { useState } from 'react';
import FoodBox from '../foodBox/foodBox';
import style from './foodContainer.module.css';

// Iteration 4
function AddFoodForm() {
  const [form, setForm] = useState({
    name: '',
    image: '',
    calories: '',
    servings: ' ',
  });

  const [foods, setFood] = useState([]);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFood([...foods, form]);
    setForm({ name: '', image: '', calories: '', servings: ' ' });
  }

  function handleDelete(index) {
    const clone = [...foods];
    clone.splice(index, 1);
    setFood(clone);
  }

  return (
    <>
      <form className={style.form} onSubmit={handleSubmit}>
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
        <button type="submit" onClick={handleSubmit}>
          Create
        </button>
      </form>
      <div className={style.foodBoxContainer}>
        {foods.map((food, index) => {
          return (
            <FoodBox
              name={food.name}
              image={food.image}
              calories={food.calories}
              servings={food.servings}
              onDelete={handleDelete}
              index={index}
            />
          );
        })}
      </div>
    </>
  );
}

export default AddFoodForm;
