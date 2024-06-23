import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  onClick: () => void;
};

function CustomButton({ children, onClick }: Props) {
  return (
    <button
      className='bg-strong-cyan rounded-sm text-white px-24 py-2 font-spaceMono'
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default CustomButton;
