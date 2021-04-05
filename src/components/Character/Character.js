import React from 'react'
import './Character.css'
import {Link} from'react-router-dom'



const Character = (props) =>{
    const [characters,setCharacters]=React.useState({})
    React.useEffect(() =>{
        fetch(`https://rickandmortyapi.com/api/character/${props.match.params.id}`)
        .then(res => res.json())
        .then(data =>setCharacters(data))

    },[])
    console.log(props)
    return(
           <div className='background' >
               
               <button onClick = {() => props.history.push('/')} className='button'>Back to Page</button>
               
            <div className='character'>
                <h1>{characters.name}</h1>
                <img src={characters.image}/>
                <span>Species:{characters.species}</span>
                <span>Status:{characters.species}</span>
                <span>Gender:{characters.gender}</span>

             </div>
            </div>

    )
}

export default Character