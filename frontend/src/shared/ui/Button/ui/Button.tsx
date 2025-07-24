import type { IButton } from "../types/button.types";

export const Button: React.FC<IButton> = ({
    children,
    className,
    text,
    onClick,
    type,
    value,
    disabled
}) => (
    <button
        type={type}
        className={className}
        value={value}
        disabled={disabled}
        onClick={onClick}
    >
        {text}
        {children}
    </button>
)
