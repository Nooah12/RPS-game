import {fireEvent, render, screen} from '@testing-library/react'
import ResetButton from './ResetButton'

describe("Check that reset button works and with correct props", () => {
    test("Reset button renders correctly", () => {
        render(<ResetButton onReset={() => {}} />)
        const resetButton = screen.getByRole('button')
        expect(resetButton).toBeInTheDocument()
    })

    test("calls onReset when button is clicked", () => {
        const onResetMock = jest.fn()
        render(<ResetButton onReset={onResetMock} />)

        const resetButton = screen.getByRole('button')

        fireEvent.click(resetButton)

        expect(onResetMock).toHaveBeenCalled() // Ok test ??
   })
})