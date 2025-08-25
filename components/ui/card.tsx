import * as React from 'react';

export type CardProps = React.HTMLAttributes<HTMLDivElement>;
export type CardContentProps = React.HTMLAttributes<HTMLDivElement>;

export const Card: React.FC<CardProps> = ({ className = '', ...props }) => (
  <div
    className={`rounded-xl bg-white border border-gray-200 shadow-sm ${className}`}
    {...props}
  />
);

export const CardContent: React.FC<CardContentProps> = ({
  className = '',
  ...props
}) => <div className={`p-6 ${className}`} {...props} />;
