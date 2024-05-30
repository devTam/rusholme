import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../"

interface PokemonSliceState {
  name: string
  id: number
  height: number
  weight: number
}

const initialState: PokemonSliceState = {
  name: "",
  id: 0,
  height: 0,
  weight: 0,
}

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemon: (state, action: PayloadAction<PokemonSliceState>) => {
      state.name = action.payload.name
      state.id = action.payload.id
      state.height = action.payload.height
      state.weight = action.payload.weight
    },
  },
})

export const { setPokemon } = pokemonSlice.actions

export const selectPokemon = (state: RootState) => state.pokemon

export default pokemonSlice.reducer