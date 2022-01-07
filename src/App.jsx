import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";
import {addReservation} from './features/reservationSlice'



function App() {
  const [addName, setAddName] = useState("")
 
  const reservations = useSelector(state => state.reservationStr.value)
  const customers = useSelector(state => state.customerStr.value)

  const dispatch = useDispatch();

  const handleAddName = () => {
    if(!addName) return;
    dispatch(addReservation(addName));
    setAddName("")
  }

  return (
    <div className="App">
      TEST
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
            {reservations.map((name, index) => {
              return <ReservationCard key={index} name={name} index={index}/>
            })}
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
            type="text"
            value={addName}
            onChange={(ev) => setAddName(ev.target.value)}
            />
            <button onClick={handleAddName}>Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          {customers.map(customer => (
          <CustomerCard id={customer.id} name={customer.name} foods={customer.food}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;