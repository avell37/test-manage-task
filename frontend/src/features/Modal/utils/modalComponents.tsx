import { EModalVariables } from "@/shared/config/variables";
import { TaskForm } from "../ui/TaskForm/TaskForm";
import { JSX } from "react";

type ModalComponent = (props: { onClose: () => void }) => JSX.Element;

export const modalComponents: Record<EModalVariables, ModalComponent> = {
    [EModalVariables.ADD_TASK]: TaskForm,
};