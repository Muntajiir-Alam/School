import Link from 'next/link';
import { forwardRef } from 'react';

const Button = forwardRef(({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    href,
    onClick,
    type = 'button',
    ...props
}, ref) => {

    const baseStyles = "inline-flex items-center justify-center font-bold font-sans tracking-wide transition-all duration-300 rounded";

    const variants = {
        primary: "bg-primary text-white hover:bg-primary-dark shadow-[0_4px_10px_rgba(var(--color-primary),0.3)] hover:shadow-[0_6px_15px_rgba(var(--color-primary),0.4)]",
        secondary: "bg-[#1a2b3c] text-white hover:bg-[#111c27] shadow-[0_4px_10px_rgba(26,43,60,0.3)]",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white",
        ghost: "text-gray-700 hover:text-primary bg-transparent",
        white: "bg-white text-primary hover:bg-gray-50 shadow-[0_4px_10px_rgba(0,0,0,0.1)]",
    };

    const sizes = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-6 py-2.5 text-[15.5px]",
        lg: "px-8 py-3.5 text-base",
    };

    const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <Link href={href} className={combinedClasses} ref={ref} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button
            type={type}
            className={combinedClasses}
            onClick={onClick}
            ref={ref}
            {...props}
        >
            {children}
        </button>
    );
});

Button.displayName = 'Button';

export default Button;
