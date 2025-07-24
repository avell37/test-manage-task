import { useState } from "react";
import { EModalVariables } from "../config/variables";

export type ModalContentType = EModalVariables | null;

export const useModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [contentType, setContentType] = useState<ModalContentType | null>(null);

    const openModal = (type: ModalContentType) => {
        setContentType(type);
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        setContentType(null);
    }

    return {
        isOpen,
        contentType,
        openModal,
        closeModal
    }
}