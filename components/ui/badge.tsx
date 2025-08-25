import * as React from 'react';

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: 'default' | 'secondary' | 'outline';
};

export const Badge: React.FC<BadgeProps> = ({
  className = '',
  variant = 'default',
  ...props
}) => {
  const styles =
    variant === 'secondary'
      ? 'bg-gray-100 text-gray-700'
      : variant === 'outline'
      ? 'border border-gray-300 text-gray-700'
      : 'bg-[#d4967d] text-white';
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${styles} ${className}`}
      {...props}
    />
  );
};
