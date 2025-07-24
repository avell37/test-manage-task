import { EModalVariables } from "@/shared/config/variables";

export interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    contentType: EModalVariables | null;
}