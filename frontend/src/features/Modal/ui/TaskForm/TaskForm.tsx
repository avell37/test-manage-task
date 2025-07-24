import { useAddTask } from "@/entities/Tasks/hooks/useAddTask";
import { Button, FormInputController } from "@/shared/ui";

export const TaskForm = ({ onClose }: { onClose: () => void }) => {
    const { control, errors, handleTaskFormSubmit } = useAddTask(onClose);

    return (
        <form onSubmit={handleTaskFormSubmit} className="flex flex-col gap-[30px] pl-6 max-sm:px-2">
            <h1 className="text-white pt-8 text-xl font-bold max-sm:text-sm max-sm:pt-4 max-sm:mt-[3px]">
                Добавить новую задачу:
            </h1>
            <FormInputController
                name="title"
                control={control}
                type="text"
                className="max-w-[450px] w-full custom-input p-3"
                placeholder="Введите заголовок"
                errors={errors} />
            <FormInputController
                name="description"
                control={control}
                type="text"
                className="max-w-[450px] w-full custom-input p-3"
                placeholder="Введите описание"
                errors={errors} />
            <div className="flex justify-end mb-6 mr-4 gap-[10px]">
                <Button
                    className="apply-button"
                    type="submit"
                    text="Добавить"
                />
                <Button
                    className="cancel-button"
                    onClick={onClose}
                    text="Закрыть"
                />
            </div>
        </form>
    );
};
