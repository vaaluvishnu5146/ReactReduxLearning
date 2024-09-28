import { configureStore } from "@reduxjs/toolkit";

import CountSlice from "./reducers/countSlice";
import taskSlice from "./reducers/taskSlice";
import ProductSlice from "./reducers/ProductSlice";

// ROOT REDUCER
const REDUX_STORE = configureStore({
  reducer: {
    countReducer: CountSlice,
    taskReducer: taskSlice,
    productReducer: ProductSlice
  },
});

export default REDUX_STORE;
