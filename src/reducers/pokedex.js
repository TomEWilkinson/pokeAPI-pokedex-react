import { combineReducers } from 'redux'

import {
  INVALIDATE_POKEDEX,
  REQUEST_POKEDEX,
  RECEIVE_POKEDEX
} from '../actions/pokedex'

function pokedex(
    state = {
      isFetching: false,
      didInvalidate: false,
      pokemonList: []
    },
    action
  ) {
    switch (action.type) {
      case INVALIDATE_POKEDEX:
        return Object.assign({}, state, {
          didInvalidate: true
        })
      case REQUEST_POKEDEX:
        return Object.assign({}, state, {
          isFetching: true,
          didInvalidate: false
        })
      case RECEIVE_POKEDEX:
        return Object.assign({}, state, {
          isFetching: false,
          didInvalidate: false,
          pokemonList: action.pokemonList,
          lastUpdated: action.receivedAt
        })
      default:
        return state
    }
  }


const rootReducer = combineReducers({
      pokedex
  })
  
  export default pokedex