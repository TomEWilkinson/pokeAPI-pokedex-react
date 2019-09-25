
import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Typeahead } from 'react-bootstrap-typeahead';



import {
    fetchPokedex
} from '../../actions/pokedex' ;

import {
    fetchPokemon
} from '../../actions/pokemon' ;


class Home  extends Component {

    componentDidMount() {
        this.props.fetchPokedex();
    }

    handleChange(selectedOptions) {
        //check for a match
        if(selectedOptions[0])
        {
            this.props.fetchPokemon(selectedOptions[0].id);
        }
    }

    render() {
        if(this.props.pokemonList === undefined)
        {
            return null;
        }

        let pokemonNameList =  this.props.pokemonList.map(pokemon => {
           return {name:pokemon.pokemon_species.name, id:pokemon.entry_number}
        });

        return (
            <div className="container">
                <h1 className="text-center">Gen List</h1>
                    <Typeahead
                        id="typeahead"
                        options={pokemonNameList}
                        labelKey={option => `${option.name}`}
                        onChange={this.handleChange.bind(this)}
                    />
                 {this.props.selectedPokemon.name &&
                    <div className="container">
                        <div class="row justify-content-md-center">
                            <h3>{this.props.selectedPokemon.name}</h3>
                        </div>
                        <div class="row justify-content-md-center">
                            <img alt="pokemon sprite" src={this.props.selectedPokemon.sprites.front_default}></img>
                        </div>
                        <div class="row justify-content-md-center">
                            <p>
                                Height: {this.props.selectedPokemon.height}<br></br>
                                Weight: {this.props.selectedPokemon.weight}
                            </p>
                        </div>
                        <div class="row justify-content-md-center">
                            <p>
                                Abilities: {this.props.selectedPokemon.abilities.map(abilities => {
                                    return abilities.ability.name + " "
                                })}
                            </p>
                        </div>
                    </div>
                 }
            </div>
        )
    }

}

const mapStateToProps = ({ pokedex, pokemon }) => ({
    pokemonList: pokedex.pokemonList.pokemon_entries,
    loading: pokedex.isFetching,
    selectedPokemon: pokemon.pokemon
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchPokedex,
    fetchPokemon
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)