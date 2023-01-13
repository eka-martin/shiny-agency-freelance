import Footer from './'
import { render } from '@testing-library/react'
 
describe('Footer', () => {
    test('Should render without crash', async () => {
        render(<Footer />)
    })
})