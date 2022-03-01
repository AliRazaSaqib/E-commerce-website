/** @format */

import { createSlice } from "@reduxjs/toolkit";

// ----------------------------------------------------------------------
const initialState = {
  newCart: [],
};

const slice = createSlice({
  name: "AddToCart",
  initialState,
  reducers: {
    loadInitialState(state) {
      state = initialState;
    },

    addItems(state, action) {
      state.newCart = action.payload.data;
    },

    // resetItemsStore(state, action) {
    //   state.newCart = [];
    // },
  },
});

// Reducer
export default slice.reducer;

// for action cart
export function addItems(data) {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.addItems(data));
    } catch (error) {
      console.log("error", error);
    }
  };
}

// // for action cart
export function deleteItems(data) {
  return async (dispatch) => {
    try {
      dispatch(slice.actions.addItems(data));
    } catch (error) {
      console.log("error", error);
    }
  };
}

// export function resetItemsStore() {
//   return async (dispatch) => {
//     try {
//       dispatch(slice.actions.resetItemsStore());
//     } catch (error) {
//       console.log("error", error);
//     }
//   };
// }
