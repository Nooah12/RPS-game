import { render, screen, fireEvent } from '@testing-library/react';
import SelectionPanel from './SelectionPanel';

describe("Check that all buttons renders correctly", () => {
    test('renders specific selection button', () => {
        render(<SelectionPanel onSelect={() => {}} />);
        const rockButton = screen.getByRole('button', { name: /rock/i });
        const paperButton = screen.getByRole('button', { name: /paper/i });
        const scissorsButton = screen.getByRole('button', { name: /scissors/i });
      
        expect(rockButton).toBeInTheDocument();
        expect(paperButton).toBeInTheDocument();
        expect(scissorsButton).toBeInTheDocument();
    });

    test('renders all selection buttons', () => {
        render(<SelectionPanel onSelect={() => {}} />);
        const buttons = screen.getAllByRole('button');
        expect(buttons).toHaveLength(3);
    });
      
    test('Buttons renders the correct text', () => {
        render(<SelectionPanel onSelect={() => {}} />);
        const rockButton = screen.getByRole('button', { name: /rock/i });
        const paperButton = screen.getByRole('button', { name: /paper/i });
        const scissorsButton = screen.getByRole('button', { name: /scissors/i });

        expect(rockButton).toHaveTextContent('Rock');
        expect(paperButton).toHaveTextContent('Paper');
        expect(scissorsButton).toHaveTextContent('Scissors');
    });
      
      test('calls onSelect with the correct choice when a button is clicked', () => {
        const onSelectMock = jest.fn();
        render(<SelectionPanel onSelect={onSelectMock} />);
        
        const rockButton = screen.getByRole('button', { name: /rock/i });
        fireEvent.click(rockButton);
      
        expect(onSelectMock).toHaveBeenCalledWith('Rock');
      });
})

