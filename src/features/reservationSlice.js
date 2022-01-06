import { createSlice } from "@reduxjs/toolkit";

//create initial state variable here, usually an object
const initialState = {
  value: [],
};

export const reservationSlice = createSlice({
  name: "reservations",
  initialState,
  reducers: {
    // add a bunch of our methods here, to update our state.
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
