import { TaskItem } from "@/entities/Tasks/ui/TaskItem/TaskItem"
import { useAppSelector } from "@/shared/hooks/useAppSelector"
import { tasksSelector } from "@/entities/Tasks/model/selectors/tasksSelector"
import { AnimatePresence, motion } from "framer-motion";

export const Tasks = () => {
    const tasks = useAppSelector(tasksSelector.tasks);

    return (
        <>
            {tasks && (
                <div className="flex flex-col gap-4">
                    <AnimatePresence>
                        {tasks.map((task) => (
                            <motion.div
                                key={task.id}
                                layout
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 10 }}
                                transition={{ duration: 0.2 }}
                            >
                                <TaskItem
                                    task={task}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            )}

        </>
    )
}
