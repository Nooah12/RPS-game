import {render, screen} from '@testing-library/react'
import ScoreBoard from './ScoreBoard'

describe("Check that the score shows correctly", () => { // ok description?
    test("Check that scores renders", () => {
        render(<ScoreBoard computerScore={4} playerScore={8} userName='' />)

        const playerScore = screen.getByTestId('computer-score')

        expect(playerScore).toHaveTextContent('Computer: 4')
    })

    test('ScoreBoard displays the correct player and computer scores', () => {
        render(<ScoreBoard playerScore={5} computerScore={3} userName={"noah"} />);
      
        const playerScore = screen.getByText('noah: 5');
        const computerScore = screen.getByText('Computer: 3');
      
        expect(playerScore).toBeInTheDocument();
        expect(computerScore).toBeInTheDocument();
      });

    test("Check that userName updates correctly", () => {
        render(<ScoreBoard userName={"noah"} computerScore={4} playerScore={8} />)

        const userName = screen.getByTestId('player-score')

        expect(userName).toHaveTextContent('noah: 8') // this test ok!
    })
})