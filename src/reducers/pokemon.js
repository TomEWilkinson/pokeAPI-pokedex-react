import { combineReducers } from 'redux'

import {
  SELECT_POKEMON,
  INVALIDATE_POKEMON,
  REQUEST_POKEMON,
  RECEIVE_POKEMON
} from '../actions/pokemon'

function selectedPokemon(action) {
    switch (action.type) {
      case SELECT_POKEMON:
        return action.pokemon
      default:
        return pokemon
    }
  }

function pokemon(
    state = {
      isFetching: false,
      didInvalidate: false,
      pokemon: []
    },
    action
  ) {
    switch (action.type) {
      case INVALIDATE_POKEMON:
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case REQUEST_POKEMON:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case RECEIVE_POKEMON:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          pokemon: action.pokemon,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }


const rootReducer = combineReducers({
    selectedPokemon
  })
  
  export default pokemon