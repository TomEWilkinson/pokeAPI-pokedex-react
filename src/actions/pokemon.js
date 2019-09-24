import fetch from 'cross-fetch'

/* Jira pokemon Actions */

export const SELECT_POKEMON = 'SELECT_POKEMON'

export const REQUEST_POKEMON= 'REQUEST_POKEMON'
function requestPokemon(pokemonNumber) {
  return {
    type: REQUEST_POKEMON,
    pokemonNumber
  }
}

export const RECEIVE_POKEMON = 'RECEIVE_POKEMON'
function receivePokemon(pokemonNumber, json) {
  return {
    type: RECEIVE_POKEMON,
    pokemonNumber,
    pokemon: json,
    receivedAt: Date.now()
  }
}

export const INVALIDATE_POKEMON = 'INVALIDATE_POKEMON'
export function invalidatePokemon(pokemonNumber) {
  return {
    type: INVALIDATE_POKEMON,
    pokemonNumber
  }
}


export function fetchPokemon(pokemonNumber) {
    return function(dispatch) {
  
      dispatch(requestPokemon(pokemonNumber))
      return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          dispatch(receivePokemon(pokemonNumber, json))
        )
    }
  }