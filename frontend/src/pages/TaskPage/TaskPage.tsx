import { Button } from "@shared/ui"
import { useEffect } from "react"
import { useActions } from "@/shared/hooks/useActions"
import { Tasks } from "@/entities/Tasks/ui/Tasks";
import { useModal } from "@/shared/hooks/useModal";
import { Modal } from "@/features/Modal/ui/Modal";
import { EModalVariables } from "@/shared/config/variables";

export const TaskPage = () => {
    const { fetchAllTasks } = useActions();
    const { isOpen, contentType, openModal, closeModal } = useModal();

    useEffect(() => {
        fetchAllTasks();
    }, [])

    const handleOpenModal = () => {
        openModal(EModalVariables.ADD_TASK)
    }

    return (
        <div className="mx-auto max-w-[1440px] mt-4 mb-10">
            <div className="flex flex-col gap-4 mx-4 overflow-y-auto pb-24">
                <h1 className="text-3xl text-center">Tasks</h1>
                <Tasks />
            </div>
            <div className="fixed bottom-4 right-4 left-4 sm:left-auto sm:right-8 z-50">
                <Button
                    value="addTask"
                    className="custom-btn"
                    text="Добавить"
                    onClick={handleOpenModal}
                />
            </div>
            <Modal
                isOpen={isOpen}
                contentType={contentType}
                onClose={closeModal}
            />
        </div>
    )
}
