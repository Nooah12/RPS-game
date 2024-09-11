import React from 'react';

type SelectionPanelProps = {
  onSelect: (choice: 'Rock' | 'Paper' | 'Scissors') => void;
};

const SelectionPanel = ({ onSelect }:SelectionPanelProps) => {
  return (
    <div>
      <button onClick={() => onSelect('Rock')}>
        Rock
      </button>
      <button onClick={() => onSelect('Paper')}>
        Paper
      </button>
      <button onClick={() => onSelect('Scissors')}>
        Scissors
      </button>
    </div>
  );
};

export default SelectionPanel;
