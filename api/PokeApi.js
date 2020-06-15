import axios from 'axios'
import { from, asyncScheduler } from 'rxjs';
// import PokemonClient from '../data/PokemonClient';
import util from '../util';

const config = {
  timeout: 20 * 1000 //20s
}

const getAllPokemon = async () => {
    // return from(PokemonClient.getPokemonsList());
    // const data = from(axios.get('https://pokeapi.co/v2/pokemon/?limit=10000&offset=0'), asyncScheduler);
    // console.log(data);
    // return data;

    return await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=10000&offset=0');
}

export { getAllPokemon };

export default { getAllPokemon };