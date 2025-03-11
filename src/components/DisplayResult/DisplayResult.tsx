type DisplayResultProps = {
  playerChoice: 'Rock' | 'Paper' | 'Scissors' | null;
  computerChoice: 'Rock' | 'Paper' | 'Scissors' | null;
  result: string | null;
};

const DisplayResult = ({ playerChoice, computerChoice, result }: DisplayResultProps) => {
  if (!playerChoice || !computerChoice) {
    return <div>First to 3 wins!</div>
  }

  return (
    <div>
      <p data-testid="player-choice">You chose {playerChoice}</p>
      <p data-testid="computer-choice">Computer chose {computerChoice}</p>
      <p data-testid='who-won'>{result}</p>
    </div>
  );
};

export default DisplayResult;

