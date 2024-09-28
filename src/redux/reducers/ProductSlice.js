import { createSlice } from "@reduxjs/toolkit";

const ProductSlice = createSlice({
    name: "product",
    initialState: {
        products: []
    },
    reducers: {
        saveProducts: (state, action) => {
            return {
                ...state,
                products: action.payload.data
            }
          }
    }
});

export const { saveProducts } = ProductSlice.actions;

export default ProductSlice.reducer;