import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import fetch from 'node-fetch'
import App from './App'

// whenever app calls fetch, it's calling the one in node-fetch
global.fetch = fetch

// TODO tests. aim at 'Web User Flows'
// 1. navigation checking(links go to the right place)
// 2. Test each page if they display what they should
// 3. check if entries are showing up. have a known list of entries
// 4. list of categories is correct when creating new entry
// 5. check if category is correct after clicking category for creation
// 6. test for invalid entries. (as of still to be implemented)
describe('App component', () => {
    // render a virtual screen of <App />
    beforeEach(function () { render(<App />) })

    it('Shows post heading', () => {
        // expect on the virtual screen, an h3 element to have content of 'Dive in!'
        expect(screen.getByRole('heading', {level: 3})).toHaveTextContent('Dive in!')
    })
    it('Shows category selection page when "New Post" clicked', async () => {
        await userEvent.click(screen.getByText('Create Post +'))
        expect(screen.getByText('Please select a New Post category:')).toBeInTheDocument()
    })
})
