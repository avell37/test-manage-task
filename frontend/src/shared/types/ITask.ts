export interface ITask {
    id: string,
    createdAt: string,
    updatedAt: string,
    title: string,
    description: string,
    status: 'pending' | 'in_progress' | 'done';
}