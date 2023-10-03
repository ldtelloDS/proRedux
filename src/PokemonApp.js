import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemos } from "./store/slices/pokemon";

export const PokemonApp = () => {

  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemos());
  }, []);

  return (
    <>
      <h1>PokemonApp</h1>
      <hr />
      {isLoading ? <div>Cargando</div> : <div>Cargado</div>}

      <ul>
        {pokemons.map((pokemonItem) => (
          <li key={pokemonItem.url}>{pokemonItem.name}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(getPokemos(page))}>Siguiente pagina</button>
    </>
  );
};
