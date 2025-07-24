import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTasks } from "../services/fetchAllTasks";
import { tasksInitialState } from "../types/tasksInitialState";

const initialState: tasksInitialState = {
    tasks: [],
    loading: false,
    error: false
}

const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchAllTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload ?? [];
            })
            .addCase(fetchAllTasks.rejected, (state) => {
                state.loading = false;
                state.error = true;
            })
    }
})

export const tasksActions = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
