import React, { useState } from 'react';
import { changeName } from '../store/slices/username.slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ash from "../ash.png"
import textpoke from "../textpoke.png"
import pokeball from "../pokeball.png"


const InputUser = () => {
    const [userInput,setUserInput]=useState()
    const dispacth = useDispatch()
    const navigate =useNavigate()

    const submit = (e)=>{
        e.preventDefault()
        dispacth(changeName(userInput))
        navigate("/pokedex")
        

      
    }

    return (
        <div className='titleContainer' >
            <div className="titleLeft">
                <img src={textpoke}  className="pokeText" alt="" />
            </div>    

            <div    className='titleRight'>
                <div className='containerInput'>

                    <form onSubmit={submit} className="inputForm">
                        <input className='titleInput' type="text" 
                                value={userInput}
                                onChange={e=>setUserInput(e.target.value)}
                                placeholder="Enter your name"/>
                        <div>
                            <button className='buttonTitle'><img src={pokeball} alt="" /></button>

                        </div>       
                    </form>
                    <h1 className='titleTex'>Welcome Pokémon Trainer!</h1>
                </div>
                <img src={ash} alt=""  className='titleTrainer'/>

            </div>
            
        </div>
    );
};

export default InputUser;