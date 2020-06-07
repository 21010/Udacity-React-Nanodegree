import { GET_DECKS, ADD_CARD_TO_DECK, ADD_DECK } from '../actions/types'
import { combineReducers } from 'redux'

function decks(state = {}, action) {
    switch(action.type) {
        case GET_DECKS :
            return {
                ...state,
                ...action.payload.decks
            }
        case ADD_DECK :
            return {
                ...state,
                ...action.payload.deck
            }
        case ADD_CARD_TO_DECK :
            return {
                ...state,
                [action.payload.title]: {
                    ...state[action.payload.title],
                    questions: [ ...state[action.payload.title].questions, action.payload.card ]
                }
            }
        default :
            return state
    }
}

export default combineReducers({
    decks
})