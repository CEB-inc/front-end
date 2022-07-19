import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect } from 'vitest'
import fetch from 'node-fetch'
import App from './App'

// whenever app calls fetch, it's calling the one in node-fetch
global.fetch = fetch

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