import { Control, FieldErrors } from "react-hook-form";

export interface FormInputControllerProps {
    name: string;
    control: Control<any>;
    placeholder?: string;
    type?: string;
    className?: string;
    errors?: FieldErrors;
}