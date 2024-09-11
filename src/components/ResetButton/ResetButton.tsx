import React from 'react';

type ResetButtonProps = {
  onReset: () => void;  // a function with no arg. and returns nothing?
};

const ResetButton = ({ onReset }:ResetButtonProps) => {
  return (
    <button onClick={onReset}>
      Reset Game
    </button>
  );
};

export default ResetButton;