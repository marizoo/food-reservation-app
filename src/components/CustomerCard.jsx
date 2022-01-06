import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addFoodToCustomer } from '../features/customerSlice'

const CustomerCard = ({id, name, food}) => {
    const [newFood, setNewFood] = useState("")

    const dispatch = useDispatch();

    const handleAddFood = () => {
        if(!newFood) return;
        dispatch(addFoodToCustomer({
            id,
            food: newFood,
        }))
        setNewFood("")
    }

    return (
        <div className="customer-food-card-container">
            <p>{name}</p>
            <div className="customer-foods-container">
              <div className="customer-food">
                  {food.map(food => {
                      return <p>{food}</p>
                  })}
              </div>
              <div className="customer-food-input-container">
                <input 
                type="text"
                value={newFood}
                onChange={(ev) => setNewFood(ev.target.value)}
                />
                <button onClick={handleAddFood}>Add</button>
              </div>
            </div>
          </div>
    )
}

export default CustomerCard
