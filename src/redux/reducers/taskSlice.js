import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
    name: "task",
    initialState: {
        tasks: []
    },
    reducers: {
        addTask: (state, action) => {
            return {
                ...state,
                count: state.count+1
            }
          },
          updateTask: (state, action) => {
            return {
                ...state,
                count: state.count-1
            }
          },
    }
});

export const { addTask, updateTask } = TaskSlice.actions;

export default TaskSlice.reducer;