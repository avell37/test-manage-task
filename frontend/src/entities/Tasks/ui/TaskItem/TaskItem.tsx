import { ITask } from "@/shared/types/ITask";
import { TaskStatus } from "../TaskStatus/TaskStatus";
import { Button } from "@/shared/ui/Button/ui/Button";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { DeleteIcon } from "@/shared/assets";

interface TaskItemProps {
    task: ITask;
}

export const TaskItem = ({ task }: TaskItemProps) => {
    const { handleDeleteTask } = useDeleteTask();

    const { id, title, description, status } = task;

    const handleDelete = (id: string) => {
        handleDeleteTask(id)
    }

    return (
        <div className='relative w-full border border-black/70 bg-black/30 rounded-md p-4'>
            <div className="flex flex-col gap-6">
                <p className='text-2xl break-words'>{title}</p>
                <span className="text-sm mb-6 break-words">{description}</span>
                <TaskStatus
                    id={id}
                    status={status}
                />
            </div>
            <Button onClick={() => handleDelete(id)}>
                <DeleteIcon className="absolute right-2 top-2 size-5 stroke-white hover:stroke-white/50 transition" />
            </Button>
        </div>
    )
}
