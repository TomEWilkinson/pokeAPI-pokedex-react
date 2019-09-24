import { combineReducers } from 'redux'
import pokedex from './pokedex'
import pokemon from './pokemon';

export default combineReducers({
  pokedex,
  pokemon
})
