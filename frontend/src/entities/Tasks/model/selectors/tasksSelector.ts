import { RootState } from "@app/providers/store/store";
import { createSelector } from "@reduxjs/toolkit";

const tasksState = (state: RootState) => state['tasksReducer'];

export const tasksSelector = {
    tasks: createSelector(
        [tasksState],
        (tasksReducer) => tasksReducer.tasks
    ),
    loading: createSelector(
        [tasksState],
        (tasksReducer) => tasksReducer.loading
    ),
    error: createSelector(
        [tasksState],
        (tasksReducer) => tasksReducer.error
    ),
}