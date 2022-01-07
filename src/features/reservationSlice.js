import { createSlice } from "@reduxjs/toolkit";

// create initialvalue here
const initialState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservationSlc",
  initialState,
  reducers: {
    // a bunch of our states here
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
    removeReservation: (state, action) => {
      state.value.splice(action.payload, 1);
    },
  },
});

export const { addReservation, removeReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
