import React, { useId } from "react";

const Input = React.forwardRef(function Input(
    { children, type = "text", label, className = "", ...props },
    ref
) {
    const id = useId();
    return (
        <div className="w-full">
            {label && (
                <label className="inline-block mb-1 pl-1" htmlFor={id}></label>
            )}
            <input
                type={type}
                className={`px-3 py-2 rounded-lg bg-white dark:text-white font-semibold outline-none focus:bg-gray-50 duration-200 border border-gray-200 w-full ${className}`}
                id={id}
                ref = {ref}
                {...props}
            />
        </div>
    );
});

export default Input;
