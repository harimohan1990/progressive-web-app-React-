import axios from 'axios';

const URL =`https://pokeapi.co/api/v2/pokemon?limit=150`

export const getPokemanList =async()=>{
    const {data} = await axios.get(URL)
    return data?.results
}