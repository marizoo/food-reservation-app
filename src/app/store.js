import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    // our slices will be here.
    reservationsStore: reservationsReducer,
  },
});
