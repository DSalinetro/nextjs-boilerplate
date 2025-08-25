import * as React from 'react';

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'ghost';
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'default', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    const variants: Record<string, string> = {
      default: 'bg-[#d4967d] text-white hover:bg-[#c47f64]',
      outline: 'border border-gray-300 text-gray-800 hover:bg-gray-50',
      ghost: 'text-gray-800 hover:bg-gray-100',
    };
    return (
      <button
        ref={ref}
        className={`${base} ${variants[variant] ?? ''} ${className}`}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';
