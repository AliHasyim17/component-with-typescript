import React from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: string;
  children?: React.ReactNode;
  size?: string;
  backgroundColor?: string;
}

export const Button: React.FC<Props> = ({
  variant = "text",
  children,
  size = "medium",
  label,
  backgroundColor,
  ...rest
}) => {
  return (
    <button
      className={`p-3 m-3 text-black rounded 
      ${variant === 'contained' ? 'bg-yellow' : ''}
      ${variant === 'text' ? 'bg-white' : ''}
      ${variant === 'outlined' ? 'bg-white border' : ''}
      ${size === 'small' ? 'text-sm' : ''}
      ${size === 'medium' ? 'text-base' : ''}
      ${size === 'large' ? 'text-lg' : ''}
      `}
      {...rest}
    >
      {label}
      {children}
    </button>
  );
};
