import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import CustomerCard from "./components/CustomerCard";
import {addReservation} from './features/reservationSlice';

function App() {
  const [addName, setAddName] = useState("")

  const reservations = useSelector((state) => state.reservations1.value);
  const customers = useSelector((state) => state.customer1.value);

  const dispatch = useDispatch();

  const handleAddName = () => {
    if(!addName) return;
    dispatch(addReservation(addName));
    setAddName("");
  }

  return (
    <div className="App">
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              {reservations.map((name, index) => (
                <ReservationCard key={index} name={name} index={index}/>
              ))}
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
            <CustomerCard key={customer.id} id={customer.id} name={customer.name} food={customer.food}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;