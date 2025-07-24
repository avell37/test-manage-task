import { bindActionCreators } from "@reduxjs/toolkit";
import { tasksActions } from "@/entities/Tasks/model/slice/tasksSlice";
import { useAppDispatch } from "./useAppDispatch";
import { fetchAllTasks } from "@/entities/Tasks/model/services/fetchAllTasks";

export const useActions = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators({
        ...tasksActions,
        fetchAllTasks
    },
        dispatch)
}