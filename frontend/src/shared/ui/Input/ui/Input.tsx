import { InputProps } from "../model/types/input.types";

export const Input: React.FC<InputProps> = ({ noWrap, className, children, error, ...props }) => {
    if (noWrap) return (
        <>
            <input className={`${className} ${error ? "border-red-500 flex flex-col" : ""}`} {...props} />
            {error && <span className="text-red-500 text-sm">{error}</span>}
        </>
    )
    return (
        <div className="relative">
            {children}
            <input className={`${className} ${error ? "border-red-500 flex flex-col" : ""}`} {...props} />
            {error && <span className="text-red-500 text-sm max-sm:text-xs">{error}</span>}
        </div>
    );
}