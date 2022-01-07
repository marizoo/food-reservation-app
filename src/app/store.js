import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";
import customerReducer from "../features/customerSlice";

export const store = configureStore({
  reducer: {
    // our slices will be here.
    reservationStr: reservationsReducer,
    customerStr: customerReducer,
  },
});
