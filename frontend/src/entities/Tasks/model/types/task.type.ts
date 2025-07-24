export interface TaskProps {
    title: string,
    description: string,
    status: "pending" | "in_progress" | "done"
}