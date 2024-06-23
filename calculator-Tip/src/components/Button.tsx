import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className?: string;
  value?: string;
  onClick?: () => void;
};

function Button({ children, className, value, onClick }: Props) {
  return (
    <button
      className={`rounded-md font-spaceMono ${className}`}
      value={value}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
