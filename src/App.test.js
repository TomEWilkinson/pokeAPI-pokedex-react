import React from 'react';
import ReactDOM from 'react-dom';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import App from './App';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import * as actions from './actions/pokedex';


const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Pokedex list can be saved', () => { 
    fetchMock.getOnce('https://pokeapi.co/api/v2/pokedex/1', {id:1
    })

    const expectedActions = [
      { type: actions.REQUEST_POKEDEX },
      {type: actions.RECEIVE_POKEDEX,
        pokemonList: {id:1}
      }
    ]

    const store = mockStore({id:1})

    return store.dispatch(actions.fetchPokedex()).then(() => {
      // return of async actions
      expect(store.getActions()).toEqual(expectedActions)
    })

});