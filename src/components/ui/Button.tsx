import { cn } from "../../lib/utils";
import React, { ReactNode } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  selected?: boolean;
}

const Button = ({ selected, className, children, ...props }: ButtonProps) => {
  return (
    <>
      <button
        type="button"
        className={cn(
          " py-1 flex justify-between items-center gap-2 px-4 border-first_border_color rounded-lg border-2 text-md capitalize  sm:text-second_text_color hover:text-first_text_color transition-all",
          className
        )}
        {...props}
      >
        {children}
      </button>
      <div
        className={cn(`border-2 border-first rounded-full animate-width-full`, {
          hidden: !selected,
        })}
      ></div>
    </>
  );
};

export default Button;
