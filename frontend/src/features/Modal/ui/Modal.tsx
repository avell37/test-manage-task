import { CloseIcon } from "@/shared/assets/icons/CloseIcon";
import { modalComponents } from "../utils/modalComponents";
import { ModalProps } from "../types/modal.types";

export const Modal = ({ isOpen, onClose, contentType }: ModalProps) => {
    if (!isOpen || !contentType) return null;

    const Component = modalComponents[contentType];

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[500] px-4">
            <div className="relative max-w-[500px] w-full h-fit max-h-[800px] border border-gray-800
            rounded-md bg-black overflow-y-auto custom-overflow">
                <Component
                    onClose={onClose}
                />
                <p
                    className="text-white absolute right-4 top-8 font-bold max-sm:top-5 max-sm:right-2"
                    onClick={onClose}
                >
                    <CloseIcon
                        className="stroke-white cursor-pointer hover:stroke-gray-400 transition-all
                        duration-300 max-w-[25px] w-full max-h-[25px] h-full max-sm:max-w-[17px] max-sm:max-h-[17px]"
                    />
                </p>
            </div>
        </div>
    );
};