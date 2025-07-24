import { updateStatus } from "../api/tasksApi";
import { ITask } from "@/shared/types/ITask";
import { useState } from "react";

export const useChangeStatus = (status: ITask["status"]) => {
    const [currentStatus, setCurrentStatus] = useState(status);

    const handleStatusChange = async (id: string, e: React.ChangeEvent<HTMLSelectElement>) => {
        try {
            const newStatus = e.target.value as ITask["status"];
            await updateStatus(id, newStatus)
            setCurrentStatus(newStatus);
        } catch (err) {
            console.log(err);
        }
    }

    return {
        currentStatus,
        handleStatusChange: handleStatusChange
    }
}