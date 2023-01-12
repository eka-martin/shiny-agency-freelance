import { formatJobList, formatQueryParams } from './'

 
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

describe('La fonction formatQueryParams', () => {
    it('bon format pour le paramètre', () => {
        const expectedState = 'a1=answer1'
        expect(formatQueryParams({ 1: 'answer1' })).toEqual(expectedState)
    })
    it('utilisation obligatoire de &', () => {
        const expectedState = 'a1=answer1&a2=answer2'
        expect(formatQueryParams({ 1: 'answer1', 2: 'answer2' })).toEqual(expectedState)
    })
})