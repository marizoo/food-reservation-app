import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import {addFoodToCustomer} from '../features/customerSlice'

const CustomerCard = ({id, name, foods}) => {

  const [addFood, setAddFood] = useState();

  const dispatch = useDispatch();

  const handleAddFood = () => {
    if(!addFood) return;
    dispatch(addFoodToCustomer({
      id,
      food: addFood,
    }));
    setAddFood("");
  }

    return (
        <div className="customer-food-card-container">
      <h5>{name}</h5>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map(food => (
            <p>{food}</p>
          ))}
        </div>
        <div className="customer-food-input-container">
          <input
          type="text"
          value={addFood}
          onChange={(ev) => setAddFood(ev.target.value)}
          />
          <button  
          onClick={handleAddFood}
          >
            Add
          </button>
        </div>
      </div>
    </div>
    )
}

export default CustomerCard
