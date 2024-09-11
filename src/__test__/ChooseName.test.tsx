import {fireEvent, render, screen} from '@testing-library/react'
import ChooseName from '../components/ChooseName/ChooseName'

describe("ChooseName component works correct?", () => { // better descripton??
    test("Checks button and input field are rendered", () => {
        render(<ChooseName updateName={(name) =>{}} />)

        const userInput = screen.getByLabelText("Enter your name")
        const button = screen.getByRole('button')

        expect(userInput).toBeInTheDocument()
        expect(button).toBeInTheDocument()
    })

    test("save userinput in state", () => {
        render(<ChooseName updateName={(name) =>{}} />)

        const mockName = "Noah"
        let userInput = screen.getByLabelText("Enter your name")

        expect((userInput as HTMLInputElement).value).toBe('')

        fireEvent.change(userInput, {target: {value: mockName}})
        
        userInput = screen.getByLabelText("Enter your name")
        expect((userInput as HTMLInputElement).value).toBe(mockName)
    })
})