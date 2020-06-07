import { AsyncStorage } from 'react-native'
import demoData from './data'

export const STORAGE_KEY = '@UdaciCard'

// getDecks: return all of the decks along with their titles, questions, and answers.
// getDeck: take in a single id argument and return the deck associated with that id.
// saveDeckTitle: take in a single title argument and add it to the decks.
// addCardToDeck: take in two arguments, title and card, and will add the card to the list of questions for the deck with the associated title.

// demo data is provided in ./data.js file

export function _initData() {
    return _getDecks().then(decks => {
        return decks
            ? decks
            : AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(demoData)).then(() => demoData)
    })
}

export function _getDecks() {
    return AsyncStorage.getItem(STORAGE_KEY)
        .then(results => JSON.parse(results))
        .then(parsed => parsed)
        .catch(error => error)
}

export function _getDeck(key) {
    return _getDecks()
        .then(decks => decks[key])
        .catch(error => error)
}

export function _saveDeckTitle(title) {
    const deck = {
        [title]: {
            title,
            questions: []
        }
    }
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify(deck))
        .then(() => deck) 
}

export function _addCardToDeck(title, card) {
    return AsyncStorage.mergeItem(STORAGE_KEY, JSON.stringify({
        [title]: {
            questions: [ card ]
        }
    })).then(() => card)
}