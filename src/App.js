import React,{useEffect, useState } from 'react';

import {getPokemanList} from './components/pokemon'

function App() {
  const [pokemonData, SetPokeMonData] = useState([]);


  useEffect(()=>{
    async function fetPokemonData(){
      const data = await getPokemanList();
      SetPokeMonData(data)
    }
    fetPokemonData()
  },[])
  return (
    <div style={{marginTop:'40px',justifyContent:'space-between',display:'flex',flexWrap:"wrap",margin:'auto'}} className="App">
    {pokemonData?.map((poke,i)=>{
         return(
          <div>
            <h1>{poke.name}</h1>
             <img alt="pokeman img" style={{width:"250px",height:"200px"}} src={`https://img.pokemondb.net/artwork/large/${poke.name}.jpg`}/>
              
          </div>
        )
    })}
    dgfdsg
    </div>
  );
}

export default App;
