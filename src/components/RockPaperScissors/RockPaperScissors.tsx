'use client';
import React, { useState } from 'react';
import SelectionPanel from '@/components/SelectionPanel/SelectionPanel';
import DisplayResult from '@/components/DisplayResult/DisplayResult';
import ScoreBoard from '@/components/ScoreBoard/ScoreBoard';
import ResetButton from '@/components/ResetButton/ResetButton';
import ChooseName from '@/components/ChooseName/ChooseName';

const RockPaperScissors = () => {
  const [userName, setUserName] = useState<string | null>(null);
  const [playerChoice, setPlayerChoice] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [computerChoice, setComputerChoice] = useState<'Rock' | 'Paper' | 'Scissors' | null>(null);
  const [playerScore, setPlayerScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  const [result, setResult] = useState<string | null>(null);
  const [winner, setWinner] = useState<'player' | 'computer' | null>(null);

  const choices = ['Rock', 'Paper', 'Scissors'] as const;

  const getRandomChoice = () => {
    return choices[Math.floor(Math.random() * choices.length)];
  };

  const handleSelect = (playerSelection: 'Rock' | 'Paper' | 'Scissors') => {
    const computerSelection = getRandomChoice();
    setPlayerChoice(playerSelection);
    setComputerChoice(computerSelection);

    const gameResult = decideWinner(playerSelection, computerSelection);
    setResult(gameResult);

    if (gameResult === 'You winnn!') {
      setPlayerScore((prev) => prev + 1);
    } else if (gameResult === 'Stupid bot computer wins!') {
      setComputerScore((prev) => prev + 1);
    }
  };

  const decideWinner = (playerChoice: 'Rock' | 'Paper' | 'Scissors', computerChoice: 'Rock' | 'Paper' | 'Scissors'): string => {
    if (playerChoice === computerChoice) return "It's a tie!";
    if (
      (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
      (playerChoice === 'Paper' && computerChoice === 'Rock') ||
      (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
      return 'You winnn!';
    }
    return 'Stupid bot computer wins!';
  };

  const handleReset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult(null);
    setPlayerScore(0);
    setComputerScore(0);
    setWinner(null)
  };

  const handleNameSelect = (name: string) => {
    setUserName(name);
  };

  return (
    <>
      {!userName ? ( // if no username show ChooseName else show <main> ?
        <ChooseName updateName={handleNameSelect} />
      ) : (
        <main>
          <h1>Welcome, {userName}!</h1>
          <SelectionPanel onSelect={handleSelect} />
          <DisplayResult playerChoice={playerChoice} computerChoice={computerChoice} result={result} />
          <ScoreBoard playerScore={playerScore} computerScore={computerScore} userName={userName} />
          <ResetButton onReset={handleReset} />
        </main>
      )}
    </>
  );
};

export default RockPaperScissors;