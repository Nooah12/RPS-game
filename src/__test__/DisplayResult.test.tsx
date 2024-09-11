import { render, screen} from '@testing-library/react'
import DisplayResult from '../components/DisplayResult/DisplayResult'

describe("Check that the component works correctly", () => {
    test("Check the choices render correctly", () => {
        render(<DisplayResult playerChoice='Rock' computerChoice='Paper' result='' />)

        const playerChoice = screen.getByTestId('player-choice')
        const computerChoice = screen.getByTestId('computer-choice')

        expect(playerChoice).toHaveTextContent('Rock')
        expect(computerChoice).toHaveTextContent('Paper')
    })

    test("Check that result updates correctly", () => {
        render(<DisplayResult playerChoice='Rock' computerChoice='Paper' result={'Stupid bot computer wins!'} />)

        const result = screen.getByTestId('who-won')

        expect(result).toHaveTextContent('Stupid bot computer wins!')
    })

    test('DisplayResult shows a message when no choices are made', () => {
        render(<DisplayResult playerChoice={null} computerChoice={null} result={null} />);

        const message = screen.getByText(/choose rock, paper or scissors!/i);
        expect(message).toBeInTheDocument();
    });

})