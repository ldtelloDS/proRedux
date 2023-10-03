import axios from "axios";

export const pokemonAPI=axios.create({
    baseURL:'https://pokeapi.co/api/v2/',
    // params:{
    //     limit:10,
    //     offset:0
    // }
});