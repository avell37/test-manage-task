export interface IButton {
    className?: string,
    text?: string,
    children?: React.ReactNode,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void,
    type?: "submit" | "reset" | "button",
    disabled?: boolean,
    value?: string
}