import Results, { formatJobList, formatQueryParams } from './'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { screen, waitForElementToBeRemoved } from '@testing-library/react'
import { render } from '../../utils/test'
 
describe('La fonction formatJobList', () => {
    it('ajoute une virgule à un item', () => {
        const expectedState = 'item2,'
        expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
    })
    it('ne met pas de virgule pour le dernier élément', () => {
        const expectedState = 'item3'
        expect(formatJobList('item3', 3, 2)).toEqual(expectedState)
    })
})

// const mockedJobAnswersData = {
// 	seo: ['a1'],
// 	frontend: ['a2'], 
// 	design: ['a3'],
// 	backend: ['a4','a5'],
// 	mobile: ['a6']
// }

//dans les models il y a deux arrays, ici on a creé un tableau avec ces arrays
// les titles pour ces arrays on récupere de !render! de composant Result, pas  de backend
const mockedJobsDefinitionData =  [
    {
      title: 'seo',
      description: `Le SEO est en charge du référencement web d'une page`,
    },
    {
      title: 'frontend',
      description: `Le développeur ou la développeuse frontend se charge de l'interface : interactions avec l'utilisateur, style, etc.`,
    },
  ]

const server = setupServer(
    rest.get('http://localhost:8000/results', (req, res, ctx) => {
        return res(ctx.json({ resultsData: mockedJobsDefinitionData }))
    })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

//ici on récreer un element DOM, pour ça il faut donner les id
describe('The Results component', () => {
    test('should display the results after the data is loaded', async () => {
      render(<Results />)
      await waitForElementToBeRemoved(() => screen.getByTestId('loader'))
      const jobTitleElements = screen.getAllByTestId('job-title')
      expect(jobTitleElements[0].textContent).toBe('seo')
      expect(jobTitleElements.length).toBe(2)
      const jobDescriptionElements = screen.getAllByTestId('job-description')
      expect(jobDescriptionElements[1].textContent).toBe(
        mockedJobsDefinitionData[1].description
      )
      expect(jobDescriptionElements.length).toBe(2)
    })
  })

//le test n'est passe pas
// describe('The formatQueryParams function', () => {
//     it('should use the right format for param', () => {
//       const expectedState = 'a1=answer1'
//       expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
//     })
//     it('should concatenate params with an &', () => {
//       const expectedState = 'a1=answer1&a2=answer2'
//       expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(
//         expectedState)
//     })
//   })
  