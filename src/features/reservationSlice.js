import { createSlice } from "@reduxjs/toolkit";

// create initialvalue here
const initialState = {
  value: [],
};

export const reservationsSlice = createSlice({
  name: "reservationSlice",
  initialState,
  reducers: {
    // a bunch of our states here
    addReservation: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { addReservation } = reservationsSlice.actions;
export default reservationsSlice.reducer;
