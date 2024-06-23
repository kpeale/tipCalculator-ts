import { useState } from 'react';
import Button from './components/Button';
import CustomButton from './components/CustomButton';
import Input from './components/Input';

function App() {
  const [bill, setBill] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [custom, setCustom] = useState('');

  const handleBillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(e.target.valueAsNumber);
  };

  const handlePeopleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPeople(e.target.valueAsNumber);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTipPercentage(0);
    setCustom(e.target.value);
  };

  const handleTipClick = (value: number) => {
    setTipPercentage(value);
  };

  const calculateTipAmount = () => {
    if (bill <= 0) return 0;
    const percentage = custom ? parseFloat(custom) : tipPercentage;
    if (percentage <= 0 || isNaN(percentage)) return 0;
    const tipAmount = (bill * percentage) / 100;
    return isNaN(tipAmount) || !isFinite(tipAmount) ? 0 : tipAmount;
  };

  const calculateTotalPerPerson = () => {
    if (numberOfPeople <= 0) return 0;
    const totalAmount = bill / numberOfPeople;
    return isNaN(totalAmount) || !isFinite(totalAmount) ? 0 : totalAmount;
  };

  const resetButton = () => {
    setBill(0);
    setNumberOfPeople(0);
    setTipPercentage(0);
    setCustom('');
  };

  const tipAmount = calculateTipAmount();
  const totalPersonAmt = calculateTotalPerPerson();

  return (
    <>
      <section className='h-full bg-light-grayishcyan md:py-32 sm:py-20 py-16'>
        <div className='flex items-center mx-auto bg-white md:w-[700px] sm:w-[330px] w-[330px] md:h-[350px] h-[700px] rounded-md'>
          <div className='flex md:flex-row flex-col gap-7'>
            <div className='w-[300px] md:ml-8 ml-3'>
              <div>
                <Input
                  icon='/icon-dollar.svg'
                  inputValue={bill}
                  handleChange={handleBillChange}
                >
                  Bill
                </Input>
              </div>

              <div className='mt-4'>
                <label
                  htmlFor=''
                  className='font-spaceMono text-gray-400'
                >
                  Select Tip %
                </label>
                <div className='flex flex-row flex-wrap gap-3'>
                  <Button
                    className='bg-very-DarkCyan md:px-9 px-16 py-2 text-white'
                    onClick={() => handleTipClick(5)}
                  >
                    5%
                  </Button>
                  <Button
                    className='bg-very-DarkCyan md:px-8 px-[3.4rem] py-2 text-white'
                    onClick={() => handleTipClick(10)}
                  >
                    10%
                  </Button>
                  <Button
                    className='bg-very-DarkCyan md:px-[1.9rem] px-[3.6rem] py-2 text-white'
                    onClick={() => handleTipClick(15)}
                  >
                    15%
                  </Button>
                  <Button
                    className='bg-very-DarkCyan md:px-8 px-[3.4rem] py-2 text-white'
                    onClick={() => handleTipClick(25)}
                  >
                    25%
                  </Button>
                  <Button
                    className='bg-very-DarkCyan md:px-8 px-[3.6rem] py-2 text-white'
                    onClick={() => handleTipClick(50)}
                  >
                    50%
                  </Button>
                  {/* <Button
                    className='bg-Very-lightgrayishcyan md:px-[0.9rem] px-[2.5rem] py-2 text-very-DarkCyan font-bold'
                    onClick={() => handleTipClick(0)}
                  >
                    Custom
                  </Button> */}
                  <input
                    type='number'
                    placeholder='custom'
                    className='bg-Very-lightgrayishcyan md:px-[0.4rem] text-center px-[2.5rem] py-2 text-very-DarkCyan font-bold rounded-md font-spaceMono md:w-[87px] w-[136px]'
                    value={custom}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className='mt-4'>
                <Input
                  inputValue={numberOfPeople}
                  icon='/icon-person.svg'
                  handleChange={handlePeopleChange}
                >
                  Number of People
                </Input>
              </div>
            </div>

            <div className='bg-very-DarkCyan md:w-[300px] sm:w-[290px] rounded-md sm:ml-3 ml-3 px-4 py-6'>
              <div className='flex flex-row gap-10'>
                <label
                  htmlFor='tip'
                  className='text-white'
                >
                  <span className='block font-spaceMono text-sm'>
                    Tip Amount
                  </span>
                  <span className='block font-spaceMono text-sm italic'>
                    /person
                  </span>
                </label>
                <input
                  type='text'
                  placeholder='$0.00'
                  id='tip'
                  value={`$${(tipAmount / (numberOfPeople || 1)).toFixed(2)}`}
                  className='bg-very-DarkCyan text-strong-cyan font-bold font-spaceMono outline-none border-none w-[100px]'
                  readOnly
                />
              </div>

              <div className='flex flex-row gap-8 pt-10'>
                <label
                  htmlFor='total'
                  className='text-white'
                >
                  <span className='block font-spaceMono text-sm'>Total</span>
                  <span className='block italic font-spaceMono text-sm'>
                    /person
                  </span>
                </label>
                <input
                  type='text'
                  placeholder='$0.00'
                  id='total'
                  value={`$${totalPersonAmt.toFixed(2)}`}
                  className='bg-very-DarkCyan text-strong-cyan font-bold font-spaceMono outline-none border-none w-[100px] text-center'
                  readOnly
                />
              </div>

              <div className='flex justify-center mt-20'>
                <CustomButton onClick={resetButton}>RESET</CustomButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
