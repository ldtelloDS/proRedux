import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/pokemon'
import { todosAPIS } from './apis'

export const store=configureStore({
  reducer: {
    counter: counterSlice.reducer,
    pokemons: pokemonSlice.reducer,
    [todosAPIS.reducerPath]:todosAPIS.reducer
  },
  middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(todosAPIS.middleware),
})