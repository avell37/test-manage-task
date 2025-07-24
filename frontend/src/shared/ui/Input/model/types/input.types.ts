import { InputHTMLAttributes } from "react";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    children?: React.ReactNode;
    noWrap?: boolean;
    error?: string;
}