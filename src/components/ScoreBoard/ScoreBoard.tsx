import React from 'react';

type ScoreBoardProps = {
  playerScore: number;
  computerScore: number;
  userName: string | null; // need null as well?
};

const ScoreBoard = ({ playerScore, computerScore, userName }:ScoreBoardProps) => {
  return (
    <div className='mt-5'>
      <p data-testid='player-score'>{userName}: {playerScore}</p>
      <p data-testid='computer-score'>Computer: {computerScore}</p>
    </div>
  );
};

export default ScoreBoard;
