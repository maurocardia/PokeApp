import axios from 'axios';
import React, { useEffect,useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import textPoke from "../textpoke.png"
import {FcPrevious} from "react-icons/fc"



const PokemonDetails = () => {
    const {id} =useParams()
    const [pokemon,setPokemon]=useState({})
    const navigate = useNavigate()
    

    
    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(res=> setPokemon(res.data))

    },[])
    
const prevPage=()=>{
    navigate("/pokedex")
}
  
    return (
            <div  className='containerPokemonDetails'>   
                <button onClick={prevPage} className="buttonPagePrev"><FcPrevious/></button>
                <div className='containerLogo'>
                        <img className='titleLogo' src={textPoke} alt="" />
                </div>
                <div className='container'>

                    <div className='containerDetails'>
                    

                        <div className='containerImg'>
                            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
                            <div className='information'>

                                <h4> Weight: {pokemon.weight}</h4>
                                <h4>Height: {pokemon.height}</h4>
                            </div>
                            <div className='nameDEtails'>
                                <div></div>
                                <h1>{pokemon.name}</h1>
                                <div></div>
                            </div>
                            <div className='containerId'>
                            <h4 id='idPokemon'>#{pokemon.id}</h4>
                            </div>
                            
                        </div>

                        <div className='typeAbilities'>
                            <div className='type'>
                                <div className='titleType'>

                                    <div className='containerTopDiv'>
                                        <div className='topDiv'></div>
                                        <div></div>
                                    </div>
                                    <h3>Type</h3>
                                    <div className='containerTopDiv'>
                                        <div className='topDiv'></div>
                                        <div></div>
                                    </div>
                                </div>

                                <div  className='containerType'>
                                    {pokemon.types?.map(type=>(
                                        <div  className='containertypeabilities' key={type.type.url}>
                                            <li>{type.type.name}</li>
                                        </div>
                                    ))}

                                </div>

                                


                            </div>
                            <div className='abilities'>
                            <div className='titleType'>

                                <div className='containerTopDiv'>
                                        <div className='topDiv'></div>
                                        <div></div>
                                    </div>
                                    <h3>Abilities</h3>
                                    <div className='containerTopDiv'>
                                        <div className='topDiv'></div>
                                        <div></div>
                                    </div>
                                </div>

                                    
                                <div  className='containerAbilities'>
                                    {pokemon.abilities?.map(ability=>(
                                        <div  className='containertypeabilities' key={ability.ability.url}>
                                            <li>{ability.ability.name}</li>
                                        </div>
                                    ))}

                                </div>
                            </div>

                        </div>
                        
                        <div className='containerStatsBase'>
                            <div className='containerStats'>
                                <div></div>
                                <h3 className='titleStats'>Stats Base</h3>
                                <div></div>

                            </div>
                            <div className='buttonBarrs'>

                                <div className='containerButtonsBarrs'>
                                    <div>Hp:</div>
                                    <div>Speed:</div>
                                    <div>Attack:</div>
                                    <div>Defense:</div>

                                </div>
                                <div className='containerBarrs'>
                                    

                                    <div class="progress mb-2  ">
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${pokemon.stats?.[0].base_stat.toString()}%`}}></div>
                                    </div>
                                    <div>

                                    </div>
                                    <div class="progress mb-2 " >
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${pokemon.stats?.[5].base_stat.toString()}%`}}></div>
                                    </div>
                                    <div>

                                    </div>
                                    <div class="progress mb-2 " >
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${pokemon.stats?.[1].base_stat.toString()}%`}}></div>
                                    </div>
                                    <div class="progress mb-2 " >
                                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{width: `${pokemon.stats?.[2].base_stat.toString()}%`}}></div>
                                    
                                    </div>
                                        
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='movements'>
                        {pokemon.moves?.map(move=>(
                            <div key={move.move.name}>

                                <li className="liMovements" >{move.move.name}</li>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default PokemonDetails;