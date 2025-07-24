import { useActions } from "@/shared/hooks/useActions";
import { deleteTask } from "../api/tasksApi";

export const useDeleteTask = () => {
    const { fetchAllTasks } = useActions();

    const handleDeleteTask = async (id: string) => {
        try {
            await deleteTask(id);
            fetchAllTasks();
        } catch (err) {
            console.log(err);
        }
    }

    return {
        handleDeleteTask: handleDeleteTask
    }
}