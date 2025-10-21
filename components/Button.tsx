import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'primary';
  iconSrc?: string;
  children?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', iconSrc, children, className = '', ...props }, ref) => {
    const baseStyles = 'px-6 py-3 rounded-xl font-medium transition-all duration-200 flex items-center gap-2 justify-center border-2';
    
    const variants = {
      default: 'bg-white border-gray-300 text-gray-700 hover:border-gray-400 hover:bg-gray-50',
      outline: 'bg-white border-gray-300 text-gray-900 hover:border-gray-400 hover:bg-gray-50',
      primary: 'bg-indigo-600 border-indigo-600 text-white hover:bg-indigo-700 hover:border-indigo-700',
    };

    // Si solo hay icono sin children
    if (iconSrc && !children) {
      return (
        <button
          ref={ref}
          className={`p-3 rounded-xl border-2 transition-all duration-200 flex items-center justify-center ${variants[variant]} ${className}`}
          {...props}
        >
          <img src={iconSrc} alt="" className="w-6 h-6" />
        </button>
      );
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {iconSrc && <img src={iconSrc} alt="" className="w-5 h-5" />}
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;