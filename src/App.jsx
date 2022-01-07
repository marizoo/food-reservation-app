import React from "react";
import "./App.css";
import CustomerCard from "./components/CustomerCard";
import ReservationCard from "./components/ReservationCard";

// till minute 36.18

function App() {
 

  return (
    <div className="App">
      TEST
      <div className="container">
        <div className="reservation-container">
          <div>
            <h5 className="reservation-header">Reservations</h5>
            <div className="reservation-cards-container">
              <ReservationCard />
              
            </div>
          </div>
          <div className="reservation-input-container">
            <input 
            />
            <button >Add</button>
          </div>
        </div>
        <div className="customer-food-container">
          <CustomerCard />
        </div>
      </div>
    </div>
  );
}

export default App;