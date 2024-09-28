import { configureStore } from "@reduxjs/toolkit";

import CountSlice from "./reducers/countSlice";
import taskSlice from "./reducers/taskSlice";

// ROOT REDUCER
const REDUX_STORE = configureStore({
  reducer: {
    countReducer: CountSlice,
    taskReducer: taskSlice
  },
});

export default REDUX_STORE;
