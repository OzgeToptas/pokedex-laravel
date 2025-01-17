import { IPokemon } from "@/types/global";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPokemon = createAsyncThunk(
    'pokemon/fetchPokemon',
    async () => {
      const response = await axios.get('/api/pokedex');
      return response.data.data;
    }
  );

export default fetchPokemon
