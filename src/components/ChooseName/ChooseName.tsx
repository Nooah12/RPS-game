import React, { HTMLInputTypeAttribute, SetStateAction, useState } from 'react';

type ChooseNameProps = {
  updateName: (name: string) => void;
};

const ChooseName = ({ updateName }: ChooseNameProps) => {
  const [inputValue, setInputValue] = useState<HTMLInputTypeAttribute>('');

  const handleChange = (e: { target: { value: SetStateAction<HTMLInputTypeAttribute> } }) => {
    setInputValue(e.target.value);
  };

  const handleClick = () => {
    if (inputValue !== '') {
      updateName(inputValue);
    }
  };

  return (
    <div className='text-center mt-20'>
      <label className="p-2" htmlFor="user-input">Enter your name</label>
      <input 
        onChange={handleChange} 
        id="user-input" 
        className="p-2" 
        placeholder="Enter your name here" 
      />
      <button onClick={handleClick}>Add name</button> {/* remove data-testid ? */}
    </div>
  );
};

export default ChooseName;
