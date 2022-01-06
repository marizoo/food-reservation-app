import { createSlice } from "@reduxjs/toolkit";

//create initial state variable here, usually an object
const initialState = {
  value: [],
};

export const customerSlice = createSlice({
  name: "customers",
  initialState,
  reducers: {
    // add a bunch of our methods here, to update our state.
    addCustomer: (state, action) => {
      state.value.push(action.payload);
    },
    addFoodToCustomer: (state, action) => {
      state.value.forEach((customer) => {
        if (customer.id === action.payload.id) {
          customer.food.push(action.payload.food);
        }
      });
    },
  },
});

export const { addCustomer, addFoodToCustomer } = customerSlice.actions;

export default customerSlice.reducer;
