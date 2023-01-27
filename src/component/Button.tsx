import React from "react";

export interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  variant?: string;
  children?: React.ReactNode;
  href?: string;
  size?: string;
}

export const Button: React.FC<Props> = ({
  variant = "text",
  children,
  href,
  size = "medium",
  ...rest
}) => {
  return (
    <button
      className={`p-3 m-3 text-black rounded ${variant} ${size}`}
      {...rest}
    >
      {children}
    </button>
  );
};
