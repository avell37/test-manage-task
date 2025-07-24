import { ITask } from "@/shared/types/ITask";

export interface tasksInitialState {
    tasks: ITask[],
    loading: boolean,
    error: boolean,
}