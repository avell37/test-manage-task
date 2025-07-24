import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchTasks } from "../../api/tasksApi";

export const fetchAllTasks = createAsyncThunk(
    'tasks/fetchAllTasks',
    async () => {
        try {
            const res = await fetchTasks();
            return res;
        } catch (err) {
            console.error(err);
        }
    }
)