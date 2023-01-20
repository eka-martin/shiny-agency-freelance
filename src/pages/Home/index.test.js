import { MemoryRouter } from "react-router-dom"
import { render, screen } from '@testing-library/react'
import Home from './'
import { ThemeProvider } from "../../utils/context"

describe('the Home component', () => {
    it('should render title', () => {
        render(
            <MemoryRouter>
                <ThemeProvider>
                    <Home />
                </ThemeProvider>
            </MemoryRouter>
        )
        //pour avoir acces au contenu de composant
        //screen.debug()
        expect(screen.getByRole('heading', {
            level: 2,
            text: 'Repérez vos besoins, on s’occupe du reste, avec les meilleurs talents'
        }
        )).toBeTruthy()


    })
})
