import { $host } from "@shared/api";

export const addTask = async (task: object) => {
    const { data } = await $host.post('/api/tasks/', task);
    return data;
}

export const fetchTasks = async () => {
    const { data } = await $host.get('/api/tasks/');
    return data;
}

export const updateStatus = async (id: string, status: 'pending' | 'in_progress' | 'done') => {
    const { data } = await $host.patch('/api/tasks/status', { id, status });
    return data;
}

export const deleteTask = async (id: string) => {
    const { data } = await $host.delete(`api/tasks/${id}`);
    return data;
}