import { useActions } from "@/shared/hooks/useActions";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { TaskYupSchema } from "../lib/TaskFormSchema";
import { addTask, updateStatus } from "../api/tasksApi";
import { AxiosError } from "axios";
import { TaskProps } from "../model/types/task.type";
import { ITask } from "@/shared/types/ITask";
import { useState } from "react";

export const useAddTask = (onClose?: () => void) => {
    const { fetchAllTasks } = useActions();
    const [currentStatus, setCurrentStatus] = useState(status);

    const { control, handleSubmit, reset, setError,
        formState: { errors }
    } = useForm<TaskProps>({
        resolver: yupResolver(TaskYupSchema),
        defaultValues: {
            title: '',
            description: '',
            status: 'pending',
        }
    });

    const handleStatusChange = async (id: string, e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            const newStatus = e.target.value as ITask["status"];
            await updateStatus(id, newStatus)
            setCurrentStatus(newStatus);
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Не передан статус.")) {
                setError("status", {
                    type: "server",
                    message,
                })
            }
        }
    }

    const handleTaskFormSubmit = async (data: TaskProps) => {
        try {
            await addTask(data);
            fetchAllTasks();
            reset();
            if (onClose) onClose();
        } catch (err) {
            const error = err as AxiosError<{ message: string }>;
            const message = error.response?.data?.message || "Ошибка. Пожалуйста, попробуйте еще раз.";
            if (message.includes("Нет заголовка и/или описания")) {
                setError("title", {
                    type: "server",
                    message,
                })
            }
        }
    }

    return {
        control,
        errors,
        currentStatus,
        handleTaskFormSubmit: handleSubmit(handleTaskFormSubmit),
        handleStatusChange: handleStatusChange
    }
}