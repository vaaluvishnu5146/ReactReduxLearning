import { createSlice } from "@reduxjs/toolkit";

const CountSlice = createSlice({
    name: "count",
    initialState: {
        count: 0,
        test: true
    },
    reducers: {
        incrementCount: (state, action) => {
            return {
                ...state,
                count: state.count+1
            }
          },
          decrementCount: (state, action) => {
            return {
                ...state,
                count: state.count-1
            }
          },
    }
});

export const { incrementCount, decrementCount } = CountSlice.actions;

export default CountSlice.reducer;