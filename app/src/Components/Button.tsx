import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  variant: 'green' | 'white';
};

function Button({ children, variant }: ButtonProps) {
  const baseStyles = "font-medium py-3 px-5 rounded-full";
  const variantStyles =
    variant === 'green'
      ? "bg-primary-green text-white hover:bg-green-700"
      : "border-2 border-primary-green text-primary-green hover:bg-green-700 hover:text-white";

  return (
    <button className={`${baseStyles} ${variantStyles}`}>
      {children}
    </button>
  );
}

export { Button };
