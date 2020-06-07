import { GET_DECKS, ADD_DECK, ADD_CARD_TO_DECK } from './types'
import { _getDecks, _saveDeckTitle, _addCardToDeck, _initData } from '../utils/api'

export function getDecks(decks) {
    return {
        type: GET_DECKS,
        payload: {
            decks
        }
    }
}

function addDeck(deck) {
    return {
        type: ADD_DECK,
        payload: {
            deck
        }
    }
}

function addCardToDeck(title, card) {
    return {
        type: ADD_CARD_TO_DECK,
        payload: {
            title,
            card
        }
    }
}

export function handleGetDecks() {
    return (dispatch) => {
        return _getDecks()
            .then(decks => dispatch(getDecks(decks)))
    }
}

export function handleAddDeck(title) {
    return (dispatch) => _saveDeckTitle(title)
        .then((deck) => dispatch(addDeck(deck)))
}

export function handleAddCardToDeck(title, { question, answer }) {
    return (dispatch) => _addCardToDeck(title, { question, answer })
        .then(() => dispatch(addCardToDeck(title, { question, answer })))
}

export function handleInitData() {
    return (dispatch) => {
        return _initData()
            .then(decks => dispatch(getDecks(decks)))
    }
}