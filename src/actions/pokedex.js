/* Jira Gen Actions */

export const REQUEST_POKEDEX= 'REQUEST_POKEDEX'
function requestPokedex() {
  return {
    type: REQUEST_POKEDEX,
  }
}

export const RECEIVE_POKEDEX = 'RECEIVE_POKEDEX'
function receivePokedex(json) {
  return {
    type: RECEIVE_POKEDEX,
    pokemonList: json
  }
}

export const INVALIDATE_POKEDEX = 'INVALIDATE_POKEDEX'
export function invalidatePokedex() {
  return {
    type: INVALIDATE_POKEDEX,
  }
}


export function fetchPokedex() {
  
    return function(dispatch) {
  
      dispatch(requestPokedex())
      return fetch(`https://pokeapi.co/api/v2/pokedex/1`)
        .then(
          response => response.json(),
          error => console.log('An error occurred.', error)
        )
        .then(json =>
          dispatch(receivePokedex(json))
        )
    }
  }
