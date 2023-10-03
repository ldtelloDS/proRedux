import { pokemonAPI } from "../../../api/pokemonAPI";
import { setPokemons, startIsLoading } from "./pokemonSlice";

export const getPokemos = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startIsLoading());
    // const response = await fetch(
    //   `https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page}`
    // );
    // const data = await response.json();

    const {data} = await pokemonAPI.get(`/pokemon?limit=10&offset=${page}`);

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
