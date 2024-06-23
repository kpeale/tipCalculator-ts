import { ReactNode } from 'react';

type Props = {
  inputValue: number;
  icon: string;
  children: ReactNode;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ inputValue, icon, children, handleChange }: Props) => {
  return (
    <div className='relative w-full max-w-xs'>
      <label
        htmlFor='input-id'
        className='block font-spaceMono text-gray-400 mb-2'
      >
        {children}
      </label>
      <div className='relative'>
        <img
          src={icon}
          alt='icon'
          className='absolute left-3 top-1/2 transform -translate-y-1/2'
        />
        <input
          type='number'
          placeholder='0'
          className='bg-Very-lightgrayishcyan w-full pl-10 pr-3 py-2 font-spaceMono text-gray-400 text-right'
          value={inputValue}
          id='input-id'
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
