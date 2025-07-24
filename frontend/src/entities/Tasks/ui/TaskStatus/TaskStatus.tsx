import { ITask } from "@/shared/types/ITask";
import { useChangeStatus } from "../../hooks/useChangeStatus";

export const TaskStatus = ({ id, status }: { id: string, status: ITask["status"] }) => {
    const { currentStatus, handleStatusChange } = useChangeStatus(status);

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        handleStatusChange(id, e);
    }

    return (
        <label className="absolute bottom-4 right-2">
            <select
                value={currentStatus}
                onChange={handleChange}
                className="ml-2 outline-none p-2 rounded-md"
            >
                <option className="bg-black" value="pending">Ожидание</option>
                <option className="bg-black" value="in_progress">В процессе</option>
                <option className="bg-black" value="done">Выполнено</option>
            </select>
        </label>
    )
}
