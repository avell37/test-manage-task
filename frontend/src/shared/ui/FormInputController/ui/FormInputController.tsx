import { Controller } from "react-hook-form"
import { get } from "lodash";
import { FormInputControllerProps } from "../model/types/formInputController.types";
import { Input } from "../../Input/ui/Input";

export const FormInputController = ({
    name,
    control,
    placeholder = "",
    type = "text",
    className = "",
    errors,
}: FormInputControllerProps) => {
    const errorMessage = get(errors, `${name}.message`);

    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <Input
                    {...field}
                    type={type}
                    placeholder={placeholder}
                    className={`${className} custom-input`}
                    error={typeof errorMessage === 'string' ? errorMessage : undefined}
                />
            )} />
    )
}
