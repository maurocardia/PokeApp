import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Pokemon from './Pokemon';
import { useNavigate } from 'react-router-dom';
import pokeball from "../pokeball.png"
import poked from "../poked.png"
import head from "../head.jpg"



const Pokedex = () => {
    const navigate = useNavigate()
    const username    = useSelector(state => state.username)
    const [pokemon,setPokemon]=useState([])
    const [inputCharacter,setInputcharacter]=useState("")
    const [type,setType]=useState([])
    const [toggleCheck,setToggleCheck]=useState(true)
    const [pageNext,setPageNext]=useState(0)
    const [pagePrev,setPagePrev]=useState(-20)
    const pages= [ ]

    for(let i=1; i<=57; i++ ){
        pages.push(i)
    }
  
    useEffect(()=>{
            axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${pageNext}&limit=20`)
            .then(res=> setPokemon(res.data.results))
            axios.get(`https://pokeapi.co/api/v2/type/`)
            .then(res=> setType(res.data.results))
            
    },[pageNext])

  
   
    const nextPage=()=>{
       setPageNext(pageNext+20)
        setPagePrev(pagePrev+20)
        
    }
  const prevPage=()=>{
    if(pageNext > 0){
        setPageNext(pageNext-20)
    }
  }
  

    
    const search=(e)=>{
        e.preventDefault()
        navigate(`/pokedex/${inputCharacter}`)

    }

    const selecttype=(e)=>{
          
            alert("has seleccionado " + e.target.value)
            axios.get(e.target.value)
            .then(res => setPokemon(res.data.pokemon))
          
    }   
 

    const onToggle=(e)=>{
      
        setToggleCheck(!toggleCheck)
    }

      console.log(pages[2]) 
      
    return (
        <div  className='containerPokedex'>
            <img src={head} alt="" />


            <h1 className='titlePokedex'><img src={poked} alt="" /></h1>
            <div className='containerTitle'>
                <h2 className='textWelcome'>Welcome {username}!</h2>
                <p className='subtitle'> ¿what is the pokemon to find?</p>
                
            </div>
            <br />

            <div className='containerSwitch'>

                <label  className="switchBtn ">
                    <input className='inputToggle' type="checkbox" />
                    <span className="slide round" onClick={onToggle}>{toggleCheck?"To Type":"To Pokémon"}</span>
                </label>
            </div>

            <br />

            <div className='containerButton'>
                <button className='nextPrev' onClick={prevPage}>Previus</button>
                            {pages.map(page=>(
                                <button className='pages'  onClick={()=>{setPageNext((page-1)*20)}}>{page}</button>
                            ))}
                <button className='nextPrev' onClick={nextPage}>Next</button>           

            </div>

            <select className={toggleCheck? "off":"listType"}
                    onChange={selecttype}>
                <option value="">Select a pokemon</option>
                {
                    type.map(typ=>(
                    <option   key={typ.url}
                            value={typ.url}>
                        {typ.name}
                    </option>

                ))}
            </select>
          
            <form className={toggleCheck? "pokedexInput":"off"} 
                  onSubmit={search}>
                <input 
                       type="text"
                       value={inputCharacter}
                       onChange={e=>setInputcharacter(e.target.value)}  />

                <button><img src={pokeball} alt="" /></button>

            </form>

        
     

            <div className='containerList'>

            {pokemon.map(poke =>(
                <li key={poke.url? poke.url : poke.pokemon.url}>
                    
                    <Pokemon  urlPokemon={poke.url? poke.url : poke.pokemon.url}/>

                </li>
                    
                
            ))}
            </div >
           
        </div>
    );
};

export default Pokedex;