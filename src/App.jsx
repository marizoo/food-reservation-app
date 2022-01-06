import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import ReservationCard from "./components/ReservationCard";
import {addReservation} from './features/reservationSlice';

function App() {
  const [addName, setAddName] = useState("")

  const reservations = useSelector((state) => state.reservations.value);

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
          <div className="customer-food-card-container">
            <p>Selena Gomez</p>
            <div className="customer-foods-container">
              <div className="customer-food"></div>
              <div className="customer-food-input-container">
                <input 
                />
                <button >Add</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;