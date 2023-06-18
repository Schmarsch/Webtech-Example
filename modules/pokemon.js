class Pokemon {
    // declare variables
    id
    name
    type

    constructor(id, name, type) {
        this.id = id
        this.name = name
        this.type = type
    }

    toString() {
        return `${this.name} [${this.id}]`
    }
}

class Pokemons {
    pokemons = []

    constructor() {
        console.log('Pokemons constructor called')
    }

    addPokemon(pokemon) {
        this.pokemons.push(pokemon)
    }

    toString() {
        return this.pokemons.join('\n')
    }

    getRand() {
        return this.pokemons[Math.floor(Math.random() * this.pokemons.length)]
    }
}

export { Pokemon, Pokemons }