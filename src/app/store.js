import { configureStore } from "@reduxjs/toolkit";
import reservationReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    // add your slices here
    reservations1: reservationReducer,
    customer1: customerReducer,
  },
});
