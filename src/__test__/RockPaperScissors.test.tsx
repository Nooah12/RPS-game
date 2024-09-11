import RockPaperScissors from "./RockPaperScissors"
import {fireEvent, render, screen} from '@testing-library/react'

describe('RockPaperScissors integration tests', () => {
  test('Game resets when the reset button is clicked', () => {
    render(<RockPaperScissors />);

    const nameInput = screen.getByPlaceholderText('Enter your name here');
    const addNameButton = screen.getByRole('button', { name: /add name/i });
    fireEvent.change(nameInput, { target: { value: 'Noah' } });
    fireEvent.click(addNameButton);

    const rockButton = screen.getByRole('button', { name: /rock/i });
    expect(rockButton).toBeInTheDocument();
    fireEvent.click(rockButton);

    expect(screen.getByText(/you chose rock/i)).toBeInTheDocument();

    const resetButton = screen.getByRole('button', { name: /reset game/i });
    fireEvent.click(resetButton);

    expect(screen.queryByText(/you chose rock/i)).not.toBeInTheDocument();
    expect(screen.getByText('Choose Rock, Paper or Scissors!')).toBeInTheDocument();

    expect(screen.getByText(/noah: 0/i)).toBeInTheDocument();
    expect(screen.getByText(/computer: 0/i)).toBeInTheDocument();
  });

  test("Verify player choice updates when clicking one of the selection buttons after entering a name", () => {
    render(<RockPaperScissors />);
  
    const nameInput = screen.getByPlaceholderText('Enter your name here');
    const addNameButton = screen.getByRole('button', { name: /add name/i });
    fireEvent.change(nameInput, { target: { value: 'Noah' } });
    fireEvent.click(addNameButton);
  
    // Now the other components are working??
    const paperButton = screen.getByRole('button', { name: /paper/i });
    fireEvent.click(paperButton);
  
    const resultDisplay = screen.getByText(/You chose Paper/i);
    expect(resultDisplay).toBeInTheDocument();
  });


    test('Verify all possible outcomes when player chooses Rock', () => {
        render(<RockPaperScissors />);

        const nameInput = screen.getByPlaceholderText('Enter your name here');
        const addNameButton = screen.getByRole('button', { name: /add name/i });
        fireEvent.change(nameInput, { target: { value: 'Noah' } });
        fireEvent.click(addNameButton);
      
        const rockButton = screen.getByRole('button', { name: /rock/i });
        
        let resultText = '';
        let computerChoiceText = '';
        let attempts = 0;
        const maxAttempts = 30; // avoid infinite loops
      
        while (attempts < maxAttempts) {
          fireEvent.click(rockButton);
      
          // Get the computer's choice and result??
          computerChoiceText = screen.getByTestId('computer-choice').textContent || '';
          resultText = screen.getByText(/you win|computer wins|it's a tie/i).textContent || '';
          
          if (computerChoiceText.includes('Rock')) {
            expect(resultText).toContain("It's a tie!");
          } else if (computerChoiceText.includes('Paper')) {
            expect(resultText).toContain("Stupid bot computer wins!");
          } else if (computerChoiceText.includes('Scissors')) {
            expect(resultText).toContain("You winnn!");
          }
      
          attempts++;
        }
        expect(attempts).toBeGreaterThan(0);
      });
});

describe("RockPaperScissor unit tests", () => {
    test("Verify the game starts when adding a name in the input field", () => {
        render(<RockPaperScissors />);

        const nameInput = screen.getByPlaceholderText('Enter your name here');
        const addNameButton = screen.getByRole('button', { name: /add name/i });

        fireEvent.change(nameInput, { target: { value: 'Noah' } });
        fireEvent.click(addNameButton);
      
        const rockButton = screen.getByRole('button', { name: /rock/i });
        const paperButton = screen.getByRole('button', { name: /paper/i });
        const scissorsButton = screen.getByRole('button', { name: /scissors/i });

        expect(rockButton).toBeInTheDocument();
        expect(paperButton).toBeInTheDocument();
        expect(scissorsButton).toBeInTheDocument();
      });

    test("Check updateName is called when button is clicked", () => { // dont have to fake anything since I already have the updatefuction
        render(<RockPaperScissors />)
        const mockName = "Noah"
        let userInput = screen.getByLabelText("Enter your name")
    
        expect((userInput as HTMLInputElement).value).toBe('')
    
        fireEvent.change(userInput, {target: {value: mockName}})
        
        userInput = screen.getByLabelText("Enter your name")
        expect((userInput as HTMLInputElement).value).toBe(mockName)
    
        const addNameButton = screen.getByRole('button') 
        fireEvent.click(addNameButton)
    
        const userName = screen.getByRole('heading' , {level: 1})
    
        expect(userName).toHaveTextContent(`Welcome, ${mockName}!`)
    })
})