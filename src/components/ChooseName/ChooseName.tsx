import React, { useState } from 'react';

type ChooseNameProps = {
  updateName: (name: string) => void;
};

const ChooseName = ({ updateName }: ChooseNameProps) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue.trim() !== '') {
      updateName(inputValue);
      setInputValue(''); // Clear the input after submission
    }
  };

  return (
    <div className='text-center mt-20'>
      <label className="p-2" htmlFor="user-input">Enter your name</label>
      <input 
        onChange={handleChange}
        value={inputValue} // Add this
        id="user-input"
        className="p-2"
        placeholder="Enter your name here"
        type="text"
      />
      <button onClick={handleClick}>Add name</button>
    </div>
  );
};

export default ChooseName;
