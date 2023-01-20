import Card from './'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeProvider } from '../../utils/context'


describe('Card', () => {

    test('Affichage d un titre et d image', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Jean-Baptist Charcot"
                    label="Développeur web"
                    picture="/monImage.png" />
            </ThemeProvider>
        )
        const cardPicture = screen.getByRole('img')
        const cardTitle = screen.getByText(/Jean-Baptist/i)
        expect(cardPicture.src).toBe('http://localhost/monImage.png')
        expect(cardTitle.textContent).toBe(' Jean-Baptist Charcot ')
    })
    test('Affichage d une etoile ⭐️', async () => {
        render(
            <ThemeProvider>
                <Card
                    title="Jean-Baptist Charcot"
                    label="Développeur web"
                    picture="/monImage.png" />
            </ThemeProvider>
        )
        const cardTitle = screen.getByText(/Jean-Baptist/i)
        const parentNode = cardTitle.closest('div')
        fireEvent.click(parentNode)
        expect(cardTitle.textContent).toBe('⭐️ Jean-Baptist Charcot ⭐️')
    })
})