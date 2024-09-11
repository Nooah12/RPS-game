import {render, screen} from '@testing-library/react'
import Header from './Header'

describe("Header rendered correctly", () => {
    test("Render the title", () => {
        render(<Header />)

        const headerText = screen.getByText("Rock Papahhhh Scizzors Game")
        expect(headerText).toBeInTheDocument()
    })
})