import express from 'express';
import { Pokemon, Pokemons } from '../modules/pokemon.js';

const team = new Pokemons();

team.addPokemon(new Pokemon(1, 'Bisasam', 'Pflanze'));
team.addPokemon(new Pokemon(2, 'Bisaknosp', 'Pflanze'));
team.addPokemon(new Pokemon(3, 'Bisaflor', 'Pflanze'));
team.addPokemon(new Pokemon(4, 'Glumanda', 'Feuer'));
team.addPokemon(new Pokemon(5, 'Glutexo', 'Feuer'));
team.addPokemon(new Pokemon(6, 'Glurak', 'Feuer'));
team.addPokemon(new Pokemon(7, 'Schiggy', 'Wasser'));
team.addPokemon(new Pokemon(8, 'Schillok', 'Wasser'));
team.addPokemon(new Pokemon(9, 'Turtok', 'Wasser'));

const pokemonRouter = express.Router();

pokemonRouter.get('/', (req, res) => {
    const pokemon = team.getRand();

    res.render('pokemon.tpl.html', {
        'id': pokemon.id,
        'name': pokemon.name,
    });
})

pokemonRouter.get('/count', (req, res) => {
    res.send(`Anzahl: ${team.pokemons.length}`);
})

export default pokemonRouter;